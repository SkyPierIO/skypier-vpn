package vpn

import (
	"context"
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
)

var (
	// tunEnabled bool
	// nodeIface  *water.Interface
	stopChan = make(chan struct{})
	// Connection manager to handle multiple concurrent clients
	connectionManager = NewConnectionManager()

	// Component loggers
	p2pLog    = utils.P2PLog
	streamLog = utils.StreamLog
	dhtLog    = utils.DHTLog
)

// func handleCloseStreamHandler() {
// 	closeOnce.Do(func() {
// 		close(stopChan)
// 	})
// }

func displayNodeInfo(node host.Host) {
	// print node ID
	p2pLog.Separator()
	p2pLog.Info("libp2p peer ID: %s", node.ID())

	// print the node's PeerInfo in multiaddr format
	peerInfo := peerstore.AddrInfo{
		ID:    node.ID(),
		Addrs: node.Addrs(),
	}
	addrs, err := peerstore.AddrInfoToP2pAddrs(&peerInfo)
	utils.Check(err)

	p2pLog.Info("libp2p peer addresses:")
	for i := 0; i < len(addrs); i++ {
		p2pLog.Info("  %s", addrs[i])
	}
	p2pLog.Separator()
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
	p2pLog.Info("Configuring connection manager: LowWater=5, HighWater=15")
	connMgr, err := connmgr.NewConnManager(
		5,  // LowWater - below this we'll accept new connections
		15, // HighWater - above this we'll prune connections
		connmgr.WithGracePeriod(time.Second*10), // Much shorter grace period - 30 seconds instead of 5 minutes
		connmgr.WithEmergencyTrim(true),         // Allow emergency trimming if we run out of file descriptors
	)
	if err != nil {
		p2pLog.Error("Failed to create connection manager: %v", err)
		return nil, nil, err
	}
	p2pLog.Success("Connection manager configured")

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
			dhtLog.Info("Initializing DHT with limited concurrency...")
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
		p2pLog.Debug("Private key: %s", sEnc)
	}

	// Connect to a limited number of bootstrap peers
	// We'll connect to just a few bootstrap peers to avoid exceeding our connection limit
	bootstrapPeers := dht.DefaultBootstrapPeers
	maxBootstrapPeers := 3 // Limit to 3 bootstrap peers to stay under our connection limits

	if len(bootstrapPeers) > maxBootstrapPeers {
		bootstrapPeers = bootstrapPeers[:maxBootstrapPeers]
	}

	dhtLog.Info("Connecting to %d bootstrap peers (limited from %d)",
		len(bootstrapPeers), len(dht.DefaultBootstrapPeers))

	for _, addr := range bootstrapPeers {
		pi, _ := peerstore.AddrInfoFromP2pAddr(addr)
		err := node.Connect(ctx, *pi)
		if err != nil {
			dhtLog.Warn("Failed to connect to bootstrap peer %s: %v", pi.ID, err)
			continue
		}
		dhtLog.Success("Connected to bootstrap peer: %s", pi.ID)
	}

	streamLog.Info("Enabling stream handler...")
	// Set the Skypier protocol handler on the Host's Mux
	// Use a closure to capture the node so we can protect VPN connections from pruning
	node.SetStreamHandler("/skypier/1.0", makeStreamHandler(node))
	streamLog.Success("Stream handler enabled for protocol /skypier/1.0")

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
		strings.Contains(errMsg, "Application error 0x1005") ||
		strings.Contains(errMsg, "connection closed (remote)") ||
		strings.Contains(errMsg, "use of closed network connection")
}

func SetNodeUp(ctx context.Context, config utils.InnerConfig) (host.Host, *dht.IpfsDHT) {
	p2pLog.Info("Generating identity...")
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
	watcherLog.Info("Registered stream watcher for peer disconnections")

	displayNodeInfo(node)

	return node, dht
}

