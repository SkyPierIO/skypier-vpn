package vpn

import (
	"context"
	"log"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/network"
	"github.com/libp2p/go-libp2p/core/peer"
)

// DiscoverPeers performs a general Kademlia DHT discovery for Skypier peers.
func DiscoverPeersWithKademlia(ctx context.Context, h host.Host, dht *dht.IpfsDHT) {
	log.Println("Discovering peers with Kademlia DHT...")
	// Bootstrap the DHT to build its routing table
	if err := dht.Bootstrap(ctx); err != nil {
		log.Fatalf("Failed to bootstrap DHT: %v", err)
	}

	ticker := time.NewTicker(time.Second * 1)
	defer ticker.Stop()

	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			// Use the DHT to find peers
			peers := dht.RoutingTable().ListPeers()
			for _, pID := range peers {
				if pID == h.ID() {
					continue
				}
				if h.Network().Connectedness(pID) != network.Connected {
					_, err := h.Network().DialPeer(ctx, pID)
					if err != nil {
						log.Printf("Failed to connect to peer %s: %v\n", pID.String(), err)
						continue
					}
					log.Printf("Discoverd new peer %s\n", pID.String())
				}
			}
		}
	}
}

// GetPeerIPAddresses     godoc
// @Summary      Get the IP addresses of a remote peer through the DHT
// @Description  Get the IP addresses of a remote peer through the DHT
// @Tags         VPN
// @Produce      json
// @Param        peerId   		path string  true  "Peer ID"
// @Router       /peer/{peerId}/info [get]
func GetPeerIPAddresses(node host.Host, dht *dht.IpfsDHT) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		peerId := c.Param("peerId")
		peerIdObj, err := peer.Decode(peerId)
		if err != nil {
			log.Printf("[+] discovery error: ", err)
		}
		log.Println("\nPeer ID:\t ", peerIdObj)

		pi, err := dht.FindPeer(c, peerIdObj)
		if err != nil {
			log.Printf("[+] discovery error: ", err)
		}

		// Connect to the peer ID
		err = node.Connect(c, pi)
		if err != nil {
			log.Printf("[+] discovery error: ", err)
		}

		// Get the peer address
		peerAddr := node.Peerstore().Addrs(peerIdObj)

		peerIPAddresses := []string{}

		// Get the IP address
		for _, addr := range peerAddr {
			if addr.String()[1:4] == "ip4" || addr.String()[1:4] == "ip6" {
				parts := strings.Split(addr.String(), "/")
				if len(parts) < 2 {
					log.Fatal("input does not contain enough parts")
				}
				peerIPAddresses = func() []string {
					// Check if the element exists in the slice
					for _, v := range peerIPAddresses {
						if v == parts[2] {
							// Element already exists, return the original peerIPAddresses
							return peerIPAddresses
						}
					}
					// Element does not exist, append it to the slice
					peerIPAddresses = append(peerIPAddresses, parts[2])
					return peerIPAddresses
				}()
			}
		}
		/// generate the code for list all addresses in the peerIPAddresses slice
		// for _, v := range peerIPAddresses {
		// 	isPublic := func() string {
		// 		if utils.IsPublicIP(v) {
		// 			return "(public)"
		// 		} else {
		// 			return "(private)"
		// 		}
		// 	}()
		// 	fmt.Println("Peer IP address: ", v, isPublic)
		// }
		c.IndentedJSON(200, peerIPAddresses)
	}
	return gin.HandlerFunc(fn)
}
