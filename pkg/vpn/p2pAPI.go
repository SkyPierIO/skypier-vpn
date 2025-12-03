package vpn

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"runtime"
	"sync"
	"time"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/gin-gonic/gin"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/network"
	peerstore "github.com/libp2p/go-libp2p/core/peer"
)

type SkypierNode struct {
	PeerId          string `json:"peerId"`
	Nickname        string `json:"nickname,omitempty"`
	Version         string `json:"version"`
	OperatingSystem string `json:"os"`
	Status          string `json:"status"`
	// Uptime          time.Duration `json:"uptime"`
}

var (
	streams   = make(map[peerstore.ID]network.Stream)
	streamsMu sync.Mutex
	closeOnce sync.Once
)

// CloseAllStreams closes all active streams in the connection manager.
func CloseAllStreams() {
	// Get all connections first
	connections := connectionManager.GetAllConnections()

	// First, close all streams to prevent new reads/writes
	for _, conn := range connections {
		// Close the stream using our safe method
		if err := conn.CloseStream(); err != nil {
			log.Printf("Error closing stream for peer %s: %v", conn.PeerID, err)
		} else {
			log.Printf("Successfully closed stream for peer %s", conn.PeerID)
		}
	}

	// Then stop all goroutines
	connectionManager.StopAllConnections()

	// Finally, clean up interfaces
	for _, conn := range connections {
		// Remove the TUN interface if it exists
		if conn.Interface != nil && conn.InterfaceName != "" {
			if err := RemoveInterface(conn.InterfaceName); err != nil {
				log.Printf("Error removing interface %s: %v", conn.InterfaceName, err)
			}
		}
	}

	// For backward compatibility, also clear the old streams map
	streamsMu.Lock()
	defer streamsMu.Unlock()
	streams = make(map[peerstore.ID]network.Stream)
}

func HandleExit() {
	// Close all active connections
	CloseAllStreams()

	// Restore original routing if needed
	if err := RestoreRouting(); err != nil {
		log.Printf("Warning: Error restoring routing: %v", err)
	}

	// Close global stop channel for backward compatibility
	closeOnce.Do(func() {
		close(stopChan)
	})
}

func QuitSkypier(c *gin.Context) {
	// Send the response first
	c.JSON(http.StatusOK, gin.H{"status": "quitting"})

	// Delay the exit to ensure the response is sent
	go func() {
		time.Sleep(1 * time.Second)
		HandleExit()
		log.Println("Enabling back the IPv6 addressing. ")
		if err := utils.EnableIPv6(); err != nil {
			log.Fatalf("Error restablishing IPv6 addressing: %v", err)
		}
		os.Exit(0)
	}()
}

// GetConnectedPeersCount     godoc
// @Summary      Get the ConnectedPeers Count
// @Description  Get the ConnectedPeers Count
// @Tags         VPN
// @Produce      json
// @Router       /connected_peers_count [get]
func GetConnectedPeersCount(node host.Host, mydht *dht.IpfsDHT) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		// Get actual libp2p connections from the node
		// This reflects the connections limited by the connection manager
		connectedPeers := node.Network().Peers()
		actualConnections := len(connectedPeers)

		// For reference, also get routing table peers
		routingTablePeers := len(mydht.RoutingTable().ListPeers())

		// Get active VPN connections for reference
		activeVPNConnections := connectionManager.GetActiveConnectionsCount()

		log.Printf("Connected peers: %d (libp2p), %d (routing table), %d (active VPN)",
			actualConnections, routingTablePeers, activeVPNConnections)

		c.JSON(http.StatusOK, gin.H{
			"connected_peers_count":  actualConnections,    // Use actual connections count
			"libp2p_connections":     actualConnections,    // Same as connected_peers_count
			"routing_table_peers":    routingTablePeers,    // DHT routing table size
			"active_vpn_connections": activeVPNConnections, // VPN tunnels only
			"max_connections":        10,                   // Our configured high water mark
			"conn_mgr_config": map[string]interface{}{
				"low_water_mark":  3,
				"high_water_mark": 10,
				"grace_period":    "30s",
			},
		})
	}
	return gin.HandlerFunc(fn)
}

