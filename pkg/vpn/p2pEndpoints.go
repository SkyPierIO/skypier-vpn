package vpn

import (
	"context"
	"encoding/binary"
	"fmt"
	"log"
	"runtime"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/gin-gonic/gin"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/host"
	peerstore "github.com/libp2p/go-libp2p/core/peer"
	"golang.org/x/net/ipv4"
)

type SkypierNode struct {
	PeerId          string `json:"peerId"`
	Nickname        string `json:"nickname,omitempty"`
	Version         string `json:"version"`
	OperatingSystem string `json:"os"`
	// Uptime          time.Duration `json:"uptime"`
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
		r := &Result{Res: "Connected to " + addrString}
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
		if err != nil {
			log.Println("[+] discovery error: ", err)
		}

		if err := node.Connect(c, pi); err != nil {
			log.Println(err)
			c.IndentedJSON(200, err)
			return
		}
		log.Println("Connected to the remote peer", pi.ID)

		// we can open a new stream
		s, err := node.NewStream(
			context.Background(),
			pi.ID,
			"/skypier/1.0",
		)
		if err != nil {
			log.Println(err)
		}
		iface := SetInterfaceUp()
		res := fmt.Sprintf("Created a stream to the remote node and created `%v` VPN interface.", iface.Name())
		type Result struct {
			Res string `json:"result"`
		}
		r := &Result{Res: res}
		c.IndentedJSON(200, r)
		packet := make([]byte, 1420)
		for {
			plen, err := iface.Read(packet)
			if err != nil {
				break
			}

			// Write out the packet's length to the libp2p stream to ensure
			// we know the full size of the packet at the other end.
			err = binary.Write(s, binary.LittleEndian, uint16(plen))
			if err == nil {
				// Write the packet out to the libp2p stream.
				// If everyting succeeds continue on to the next packet.
				n, err := s.Write(packet[:plen])
				fmt.Printf("Connected to the remote node %v, and sent %d bytes. %v\n", pi.ID, n, pi.Addrs)
				if err == nil {
					// debug
					header, _ := ipv4.ParseHeader(packet[:plen])
					fmt.Printf("Sending to remote: %+v (%+v)\n", header, err)
					continue
				}
			}
			// If we encounter an error when writing to a stream we should
			// close that stream and delete it from the active stream map.
			s.Close()

		}
	}
	return gin.HandlerFunc(fn)
}
