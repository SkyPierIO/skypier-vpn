package main

/// generate a go-libp2p node which connects to the IPFS default bootstrap nodes and get all the multiaddresses of the node with peer ID "16Uiu2HAmC5dbinw4Ee7vtJPzhafGqbYPLWDemKrSmugisz2HfDEZ". From the multiaddresses list, get the IP field isolated and return the public IP address of the node.
import (
	"context"
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/SkyPierIO/skypier-vpn/pkg/vpn"

	"github.com/libp2p/go-libp2p/core/peer"
)

func main() {
	// Setup System Context
	ctx := context.Background()

	// CONFIGURATION
	utils.Greetings("Skypier")
	utils.InitConfiguration("/etc/skypier/config.json")
	// config, err := utils.LoadConfiguration("/etc/skypier/config.json")
	// utils.Check(err)
	innerConfig := utils.InnerConfig{
		Port:            8081,
		Protocol:        "skypier",
		ProtocolVersion: "1.0",
	}

	privKey, err := vpn.LoadPrivateKey()
	utils.Check(err)

	// Start libp2p node
	node, dht, err := vpn.StartNode(innerConfig, privKey, "4003", "4003")
	utils.Check(err)
	go vpn.DiscoverPeersWithKademlia(ctx, node, dht)
	fmt.Println("Sleeping for 10 sec to allow the node to discover new peers...")
	time.Sleep(10 * time.Second)

	// Get the peer ID of the node
	peerId := "16Uiu2HAmC5dbinw4Ee7vtJPzhafGqbYPLWDemKrSmugisz2HfDEZ"
	peerIdObj, err := peer.Decode(peerId)
	utils.Check(err)
	fmt.Println("\nPeer ID:\t ", peerIdObj)

	pi, err := dht.FindPeer(ctx, peerIdObj)
	utils.Check(err)

	// // Get the peerInfo of the node
	// peerInfo := peer.AddrInfo{
	// 	ID: peerIdObj,
	// }

	// Connect to the peer ID
	err = node.Connect(ctx, pi)
	utils.Check(err)

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
	for _, v := range peerIPAddresses {
		isPublic := func() string {
			if utils.IsPublicIP(v) {
				return "(public)"
			} else {
				return "(private)"
			}
		}()
		fmt.Println("Peer IP address: ", v, isPublic)
	}
}