// GetLocalPeerId     godoc
// @Summary      Get the local peer ID
// @Description  Get the local libp2p peer ID (this is the identity of your node on the Skypier Network)
// @Tags         VPN
// @Produce      json
// @Router       /id [get]
func GetLocalPeerId(node host.Host) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		type PeerBrief struct {
			Id string `json:"peerId"`
		}
		p := &PeerBrief{Id: node.ID().String()}
		c.IndentedJSON(200, p)
	}
	return gin.HandlerFunc(fn)
}

// GetLocalPeerDetails     godoc
// @Summary      Get the local peer details
// @Description  Get the local libp2p peer ID and details (OS, uptime, version, etc.)
// @Tags         VPN
// @Produce      json
// @Router       /me [get]
func GetLocalPeerDetails(node host.Host) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		peerId := node.ID()
		config, err := utils.LoadConfiguration("/etc/skypier/config.json")
		utils.Check(err)

		skypierNode := &SkypierNode{
			PeerId:          peerId.String(),
			Nickname:        config.Nickname,
			Version:         "v0.0.1",
			OperatingSystem: runtime.GOOS,
			Status:          "TestStatus",
		}

		c.IndentedJSON(200, skypierNode)
	}
	return gin.HandlerFunc(fn)
}

// TestConnectivity     godoc
// @Summary      Test the connectivity of a remote host (using Libp2p Connect)
// @Description  Find the addresses from a multiaddr and try to connect to the peer
// @Tags         VPN
// @Produce      json
// @Param        peerId   		path string  true  "Peer ID"
// @Router       /ping/{peerId} [get]
func TestConnectivity(node host.Host, dht *dht.IpfsDHT) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		addrString := "/p2p/" + c.Param("peerId")
		dstPeer, err := peerstore.AddrInfoFromString(addrString)
		if err != nil {
			log.Println(err)
			c.IndentedJSON(200, err)
			return
		}
		log.Println(dstPeer)
		if err := node.Connect(c, *dstPeer); err != nil {
			log.Println(err)
			c.IndentedJSON(200, err)
			return
		}
		log.Println("Connected to the remote peer", dstPeer.ID, dstPeer.Addrs)
		type Result struct {
			Res string `json:"result"`
		}
		r := &Result{Res: "Address reachable: " + addrString}
		c.IndentedJSON(200, r)
	}
	return gin.HandlerFunc(fn)
}

