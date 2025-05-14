package vpn

import (
	"context"
	"log"
	"strings"

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

	var idht *dht.IpfsDHT

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
			idht, err = dht.New(ctx, h)
			log.Println("initializing DHT...")
			return idht, err
		}),
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

	// Connect to bootstrap peers
	for _, addr := range dht.DefaultBootstrapPeers {
		pi, _ := peerstore.AddrInfoFromP2pAddr(addr)
		err := node.Connect(ctx, *pi)
		utils.Check(err)
		log.Println("Connected to bootstrap peer: ", pi.ID)
	}

	log.Println("Enabling Stream Handler...")
	// Set the Skypier protocol handler on the Host's Mux
	node.SetStreamHandler("/skypier/1.0", streamHandler)
	log.Println("Stream handler enabled for protocol /skypier/1.0")

	// Bootstrap the DHT to build its routing table
	if err := idht.Bootstrap(ctx); err != nil {
		log.Fatalf("Failed to bootstrap DHT: %v", err)
	}

	idht.RefreshRoutingTable()

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
	displayNodeInfo(node)

	return node, dht
}

// streamHandler handles incoming streams for the "/skypier/1.0" protocol
func streamHandler(s network.Stream) {
	log.Println("Starting the stream handler for peer:", s.Conn().RemotePeer())
	log.Println("node status", utils.IS_NODE_HOST)

	// Create a new connection context for this stream
	conn := NewConnectionContext(s.Conn().RemotePeer(), s)

	// Create a dedicated TUN interface for this connection
	conn.Interface, conn.InterfaceName, conn.LocalIP, conn.RemoteIP = SetInterfaceUpForConnection()

	// Add the connection to our manager
	connectionManager.AddConnection(conn)

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
