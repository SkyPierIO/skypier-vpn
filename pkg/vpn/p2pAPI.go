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
		peers := mydht.RoutingTable().ListPeers()
		connectedPeers := 0

		for _, pID := range peers {
			if node.Network().Connectedness(pID) == network.Connected {
				connectedPeers++
			}
		}

		c.JSON(http.StatusOK, gin.H{
			"connected_peers_count": connectedPeers,
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

		// Create a new stream
		s, err := node.NewStream(c, pi.ID, "/skypier/1.0")
		if err != nil {
			log.Println("Error creating stream:", err)
			c.IndentedJSON(500, gin.H{"error": err.Error()})
			return
		}

		// Create a new connection context
		conn := NewConnectionContext(pi.ID, s)

		// Set up a dedicated TUN interface for this connection
		conn.Interface, conn.InterfaceName, conn.LocalIP, conn.RemoteIP = SetInterfaceUpForConnection()

		// Add the connection to our manager
		connectionManager.AddConnection(conn)

		// Send response to the client
		res := fmt.Sprintf("Connected to the destination & `%v` VPN interface created.", conn.InterfaceName)
		log.Println(res)
		c.IndentedJSON(200, gin.H{"result": res})

		// Create buffer for data transfer
		buf_mtu := make([]byte, 1500)

		// Start the loops Rx/Tx in 2 separated goroutines.
		/////////////////////////////////
		// Outgoing data: TUN -> Stream
		go func() {
			defer conn.CloseStream()
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
							connectionManager.StopConnection(conn.PeerID)
							return
						}
					}
				}
			}
		}()

		// Incoming data: Stream -> TUN
		go func() {
			defer conn.CloseStream()
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
							log.Printf("🚨🚨🚨 No data copied for peer %s, closing stream", conn.PeerID)
							connectionManager.StopConnection(conn.PeerID)
							return
						}
					}
				}
			}
		}()

		// Add routing for this specific connection
		if err := AddEndpointRoute(node, dht, c.Param("peerId")); err != nil {
			log.Fatalf("Error adding static route for the VPN endpoint: %v", err)
		}

		// Add default route for this connection
		if err := AddDefaultRoute(conn.InterfaceName, conn.RemoteIP); err != nil {
			log.Fatalf("Error adding routes (traffic redirection): %v", err)
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
