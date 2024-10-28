//go:build linux
// +build linux

package vpn

import (
	"fmt"
	"log"
	"net"

	"github.com/vishvananda/netlink"
)

// getDefaultInterfaceAndGateway returns the default network interface and gateway IP.
// It finds the default route in the routing table and returns the interface and gateway IP.
// If the default route is not found, it returns an error.
// getDefaultInterfaceAndGateway returns the default network interface and gateway
func getDefaultInterfaceAndGateway() (netlink.Link, net.IP, error) {
	routes, err := netlink.RouteList(nil, netlink.FAMILY_V4)
	if err != nil {
		return nil, nil, fmt.Errorf("failed to list routes: %v", err)
	}
	_, defaultRoute, err := net.ParseCIDR("0.0.0.0/0")
	if err != nil {
		return nil, nil, fmt.Errorf("failed to parse default route: %v", err)
	}
	for _, route := range routes {
		if route.Dst != nil && route.Dst.IP.Equal(defaultRoute.IP) && route.Dst.Mask.String() == defaultRoute.Mask.String() && route.Gw != nil {
			iface, err := netlink.LinkByIndex(route.LinkIndex)
			if err != nil {
				return nil, nil, fmt.Errorf("failed to get interface by index: %v", err)
			}
			return iface, route.Gw, nil
		}
	}
	return nil, nil, fmt.Errorf("default route not found")
}

// addRoute adds a route to the routing table.
// It takes the network interface, destination CIDR, and gateway IP as arguments.
// It returns an error if the route cannot be added.
func addRoute(iface netlink.Link, dst *net.IPNet, gw net.IP) error {
	route := &netlink.Route{
		LinkIndex: iface.Attrs().Index,
		Dst:       dst,
		Gw:        gw,
	}
	return netlink.RouteAdd(route)
}

func addHostRoute(iface netlink.Link, dst *net.IPNet, gw net.IP) error {
	return addRoute(iface, dst, gw)
}

// routeExists checks if a route exists in the routing table.
// It takes the network interface and destination CIDR as arguments.
// It returns true if the route exists, false otherwise.
// It returns an error if the route cannot be checked.
func routeExists(iface netlink.Link, dst *net.IPNet) (bool, error) {
	routes, err := netlink.RouteListFiltered(netlink.FAMILY_V4, &netlink.Route{
		LinkIndex: iface.Attrs().Index,
		Dst:       dst,
	}, netlink.RT_FILTER_OIF|netlink.RT_FILTER_DST)
	if err != nil {
		return false, fmt.Errorf("failed to list routes: %v", err)
	}
	return len(routes) > 0, nil
}

// AddDefaultRoute adds default routes to the specified network interface using the provided gateway.
// It does not remove the existing default route on the host but instead adds routes that cover the entire IPv4 address space.
//
// Parameters:
// - interfaceName: The name of the network interface to which the routes will be added.
// - gateway: The IP address of the gateway to be used for the routes.
//
// Returns:
// - error: An error object if any step in the process fails, otherwise nil.
//
// The function performs the following steps:
// 1. Retrieves the network interface by its name.
// 2. Parses the gateway IP address.
// 3. Defines routes that cover the entire IPv4 address space using CIDR 0.0.0.0/1 and 128.0.0.0/1.
// 4. Parses each destination CIDR and creates a route object.
// 5. Adds each route to the network interface.
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
		return fmt.Errorf("invalid gateway IP address: %s", gateway)
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
		log.Printf("Successfully added route %s via %s on interface %s", route.Dst.IP, gateway, interfaceName)
	}

	return nil
}