// Connect     godoc
// @Summary      Connect to a remote libp2p peer and enable new Stream
// @Description  Connect to a remote libp2p peer and enable new Stream
// @Tags         VPN
// @Produce      json
// @Param        peerId   		path string  true  "Peer ID"
// @Router       /connect/{peerId} [get]
func Connect(node host.Host, dht *dht.IpfsDHT) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		peerId := c.Param("peerId")
		peerIdObj, err := peerstore.Decode(peerId)
		if err != nil && utils.IsDebugEnabled() {
			log.Println("[+] Peerstor decoding error: Cannot decode Peer ID. ", err)
		}
		pi, err := dht.FindPeer(c, peerIdObj)
		if err != nil && utils.IsDebugEnabled() {
			log.Println("[+] Connection error: dht.FindPeer returns nil while looking for peer ", peerId, err)
			c.IndentedJSON(404, "Cannot find the peer in the DHT "+peerIdObj.String())
			return
		}

		if err := node.Connect(c, pi); err != nil {
			log.Println(err)
			c.IndentedJSON(200, err)
			return
		}

		// Check if we already have a connection to this peer
		if conn, exists := connectionManager.GetConnection(pi.ID); exists && conn.IsRunning {
			c.IndentedJSON(200, gin.H{
				"result":    "Already connected to peer " + pi.ID.String(),
				"interface": conn.InterfaceName,
			})
			return
		}

		// Create a new stream with the Skypier protocol
		log.Printf("Creating new stream to peer %s with protocol /skypier/1.0", pi.ID)
		s, err := node.NewStream(c, pi.ID, "/skypier/1.0")
		if err != nil {
			log.Println("Error creating stream:", err)
			c.IndentedJSON(500, gin.H{"error": err.Error()})
			return
		}
		log.Printf("Stream created successfully to peer %s", pi.ID)

		// CRITICAL: Protect this VPN connection from being pruned by the connection manager
		// This prevents the connection manager from closing VPN streams when trimming connections
		log.Printf("🛡️ Protecting VPN connection for peer %s from connection manager pruning", pi.ID)
		node.ConnManager().Protect(pi.ID, "skypier-vpn")

		// Create a new connection context to track this connection
		conn := NewConnectionContext(pi.ID, s)

		// First create a TUN interface with temporary values
		conn.Interface, conn.InterfaceName, conn.LocalIP, conn.RemoteIP = SetInterfaceUpForConnection()

		// Add the connection to our manager
		connectionManager.AddConnection(conn)

		// Negotiate IP addresses with the server - as the client side
		const maxRetries = 3 // Maximum number of negotiation attempts
		log.Printf("Starting IP negotiation as client with up to %d retries", maxRetries)
		localIP, remoteIP, err := RetryNegotiateIPs(conn, "client", maxRetries)
		if err != nil {
			log.Printf("IP negotiation failed after retries: %v", err)
			// Unprotect on failure before cleanup
			node.ConnManager().Unprotect(pi.ID, "skypier-vpn")
			conn.CloseStream()
			c.IndentedJSON(500, gin.H{"error": fmt.Sprintf("IP negotiation failed after %d attempts: %v", maxRetries, err)})
			return
		}

		log.Printf("IP negotiation successful: local=%s, remote=%s", localIP, remoteIP)

		// Validate and update the connection with negotiated IPs
		validatedLocalIP, validatedRemoteIP, err := ValidateAndUseNegotiatedIPs(conn, localIP, remoteIP)
		if err != nil {
			log.Printf("IP validation failed: %v", err)
			node.ConnManager().Unprotect(pi.ID, "skypier-vpn")
			conn.CloseStream()
			c.IndentedJSON(500, gin.H{"error": fmt.Sprintf("IP validation failed: %v", err)})
			return
		}

		// Use the validated IPs
		conn.LocalIP = validatedLocalIP
		conn.RemoteIP = validatedRemoteIP

		// Update the TUN interface with the negotiated IP
		if err := UpdateInterfaceIP(conn.InterfaceName, localIP, remoteIP); err != nil {
			log.Printf("Failed to update interface IP: %v", err)
			node.ConnManager().Unprotect(pi.ID, "skypier-vpn")
			conn.CloseStream()
			c.IndentedJSON(500, gin.H{"error": fmt.Sprintf("Failed to update interface IP: %v", err)})
			return
		}

		log.Printf("Updated interface %s with negotiated IPs: local=%s, remote=%s", conn.InterfaceName, localIP, remoteIP)

		// Send response to the client
		res := fmt.Sprintf("Connected to the destination & `%v` VPN interface created with IPs %s (local) and %s (remote).",
			conn.InterfaceName, localIP, remoteIP)
		log.Println(res)
		c.IndentedJSON(200, gin.H{"result": res, "local_ip": localIP, "remote_ip": remoteIP})

		// Create buffer for data transfer
		buf_mtu := make([]byte, 1500)

		// Start the loops Rx/Tx in 2 separated goroutines.
		/////////////////////////////////
		// Outgoing data: TUN -> Stream
		go func() {
			defer func() {
				// Unprotect the connection when the handler exits
				log.Printf("🛡️ Removing protection for peer %s (outgoing handler exit)", conn.PeerID)
				node.ConnManager().Unprotect(conn.PeerID, "skypier-vpn")
				conn.CloseStream()
			}()
			for {
				select {
				case <-conn.StopChan:
					log.Printf("Stopping outgoing data handler for peer %s", conn.PeerID)
					return
				default:
					// Create a safe stream wrapper that handles closed streams gracefully
					safeStream := NewSafeStreamWrapper(conn)
					n, err := utils.Copy(safeStream, conn.Interface, buf_mtu)
					log.Printf("➡️ %d bytes copied from %s to stream", n, conn.InterfaceName)
					if err != nil {
						if err == ErrStreamClosed {
							log.Printf("Stream closed, stopping outgoing data handler for peer %s", conn.PeerID)
							return
						}
						log.Printf("🚨🚨🚨 Error copying data: %v", err)
						if shouldCloseStream(err) {
							// Use the stream watcher to handle the connection error properly
							streamWatcher := NewStreamWatcher(connectionManager)
							streamWatcher.OnConnectionError(conn.PeerID, err)
							return
						}
					}
				}
			}
		}()

		// Incoming data: Stream -> TUN
		go func() {
			defer conn.CloseStream()
			zeroReadCount := 0
			const maxZeroReads = 10 // Allow some zero reads before considering it a disconnect
			for {
				select {
				case <-conn.StopChan:
					log.Printf("Stopping incoming data handler for peer %s", conn.PeerID)
					return
				default:
					// Use the same safe stream wrapper for reading
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
							log.Printf("⬅️ %d bytes copied from stream to %s", n, conn.InterfaceName)
							log.Printf("🚨🚨🚨 Error copying data: %v", err)
						}
						if shouldCloseStream(err) {
							connectionManager.StopConnection(conn.PeerID)
							return
						}
					} else {
						if n == 0 {
							zeroReadCount++
							if zeroReadCount >= maxZeroReads {
								log.Printf("🚨🚨🚨 Too many zero-byte reads (%d) for peer %s, closing stream", zeroReadCount, conn.PeerID)
								connectionManager.StopConnection(conn.PeerID)
								return
							}
							// Brief sleep to prevent busy loop during idle periods
							time.Sleep(10 * time.Millisecond)
							continue
						}
						// Reset counter on successful read
						zeroReadCount = 0
					}
				}
			}
		}() // Add routing for this specific connection
		if err := AddEndpointRoute(node, dht, c.Param("peerId")); err != nil {
			log.Printf("Error adding static route for the VPN endpoint: %v", err)
			// Don't fatal here, just log the error
		}

		// Add default route for this connection using the negotiated IPs
		if err := AddDefaultRoute(conn.InterfaceName, conn.RemoteIP); err != nil {
			log.Printf("Error adding routes (traffic redirection): %v", err)
			// Don't fatal here, just log the error
		}
	}
	return gin.HandlerFunc(fn)
}

