package vpn

import (
	"context"
	"log"
	"strings"
	"time"

	b64 "encoding/base64"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/libp2p/go-libp2p"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/crypto"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/network"
	peerstore "github.com/libp2p/go-libp2p/core/peer"
	"github.com/libp2p/go-libp2p/core/routing"
	rcmgr "github.com/libp2p/go-libp2p/p2p/host/resource-manager"
	connmgr "github.com/libp2p/go-libp2p/p2p/net/connmgr"

	noise "github.com/libp2p/go-libp2p/p2p/security/noise"
	libp2ptls "github.com/libp2p/go-libp2p/p2p/security/tls"
	quic "github.com/libp2p/go-libp2p/p2p/transport/quic"
	"github.com/libp2p/go-libp2p/p2p/transport/tcp"
	"github.com/songgao/water"
)

var (
	tunEnabled bool
	nodeIface  *water.Interface
	stopChan   = make(chan struct{})
	// Connection manager to handle multiple concurrent clients
	connectionManager = NewConnectionManager()
)

func handleCloseStreamHandler() {
	closeOnce.Do(func() {
		close(stopChan)
	})
}

func displayNodeInfo(node host.Host) {
	// print node ID
	log.Println("───────────────────────────────────────────────────")
	log.Println("libp2p peer ID: ", node.ID())

	// print the node's PeerInfo in multiaddr format
	peerInfo := peerstore.AddrInfo{
		ID:    node.ID(),
		Addrs: node.Addrs(),
	}
	addrs, err := peerstore.AddrInfoToP2pAddrs(&peerInfo)
	utils.Check(err)

	log.Println("libp2p peer address:")
	for i := 0; i < len(addrs); i++ {
		log.Println("\t", addrs[i])
	}
	log.Println("───────────────────────────────────────────────────")
}

// StartNode initializes and starts a libp2p node
func StartNode(innerConfig utils.InnerConfig, pk crypto.PrivKey, tcpPort string, udpPort string) (host.Host, *dht.IpfsDHT, error) {
	// The context governs the lifetime of the libp2p node.
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	resourceManager, err := rcmgr.NewResourceManager(rcmgr.NewFixedLimiter(rcmgr.InfiniteLimits))
	utils.Check(err)

	// Configure connection manager with limits
	// Set a low limit for maximum number of peers to connect to (much less than the default 25)
	log.Printf("Configuring connection manager with strict limits: LowWater=3, HighWater=10")
	connMgr, err := connmgr.NewConnManager(
		3,  // LowWater - below this we'll accept new connections
		10, // HighWater - above this we'll prune connections
		connmgr.WithGracePeriod(time.Second*30), // Much shorter grace period - 30 seconds instead of 5 minutes
		connmgr.WithEmergencyTrim(true),         // Allow emergency trimming if we run out of file descriptors
	)
	if err != nil {
		log.Printf("Failed to create connection manager: %v", err)
		return nil, nil, err
	}
	log.Printf("Successfully configured libp2p connection manager: max peers=10, grace period=30s")

	var idht *dht.IpfsDHT

	// Create libp2p node with our connection manager
	node, err := libp2p.New(
		// Multiple listen addresses
		libp2p.ListenAddrStrings(
			"/ip4/0.0.0.0/udp/"+udpPort+"/quic-v1", // IPv4 QUIC
			"/ip4/0.0.0.0/tcp/"+tcpPort,            // IPv4 TCP
		),
		libp2p.Identity(pk),
		libp2p.DefaultMuxers,
		libp2p.Security(libp2ptls.ID, libp2ptls.New),
		libp2p.Security(noise.ID, noise.New),
		libp2p.Transport(quic.NewTransport),
		libp2p.Transport(tcp.NewTCPTransport),
		libp2p.NATPortMap(),
		libp2p.Routing(func(h host.Host) (routing.PeerRouting, error) {
			// Configure DHT with options to limit connection usage
			idht, err = dht.New(ctx, h,
				dht.Mode(dht.ModeClient),               // Client mode doesn't store or provide records
				dht.Concurrency(2),                     // Limit concurrent queries
				dht.QueryFilter(dht.PublicQueryFilter), // Only use public addresses
			)
			log.Println("initializing DHT with limited concurrency...")
			return idht, err
		}),
		// Add the connection manager to limit max peers to 10 (HighWater mark)
		libp2p.ConnectionManager(connMgr),
		libp2p.ResourceManager(resourceManager),
		libp2p.Ping(true),
	)
	utils.Check(err)

	keyBytes, err := crypto.MarshalPrivateKey(node.Peerstore().PrivKey(node.ID()))
	utils.Check(err)
	sEnc := b64.StdEncoding.EncodeToString([]byte(keyBytes))
	if utils.IsDebugEnabled() {
		log.Println(sEnc)
	}

	// Connect to a limited number of bootstrap peers
	// We'll connect to just a few bootstrap peers to avoid exceeding our connection limit
	bootstrapPeers := dht.DefaultBootstrapPeers
	maxBootstrapPeers := 3 // Limit to 3 bootstrap peers to stay under our connection limits

	if len(bootstrapPeers) > maxBootstrapPeers {
		bootstrapPeers = bootstrapPeers[:maxBootstrapPeers]
	}

	log.Printf("Connecting to %d bootstrap peers (limited from %d default)",
		len(bootstrapPeers), len(dht.DefaultBootstrapPeers))

	for _, addr := range bootstrapPeers {
		pi, _ := peerstore.AddrInfoFromP2pAddr(addr)
		err := node.Connect(ctx, *pi)
		if err != nil {
			log.Printf("Failed to connect to bootstrap peer %s: %v", pi.ID, err)
			continue
		}
		log.Println("Connected to bootstrap peer: ", pi.ID)
	}

	log.Println("Enabling Stream Handler...")
	// Set the Skypier protocol handler on the Host's Mux
	node.SetStreamHandler("/skypier/1.0", streamHandler)
	log.Println("Stream handler enabled for protocol /skypier/1.0")

	// Bootstrap the DHT to build its routing table
	// if err := idht.Bootstrap(ctx); err != nil {
	// 	log.Fatalf("Failed to bootstrap DHT: %v", err)
	// }

	// Refresh the routing table to help discover peers
	// idht.RefreshRoutingTable()

	return node, idht, err
}

