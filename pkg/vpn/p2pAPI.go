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

// CloseAllStreams closes all active streams in the streams mapping.
func CloseAllStreams() {
	streamsMu.Lock()
	defer streamsMu.Unlock()
	for peerID, stream := range streams {
		if err := stream.Close(); err != nil {
			log.Printf("Error closing stream for peer %s: %v", peerID, err)
		} else {
			log.Printf("Successfully closed stream for peer %s", peerID)
		}
	}
	streams = make(map[peerstore.ID]network.Stream) // Clear the map
}

func HandleExit() {
	CloseAllStreams()
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
		// we can open a new stream
		s, err := node.NewStream(c, pi.ID, "/skypier/1.0")
		if err != nil {
			log.Println(err)
		}

		// Store the stream in the map
		streamsMu.Lock()
		streams[pi.ID] = s
		streamsMu.Unlock()

		// TODO - Fix the connection manager exception for the current stream
		// Protect the stream from being closed by the connection manager
		// node.ConnManager().Protect(peerIdObj, peerId)

		iface := SetInterfaceUp()
		type Result struct {
			Res string `json:"result"`
		}
		res := fmt.Sprintf("Connected to the destination & `%v` VPN interface created.", iface.Name())
		log.Println(res)
		c.IndentedJSON(200, Result{Res: res})

		buf_mtu := make([]byte, 1500)

		// Start the loops Rx/Tx in 2 separated goroutines.
		/////////////////////////////////
		// Start the goroutine with error handling
		go func() {
			for {
				select {
				case <-stopChan:
					return
				default:
					// Wrap the stream writer with the length-prefixed writer
					lengthPrefixedStream := utils.NewLengthPrefixedWriter(s)
					n, err := utils.Copy(lengthPrefixedStream, iface, buf_mtu)
					log.Printf("➡️ %d bytes copied from iface to stream", n)
					if err != nil {
						log.Printf("🚨🚨🚨 Error copying data: %v", err)
						if shouldCloseStream(err) {
							handleCloseStreamHandler()
							return
						}
					}
				}
			}
		}()

		go func() {
			for {
				select {
				case <-stopChan:
					return
				default:
					// Wrap the stream reader with the length-prefixed reader
					lengthPrefixedStream := utils.NewLengthPrefixedReader(s)
					n, err := utils.Copy(iface, lengthPrefixedStream, buf_mtu)
					if err != nil {
						if err.Error() == "short buffer" {
							continue // 0 bytes copied, continue
						}
						if n != 0 {
							log.Printf("⬅️ %d bytes copied from stream to iface", n)
							log.Printf("🚨🚨🚨 Error copying data: %v", err)
						}
						if shouldCloseStream(err) {
							handleCloseStreamHandler()
						}
					}
				}
			}
		}()

		// static route for the VPN endpoint
		if err := AddEndpointRoute(node, dht, c.Param("peerId")); err != nil {
			log.Fatalf("Error adding static route for the VPN endpoint: %v", err)
		}

		// new "default" route for redirecting all traffic to the VPN interface
		if err := AddDefaultRoute(InterfaceName, "10.1.1.2"); err != nil {
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

		// Retrieve the stream from the map
		streamsMu.Lock()
		stream, ok := streams[peerID]
		if ok {
			// Close the stream
			stream.Close()
			delete(streams, peerID)
		}
		streamsMu.Unlock()

		if !ok {
			log.Printf("[+] No active stream found for peer %s", peerID)
			c.IndentedJSON(404, gin.H{"error": "No active stream found"})
			return
		}

		// Remove the TUN interface
		if err := RemoveInterface("utun8"); err != nil {
			log.Println("[+] Disconnection error: ", err)
			c.IndentedJSON(500, gin.H{"error": err.Error()})
			return
		}

		// Log the status
		log.Println("[+] Successfully disconnected from the peer and removed the TUN interface.")
		c.IndentedJSON(200, gin.H{"result": "Successfully disconnected from the peer and removed the TUN interface."})
	}
	return gin.HandlerFunc(fn)
}