// Disconnect function to handle the disconnect endpoint
func Disconnect(node host.Host, dht *dht.IpfsDHT) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		peerId := c.Param("peerId")
		peerID, err := peerstore.Decode(peerId)
		if err != nil {
			log.Println("[+] Disconnection error: ", err)
			c.IndentedJSON(500, gin.H{"error": err.Error()})
			return
		}

		// Get the connection from the manager
		conn, exists := connectionManager.GetConnection(peerID)
		if !exists || !conn.IsRunning {
			log.Printf("[+] No active connection found for peer %s", peerID)
			c.IndentedJSON(404, gin.H{"error": "No active connection found"})
			return
		}

		// Unprotect the VPN connection to allow the connection manager to clean it up
		log.Printf("🛡️ Removing protection for peer %s (disconnect)", peerID)
		node.ConnManager().Unprotect(peerID, "skypier-vpn")

		// First close the stream safely
		err = conn.CloseStream()
		if err != nil {
			log.Printf("Error closing stream for peer %s: %v", peerID, err)
		} else {
			log.Printf("Successfully closed stream for peer %s", peerID)
		}

		// Then stop the connection's goroutines
		connectionManager.StopConnection(peerID)

		// Get the interface name before removing the connection
		ifaceName := conn.InterfaceName
		log.Println("Removing TUN interface:", ifaceName)

		// Remove the connection from manager
		connectionManager.RemoveConnection(peerID)

		// Remove the TUN interface
		if err := RemoveInterface(ifaceName); err != nil {
			log.Println("[+] Disconnection error: ", err)
			c.IndentedJSON(500, gin.H{"error": err.Error()})
			return
		}

		// Restore original routing if needed
		if err := RestoreRouting(); err != nil {
			log.Printf("Warning: Error restoring routing: %v", err)
		}

		c.IndentedJSON(200, gin.H{"status": "disconnected", "interface": ifaceName})
	}
	return gin.HandlerFunc(fn)
}