func shouldCloseStream(err error) bool {
	if err == nil {
		return false
	}

	// Handle our custom error type
	if err == ErrStreamClosed {
		return true
	}

	errMsg := err.Error()
	return errMsg == "stream reset" ||
		errMsg == "no recent network activity" ||
		errMsg == "read tun: not pollable" ||
		errMsg == "read tun: file descriptor in bad state" ||
		strings.Contains(errMsg, "received a stateless reset with token") ||
		strings.Contains(errMsg, "Application error 0x0") ||
		strings.Contains(errMsg, "use of closed network connection")
}

func SetNodeUp(ctx context.Context, config utils.InnerConfig) (host.Host, *dht.IpfsDHT) {
	log.Println("Generating identity...")
	privKey, err := LoadPrivateKey()
	utils.Check(err)

	// Find available port for both TCP and UDP
	tcpPort := utils.GetFirstAvailableTCPPort(4002, 4999)
	udpPort := utils.GetFirstAvailableTCPPort(4002, 4999)

	node, dht, err := StartNode(config, privKey, tcpPort, udpPort)
	utils.Check(err)

	// Set up stream watcher to monitor for disconnections
	streamWatcher := NewStreamWatcher(connectionManager)
	notifyBundle := &network.NotifyBundle{}
	streamWatcher.RegisterHost(ctx, notifyBundle)
	node.Network().Notify(notifyBundle)
	log.Println("Registered stream watcher to handle peer disconnections")

	displayNodeInfo(node)

	return node, dht
}

