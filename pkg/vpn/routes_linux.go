//go:build linux
// +build linux

package vpn

import (
	"fmt"
	"net"

	"github.com/vishvananda/netlink"
)

// getDefaultInterfaceAndGateway returns the default network interface and gateway IP.
// It finds the default route in the routing table and returns the interface and gateway IP.
// If the default route is not found, it returns an error.
func getDefaultInterfaceAndGateway() (netlink.Link, net.IP, error) {
	routes, err := netlink.RouteList(nil, netlink.FAMILY_V4)
	if err != nil {
		return nil, nil, fmt.Errorf("failed to list routes: %v", err)
	}

	for _, route := range routes {
		if route.Dst == nil && route.Gw != nil {
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
