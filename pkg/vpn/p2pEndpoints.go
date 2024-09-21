package vpn

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"runtime"

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

const MTUSize = 1472

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
			log.Println("[+] discovery error: ", err)
		}
		pi, err := dht.FindPeer(c, peerIdObj)
		if err != nil && utils.IsDebugEnabled() {
			log.Println("[+] discovery error: ", err)
		}

		if err := node.Connect(c, pi); err != nil {
			log.Println(err)
			c.IndentedJSON(200, err)
			return
		}
		// we can open a new stream²
		s, err := node.NewStream(c, pi.ID, "/skypier/1.0")
		if err != nil {
			log.Println(err)
		}
		iface := SetInterfaceUp()
		type Result struct {
			Res string `json:"result"`
		}
		res := fmt.Sprintf("Connected to the destination & `%v` VPN interface created.", iface.Name())
		log.Println(res)
		c.IndentedJSON(200, Result{Res: res})

		// Start the loops Rx/Tx in 2 separated goroutines.
		go io.Copy(s, iface)
		go io.Copy(iface, s)

		/////////////////////////////////
		// // Create an error channel
		// errCh := make(chan error, 1)

		// // Start the goroutine with error handling
		// go func() {
		// 	if _, err := io.Copy(s, iface); err != nil {
		// 		errCh <- err
		// 		return
		// 	}
		// 	errCh <- nil
		// }()

		// go func() {
		// 	if _, err := io.Copy(iface, s); err != nil {
		// 		errCh <- err
		// 		return
		// 	}
		// 	errCh <- nil
		// }()

		// // Handle the error
		// if err := <-errCh; err != nil {
		// 	log.Printf("Error copying data: %v", err)
		// }
		/////////////////////////////////
	}
	return gin.HandlerFunc(fn)
}
