package utils

import (
	"log"
	"net"

	"github.com/libp2p/go-libp2p/core/host"
	"github.com/vishvananda/netlink"
)

// Add a static route to the endpoint using the main network interface
// for instance eth0 or en0
// This is useful for setting up a VPN connection
// to a remote server
// The IP address of the remote server is passed as a string
// The function returns an error if the route could not be added
func AddEndpointRoute(node host.Host) error {
	return nil

	// TODO: add the route to the remote server using the main network interface
}

func AddDefaultRoute(interfaceName, gateway string) error {
	// Get the network interface by name
	iface, err := netlink.LinkByName(interfaceName)
	if err != nil {
		log.Printf("Failed to get interface %s: %v", interfaceName, err)
		return err
	}

	// Parse the gateway IP address
	gw := net.ParseIP(gateway)
	if gw == nil {
		log.Printf("Invalid gateway IP address: %s", gateway)
		return err
	}

	// Define the routes to be added
	// equivalent to the default route
	// but without removing the existing default route on the host
	// CIDR 0.0.0.0/1 and 128.0.0.0/1 are used to cover the entire IPv4 address space
	routes := []string{
		"0.0.0.0/1",
		"128.0.0.0/1",
	}

	for _, route := range routes {
		// Parse the destination CIDR
		_, dst, err := net.ParseCIDR(route)
		if err != nil {
			log.Printf("Invalid route CIDR: %s", route)
			return err
		}

		// Create the route object
		route := &netlink.Route{
			LinkIndex: iface.Attrs().Index,
			Dst:       dst,
			Gw:        gw,
		}

		// Add the route
		if err := netlink.RouteAdd(route); err != nil {
			log.Printf("Failed to add route %s: %v", route, err)
			return err
		}
		log.Printf("Successfully added route %s via %s on interface %s", route, gateway, interfaceName)
	}

	return nil
}
