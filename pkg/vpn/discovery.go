package vpn

import (
	"context"
	"log"
	"strings"
	"time"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/gin-gonic/gin"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/network"
	"github.com/libp2p/go-libp2p/core/peer"
)

// DiscoverPeersWithKademlia performs a general Kademlia DHT discovery for Skypier peers.
// Respects connection manager limits by only dialing new peers when below our target
func DiscoverPeersWithKademlia(ctx context.Context, h host.Host, mydht *dht.IpfsDHT) {
	log.Println("🔍 Starting ENABLED peer discovery with Kademlia DHT (strictly limited)...")

	// No need to connect to bootstrap peers or bootstrap DHT here
	// This is already done in the p2p.go StartNode function
	log.Println("Skipping bootstrap connections - already handled in StartNode")

	// Use a much slower ticker to reduce connection attempts - once every minute
	ticker := time.NewTicker(time.Minute * 1)
	defer ticker.Stop()

	// Maximum connections we want to maintain - be more conservative than connection manager's HighWater
	const maxConnections = 5 // Significantly lower than HighWater mark (10) to provide buffer

	log.Printf("Discovery initialized. Will maintain at most %d connections.", maxConnections)

	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			// Check if we're already at or above our connection limit
			currentConnections := len(h.Network().Peers())

			// If we're over the limit, forcefully close some connections
			if currentConnections > maxConnections {
				// This is a more aggressive approach to trim connections when the connection manager isn't keeping up
				excessConnections := currentConnections - maxConnections
				log.Printf("⚠️ WARNING: Over connection limit (%d/%d). Forcefully closing %d connections",
					currentConnections, maxConnections, excessConnections)

				// Get all peers and close the last N connections
				peers := h.Network().Peers()
				if len(peers) > excessConnections {
					// Only close non-VPN connections
					closed := 0
					for i := 0; i < len(peers) && closed < excessConnections; i++ {
						// Skip peers that have active VPN connections
						if _, exists := connectionManager.GetConnection(peers[i]); exists {
							log.Printf("Skipping disconnection for peer %s with active VPN tunnel", peers[i])
							continue
						}

						// Close all connections to this peer
						if err := h.Network().ClosePeer(peers[i]); err != nil {
							log.Printf("Error closing connection to peer %s: %v", peers[i], err)
						} else {
							log.Printf("Forcefully closed connection to peer %s", peers[i])
							closed++
						}
					}

					log.Printf("Forcefully closed %d connections", closed)
				}

				// Skip discovery this round
				continue
			}

			// Be conservative - if we're within 2 of the limit, don't initiate new connections
			if currentConnections >= (maxConnections - 2) {
				// Log this more prominently since it's a key part of our limiting strategy
				log.Printf("Connection count is near or at limit (%d/%d). Skipping peer discovery.",
					currentConnections, maxConnections)
				continue
			}

			// Calculate how many more connections we can make
			availableSlots := maxConnections - currentConnections
			if availableSlots <= 0 {
				continue
			}

			log.Printf("Currently connected to %d peers, have room for %d more connections",
				currentConnections, availableSlots)

			// Get a limited number of peers from the routing table
			peers := mydht.RoutingTable().ListPeers()
			if len(peers) > availableSlots*2 { // Get twice as many as we need in case some fail
				peers = peers[:availableSlots*2]
			}

			// Try to connect to some new peers, but limit to our available slots
			connected := 0
			for _, pID := range peers {
				// Stop if we've reached our target
				if connected >= availableSlots {
					break
				}

				// Skip ourselves and already connected peers
				if pID == h.ID() || h.Network().Connectedness(pID) == network.Connected {
					continue
				}

				_, err := h.Network().DialPeer(ctx, pID)
				if err != nil {
					utils.DiscoverLog.Debug("Failed to connect to peer %s: %v", pID.String(), err)
					continue
				}

				connected++
				log.Printf("Connected to new peer %s (%d/%d new connections)",
					pID.String(), connected, availableSlots)
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
			utils.DiscoverLog.Warn("Discovery error decoding peer: %v %s", err, peerId)
		}
		pi, err := dht.FindPeer(c, peerIdObj)
		if err != nil {
			utils.DiscoverLog.Warn("Discovery error finding peer: %v %s", err, peerId)
		}

		// Connect to the peer ID
		err = node.Connect(c, pi)
		if err != nil {
			utils.DiscoverLog.Warn("Discovery error connecting to peer: %v %s", err, peerId)
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
		c.IndentedJSON(200, peerIPAddresses)
	}
	return gin.HandlerFunc(fn)
}