// streamHandler handles incoming streams for the "/skypier/1.0" protocol
func streamHandler(s network.Stream) {
	peerID := s.Conn().RemotePeer()
	log.Printf("Starting the stream handler for peer: %s", peerID)
	log.Printf("Node status: %v (true=server, false=client)", utils.IS_NODE_HOST)

	// Check if we already have a connection to this peer
	if existingConn, exists := connectionManager.GetConnection(peerID); exists && existingConn.IsRunning {
		log.Printf("Connection already exists for peer %s, closing new stream", peerID)
		s.Close()
		return
	}

	// Create a new connection context for this stream
	conn := NewConnectionContext(peerID, s)
	log.Printf("Created new connection context for peer %s", peerID)

	// Create a dedicated TUN interface for this connection
	conn.Interface, conn.InterfaceName, conn.LocalIP, conn.RemoteIP = SetInterfaceUpForConnection()
	log.Printf("Created TUN interface %s with IPs local=%s, remote=%s",
		conn.InterfaceName, conn.LocalIP, conn.RemoteIP)

	// Add the connection to our manager
	connectionManager.AddConnection(conn)
	log.Printf("Added connection to connection manager")

	// Handle IP negotiation with retries - as the server side
	log.Printf("Starting IP negotiation as server for peer %s", peerID)
	const maxRetries = 3 // Maximum number of negotiation attempts
	localIP, remoteIP, err := RetryNegotiateIPs(conn, "server", maxRetries)
	if err != nil {
		log.Printf("IP negotiation failed after retries: %v", err)
		conn.Cleanup()
		return
	}
	log.Printf("IP negotiation successful: local=%s, remote=%s", localIP, remoteIP)

	// Validate the negotiated IPs
	validatedLocalIP, validatedRemoteIP, err := ValidateAndUseNegotiatedIPs(conn, localIP, remoteIP)
	if err != nil {
		log.Printf("IP validation failed for peer %s: %v", peerID, err)
		conn.Cleanup()
		return
	}

	log.Printf("Validated IPs for peer %s: local=%s, remote=%s",
		peerID, validatedLocalIP, validatedRemoteIP)

	buf_mtu := make([]byte, 1500)

	// Start the goroutine with error handling for TUN -> Stream (outgoing data)
	go func() {
		defer conn.CloseStream()
		for {
			select {
			case <-conn.StopChan:
				log.Printf("Stopping outgoing data handler for peer %s", conn.PeerID.String())
				return
			default:
				// Use our safe stream wrapper
				safeStream := NewSafeStreamWrapper(conn)
				n, err := utils.Copy(safeStream, conn.Interface, buf_mtu)
				log.Printf("⬅️ %d bytes copied from %s to stream", n, conn.InterfaceName)
				if err != nil {
					if err == ErrStreamClosed {
						log.Printf("Stream closed, stopping outgoing data handler for peer %s", conn.PeerID)
						return
					}
					log.Printf("🚨🚨🚨 Error copying data: %v", err)
					if shouldCloseStream(err) {
						log.Printf("Closing stream for peer %s due to error", conn.PeerID)
						connectionManager.StopConnection(conn.PeerID)
						return
					} else {
						log.Println("Error is not so bad, continue... (debug)")
					}
				}
			}
		}
	}()

	// Start the goroutine with error handling for Stream -> TUN (incoming data)
	go func() {
		defer conn.CloseStream()
		for {
			select {
			case <-conn.StopChan:
				log.Printf("Stopping incoming data handler for peer %s", conn.PeerID.String())
				return
			default:
				// Use our safe stream wrapper
				safeStream := NewSafeStreamWrapper(conn)
				n, err := utils.Copy(conn.Interface, safeStream, buf_mtu)
				if err != nil {
					if err == ErrStreamClosed {
						log.Printf("Stream closed, stopping incoming data handler for peer %s", conn.PeerID)
						return
					}
					if err.Error() == "short buffer" {
						continue // 0 bytes copied, continue
					}
					if n != 0 {
						log.Printf("➡️ %d bytes copied from stream to %s", n, conn.InterfaceName)
						log.Printf("🚨🚨🚨 Error copying data: %v", err)
					}
					if shouldCloseStream(err) {
						connectionManager.StopConnection(conn.PeerID)
						return
					}
				} else {
					if n == 0 {
						log.Printf("🚨🚨🚨 No data copied for peer %s, closing stream", conn.PeerID)
						connectionManager.StopConnection(conn.PeerID)
						return
					}
				}
			}
		}
	}()
}