// makeStreamHandler creates a stream handler closure that captures the host node
// This allows the handler to protect VPN connections from being pruned by the connection manager
func makeStreamHandler(node host.Host) network.StreamHandler {
	return func(s network.Stream) {
		peerID := s.Conn().RemotePeer()
		streamLog.Info("Starting stream handler for peer: %s", peerID)
		streamLog.Debug("Node status: %v (true=server, false=client)", utils.IS_NODE_HOST)

		// CRITICAL: Protect this VPN connection from being pruned by the connection manager
		// This prevents the connection manager from closing VPN streams when trimming connections
		streamLog.Info("🛡️ Protecting VPN connection for peer %s", peerID)
		node.ConnManager().Protect(peerID, "skypier-vpn")

		// Check if we already have a connection to this peer
		if existingConn, exists := connectionManager.GetConnection(peerID); exists && existingConn.IsRunning {
			streamLog.Warn("Connection already exists for peer %s, closing new stream", peerID)
			// Don't forget to unprotect if we're rejecting this connection
			node.ConnManager().Unprotect(peerID, "skypier-vpn")
			s.Close()
			return
		}

		// Create a new connection context for this stream
		conn := NewConnectionContext(peerID, s)
		streamLog.Debug("Created connection context for peer %s", peerID)

		// Create a dedicated TUN interface for this connection
		conn.Interface, conn.InterfaceName, conn.LocalIP, conn.RemoteIP = SetInterfaceUpForConnection()
		utils.TUNLog.Info("Created TUN %s (local=%s, remote=%s)",
			conn.InterfaceName, conn.LocalIP, conn.RemoteIP)

		// Add the connection to our manager
		connectionManager.AddConnection(conn)
		connLog.Debug("Added connection to manager")

		// Handle IP negotiation with retries - as the server side
		utils.NegotiateLog.Info("Starting IP negotiation as server for peer %s", peerID)
		const maxRetries = 3 // Maximum number of negotiation attempts
		localIP, remoteIP, err := RetryNegotiateIPs(conn, "server", maxRetries)
		if err != nil {
			utils.NegotiateLog.Error("IP negotiation failed: %v", err)
			// Unprotect on failure before cleanup
			node.ConnManager().Unprotect(peerID, "skypier-vpn")
			conn.Cleanup()
			return
		}
		utils.NegotiateLog.Success("Negotiated IPs: local=%s, remote=%s", localIP, remoteIP)

		// Validate the negotiated IPs
		validatedLocalIP, validatedRemoteIP, err := ValidateAndUseNegotiatedIPs(conn, localIP, remoteIP)
		if err != nil {
			utils.NegotiateLog.Error("IP validation failed for peer %s: %v", peerID, err)
			// Unprotect on failure before cleanup
			node.ConnManager().Unprotect(peerID, "skypier-vpn")
			conn.Cleanup()
			return
		}

		utils.NegotiateLog.Debug("Validated IPs for peer %s: local=%s, remote=%s",
			peerID, validatedLocalIP, validatedRemoteIP)

		// Use a larger buffer for better throughput (64KB instead of MTU-sized 1500)
		// This reduces syscall overhead significantly for bulk transfers
		buf_mtu := make([]byte, 65536)

		// Initialize stats tracking for this connection
		connStats := GetGlobalStats().GetOrCreate(conn.PeerID)

		// Start the goroutine with error handling for TUN -> Stream (outgoing data)
		go func() {
			defer func() {
				// Unprotect the connection when the stream handler exits
				streamLog.Debug("🛡️ Removing protection for peer %s (handler exit)", peerID)
				node.ConnManager().Unprotect(peerID, "skypier-vpn")
				conn.CloseStream()
				// Remove stats when connection ends
				GetGlobalStats().Remove(conn.PeerID)
			}()
			for {
				select {
				case <-conn.StopChan:
					streamLog.Debug("Stopping outgoing handler for peer %s", conn.PeerID.String())
					return
				default:
					// Use our safe stream wrapper
					safeStream := NewSafeStreamWrapper(conn)
					// Use CopyWithCallback for real-time stats tracking
					n, err := utils.CopyWithCallback(safeStream, conn.Interface, buf_mtu, func(bytes int64) {
						connStats.RecordBytesSent(bytes)
					})
					if n > 0 {
						streamLog.Data("⬅️", n, "from %s to stream", conn.InterfaceName)
					}
					if err != nil {
						if err == ErrStreamClosed {
							streamLog.Debug("Stream closed, stopping outgoing handler for peer %s", conn.PeerID)
							return
						}
						streamLog.Error("Error copying data: %v", err)
						if shouldCloseStream(err) {
							streamLog.Warn("Closing stream for peer %s due to error", conn.PeerID)
							connectionManager.StopConnection(conn.PeerID)
							return
						}
					}
				}
			}
		}()

		// Start the goroutine with error handling for Stream -> TUN (incoming data)
		go func() {
			defer conn.CloseStream()
			zeroReadCount := 0
			const maxZeroReads = 10 // Allow some zero reads before considering it a disconnect
			for {
				select {
				case <-conn.StopChan:
					streamLog.Debug("Stopping incoming handler for peer %s", conn.PeerID.String())
					return
				default:
					// Use our safe stream wrapper
					safeStream := NewSafeStreamWrapper(conn)
					// Use CopyWithCallback for real-time stats tracking
					n, err := utils.CopyWithCallback(conn.Interface, safeStream, buf_mtu, func(bytes int64) {
						connStats.RecordBytesReceived(bytes)
					})
					if err != nil {
						if err == ErrStreamClosed {
							streamLog.Debug("Stream closed, stopping incoming handler for peer %s", conn.PeerID)
							return
						}
						if err.Error() == "short buffer" {
							continue // 0 bytes copied, continue
						}
						if n != 0 {
							streamLog.Data("➡️", n, "from stream to %s", conn.InterfaceName)
							streamLog.Error("Error copying data: %v", err)
						}
						if shouldCloseStream(err) {
							connectionManager.StopConnection(conn.PeerID)
							return
						}
					} else {
						if n == 0 {
							zeroReadCount++
							if zeroReadCount >= maxZeroReads {
								streamLog.Warn("Too many zero-byte reads (%d) for peer %s, closing", zeroReadCount, conn.PeerID)
								connectionManager.StopConnection(conn.PeerID)
								return
							}
							// Brief sleep to prevent busy loop during idle periods
							// Reduced from 10ms to 1ms for lower latency
							time.Sleep(1 * time.Millisecond)
							continue
						}
						// Reset counter on successful read
						zeroReadCount = 0
					}
				}
			}
		}()
	} // end of stream handler function
} // end of makeStreamHandler
