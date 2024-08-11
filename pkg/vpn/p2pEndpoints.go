package vpn

import (
	"bufio"
	"encoding/binary"
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
		loop := func() {
			packet := make([]byte, 1420)
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

		// loop to read from the libp2p stream and write to the TUN interface.
		// loop2 := func() {
		// 	respPacket := make([]byte, 1420)
		// 	packetSize := make([]byte, 2)
		// 	for {
		// 		// Read the incoming respPacket's size as a binary value.
		// 		_, err := rw.Read(packetSize)
		// 		if err != nil {
		// 			// stream.Close()
		// 			return
		// 		}

		// 		// Decode the incoming respPacket's size from binary.
		// 		size := binary.LittleEndian.Uint16(packetSize)
		// 		log.Println("receiving respPacket of size", size)

		// 		// Read in the respPacket until completion.
		// 		var plen uint16 = 0
		// 		for plen < size {
		// 			tmp, err := rw.Read(respPacket[plen:size])
		// 			plen += uint16(tmp)
		// 			if err != nil {
		// 				s.Close()
		// 				return
		// 			}
		// 		}
		// 		log.Println("Packet debug: ", respPacket)
		// 		log.Println(plen, size, packetSize)

		// 		// Write the respPacket to the TUN interface.
		// 		if uint16(len(respPacket)) > size {
		// 			_, err = iface.Write(respPacket[:size])
		// 			if err != nil {
		// 				// break
		// 				log.Println(err)
		// 				log.Println(respPacket)
		// 			}
		// 		} else {
		// 			log.Println("Size and packet length mismatch")
		// 		}

		// 		log.Println("Packet length: ", plen)
		// 		if len(respPacket) > 19 {
		// 			fmt.Println("───────────────────── IP respPacket ─────────────────────")
		// 			// debug
		// 			header, _ := ipv4.ParseHeader(respPacket[:plen])
		// 			fmt.Printf("Reading IP respPacket: %+v (%+v)\n", header, err)
		// 			proto := utils.GetProtocolById(respPacket[9])
		// 			fmt.Println("Protocol:\t", proto)
		// 			src := net.IPv4(respPacket[12], respPacket[13], respPacket[14], respPacket[15]).String()
		// 			fmt.Println("Source:\t\t", src)
		// 			dst := net.IPv4(respPacket[16], respPacket[17], respPacket[18], respPacket[19]).String()
		// 			fmt.Println("Destination:\t", dst)
		// 			fmt.Println("─────────────────────────────────────────────────────")
		// 		}
		// 	}
		// }

		go loop()
		go doRx(rw, &mu, iface)
	}
	return gin.HandlerFunc(fn)
}

func doRx(rw *bufio.ReadWriter, mu *sync.Mutex, inter *water.Interface) {
	packet := make([]byte, 1420)
	packetSize := make([]byte, 2)
	for {
		// Read the incoming packet's size as a binary value.
		n, err := rw.Read(packet)
		if err != nil {
			// stream.Close()
			return
		} else {
			log.Println("Read", n, "bytes")
		}

		if packet[0] == 0x96 {
			break
		}

		// Decode the incoming packet's size from binary.
		size := binary.BigEndian.Uint16(packet[2:4])
		log.Println("receiving packet of size", size, packet[2:4])

		// Read in the packet until completion.
		var plen uint16 = 0
		for plen < size {
			tmp, err := rw.Read(packet[plen:size])
			plen += uint16(tmp)
			if err != nil {
				// stream.Close()
				return
			}
		}

		fmt.Println("IS A CLIENT -- DEBUG")
		fmt.Println(plen, size, packetSize, packet, len(packet))
		fmt.Println("───────────────────── IP packet ─────────────────────")
		// debug
		header, _ := ipv4.ParseHeader(packet[:plen])
		fmt.Printf("Reading IP packet: %+v (%+v)\n", header, err)
		proto := utils.GetProtocolById(packet[9])
		fmt.Println("IP Version:\t", packet[0])
		fmt.Println("Protocol:\t", proto)
		src := net.IPv4(packet[12], packet[13], packet[14], packet[15]).String()
		fmt.Println("Source:\t\t", src)
		dst := net.IPv4(packet[16], packet[17], packet[18], packet[19]).String()
		fmt.Println("Destination:\t", dst)
		fmt.Println("─────────────────────────────────────────────────────")

		mu.Lock()
		log.Println("mutex locked (writing to tun interface)")
		_, err = inter.Write(packet[:size])
		mu.Unlock()
		log.Println("mutex unlocked")
		utils.Check(err)
	}
}
