package vpn

import (
	"context"
	"fmt"
	"log"
	"net"
	"strings"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/peer"
)

func getAddressesFromPeerId(peerId string, node host.Host, dht *dht.IpfsDHT) (peerIPAddresses []string) {
	c := context.Background()
	peerIdObj, err := peer.Decode(peerId)
	if err != nil && utils.IsDebugEnabled() {
		log.Println("[+] discovery error while adding route: ", err)
	}
	pi, err := dht.FindPeer(c, peerIdObj)
	if err != nil && utils.IsDebugEnabled() {
		log.Println("[+] discovery error while adding route: ", err)
	}

	// Connect to the peer ID
	err = node.Connect(c, pi)
	if err != nil && utils.IsDebugEnabled() {
		log.Println("[+] discovery error while adding route: ", err)
	}

	// Get the peer address
	peerAddr := node.Peerstore().Addrs(peerIdObj)

	peerIPAddresses = []string{}

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
	var publicPeerIPAddresses []string
	for _, v := range peerIPAddresses {
		if utils.IsPublicIP(v) {
			publicPeerIPAddresses = append(publicPeerIPAddresses, v)
			fmt.Println("Public Peer IPv4 address: ", v)
		}
	}
	return publicPeerIPAddresses
}

// Add a static route to the endpoint using the main network interface
// for instance eth0 or en0
// This is useful for setting up a VPN connection
// to a remote server
// The IP address of the remote server is passed as a string
// The function returns an error if the route could not be added
// AddEndpointRoute adds a route to the destination peer IP
func AddEndpointRoute(node host.Host, dht *dht.IpfsDHT, peerId string) error {
	// Get the peer IP addresses
	peerIPs := getAddressesFromPeerId(peerId, node, dht)

	// Get the default network interface and gateway
	iface, gw, err := getDefaultInterfaceAndGateway()
	if err != nil {
		return fmt.Errorf("failed to get default interface and gateway: %v", err)
	}

	for _, peerIP := range peerIPs {
		// Create the route object
		_, dst, err := net.ParseCIDR(peerIP + "/32")
		if err != nil {
			return fmt.Errorf("invalid peer IP address: %v", err)
		}

		// Check if the route already exists
		exists, err := routeExists(iface, dst)
		if err != nil {
			return fmt.Errorf("failed to check if route exists: %v", err)
		}
		if exists {
			continue
		}

		// Add the route
		if err := addHostRoute(iface, dst, gw); err != nil {
			return fmt.Errorf("failed to add route to %s: %v", peerIP, err)
		}
	}

	return nil
}

// func AddDefaultRoute(interfaceName, gateway string) error {
// 	// Get the network interface by name
// 	iface, err := netlink.LinkByName(interfaceName)
// 	if err != nil {
// 		log.Printf("Failed to get interface %s: %v", interfaceName, err)
// 		return err
// 	}

// 	// Parse the gateway IP address
// 	gw := net.ParseIP(gateway)
// 	if gw == nil {
// 		log.Printf("Invalid gateway IP address: %s", gateway)
// 		return err
// 	}

// 	// Define the routes to be added
// 	// equivalent to the default route
// 	// but without removing the existing default route on the host
// 	// CIDR 0.0.0.0/1 and 128.0.0.0/1 are used to cover the entire IPv4 address space
// 	routes := []string{
// 		"0.0.0.0/1",
// 		"128.0.0.0/1",
// 	}

// 	for _, route := range routes {
// 		// Parse the destination CIDR
// 		_, dst, err := net.ParseCIDR(route)
// 		if err != nil {
// 			log.Printf("Invalid route CIDR: %s", route)
// 			return err
// 		}

// 		// Create the route object
// 		route := &netlink.Route{
// 			LinkIndex: iface.Attrs().Index,
// 			Dst:       dst,
// 			Gw:        gw,
// 		}

// 		// Add the route
// 		if err := netlink.RouteAdd(route); err != nil {
// 			log.Printf("Failed to add route %s: %v", route, err)
// 			return err
// 		}
// 		log.Printf("Successfully added route %s via %s on interface %s", route.Dst.IP, gateway, interfaceName)
// 	}

// 	return nil
// }
