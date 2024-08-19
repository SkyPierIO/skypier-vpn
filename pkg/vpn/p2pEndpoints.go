package vpn

import (
	"bufio"
	"encoding/binary"
	"encoding/hex"
	"fmt"
	"log"
	"net"
	"net/http"
	"runtime"
	"sync"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/gin-gonic/gin"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/network"
	peerstore "github.com/libp2p/go-libp2p/core/peer"
	"github.com/songgao/water"
	"golang.org/x/net/ipv4"
)

type SkypierNode struct {
	PeerId          string `json:"peerId"`
	Nickname        string `json:"nickname,omitempty"`
	Version         string `json:"version"`
	OperatingSystem string `json:"os"`
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

		// Create a buffer stream for non-blocking read and write.
		rw := bufio.NewReadWriter(bufio.NewReader(s), bufio.NewWriter(s))
		// Mutex to synchronize access to the TUN interface
		var mu sync.Mutex

		// loop to read from the TUN interface and write to the libp2p stream.
		doTx := func() {
			packet := make([]byte, MTUSize)
			for {
				mu.Lock()
				plen, err := iface.Read(packet)
				mu.Unlock()
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
					log.Printf("%vSent %d bytes to the remote node %v%v%v\n", utils.Green, n, pi.ID, pi.Addrs, utils.Reset)
					if err == nil {
						// debug
						header, _ := ipv4.ParseHeader(packet[:plen])
						log.Printf("%vSending to remote: %+v (%+v)%v\n", utils.Green, header, err, utils.Reset)
						continue
					}
				}
				// If we encounter an error when writing to a stream we should
				// close that stream and delete it from the active stream map.
				s.Close()

			}
		}

		// Start the loops in 2 separated goroutines.
		go doTx()
		go doRx(rw, &mu, iface)
	}
	return gin.HandlerFunc(fn)
}

func doRx(rw *bufio.ReadWriter, mu *sync.Mutex, inter *water.Interface) {
	packet := make([]byte, MTUSize)
	// packetSize := make([]byte, 2)
	var i int
	for {
		// Read the incoming packet's size as a binary value.
		n, err := rw.Read(packet)
		if err != nil {
			// stream.Close()
			return
		} else {
			log.Println(utils.Orange, "Read", n, "bytes", utils.Reset)
		}

		// Decode the incoming packet's size from binary.
		size := binary.BigEndian.Uint16(packet[2:4])
		// size := binary.LittleEndian.Uint16(packetSize)
		// log.Println("receiving packet of size", size)
		log.Println(utils.Orange, "receiving packet of size", size, packet[2:4], utils.Reset)
		if size == 0 {
			log.Println(utils.Red, packet, utils.Reset)
		}

		// Read in the packet until completion.
		var plen uint16 = 0
		if size <= MTUSize {
			for plen < size {
				tmp, err := rw.Read(packet[plen:size])
				plen += uint16(tmp)
				if err != nil {
					// stream.Close()
					return
				}
			}
		}

		log.Println(utils.Orange, "\n"+hex.Dump(packet[:plen]), packet[:plen], plen, size, utils.Reset)
		log.Println(utils.Orange, "───────────────────── IP packet ─────────────────────", utils.Reset)
		// debug
		header, _ := ipv4.ParseHeader(packet[:plen])
		log.Printf("%vReading IP packet: %+v (%+v)%v\n", utils.Orange, header, err, utils.Reset)
		proto := utils.GetProtocolById(packet[9])
		log.Println(utils.Orange, "Packet Size:\t", packet[2:4], utils.Reset)
		log.Println(utils.Orange, "Protocol:\t\t", proto, utils.Reset)
		src := net.IPv4(packet[12], packet[13], packet[14], packet[15]).String()
		log.Println(utils.Orange, "Source:\t\t", src, utils.Reset)
		dst := net.IPv4(packet[16], packet[17], packet[18], packet[19]).String()
		log.Println(utils.Orange, "Destination:\t", dst, utils.Reset)
		log.Println(utils.Orange, "─────────────────────────────────────────────────────", utils.Reset)

		if size <= MTUSize && plen != 0 {
			mu.Lock()
			log.Println(utils.Orange, "mutex locked (writing to tun interface)", utils.Reset)
			_, err = inter.Write(packet[:size])
			mu.Unlock()
			log.Println(utils.Orange, "mutex unlocked", utils.Reset)
			utils.Check(err)
		}
		log.Println(utils.Orange, i, utils.Reset)
		i++
	}
}
