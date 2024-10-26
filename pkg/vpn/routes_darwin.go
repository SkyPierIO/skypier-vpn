//go:build darwin
// +build darwin

package vpn

import (
	"fmt"
	"net"
	"os/exec"
	"strings"
)

// getDefaultInterfaceAndGateway returns the default network interface and gateway IP.
// It finds the default route in the routing table and returns the interface and gateway IP.
// If the default route is not found, it returns an error.
func getDefaultInterfaceAndGateway() (net.Interface, net.IP, error) {
	// Get the default route using the `route` command
	cmd := exec.Command("route", "-n", "get", "default")
	output, err := cmd.Output()
	if err != nil {
		return net.Interface{}, nil, fmt.Errorf("failed to get default route: %v", err)
	}

	var ifaceName string
	var gatewayIP net.IP

	// Parse the output to get the interface name and gateway IP
	lines := strings.Split(string(output), "\n")
	for _, line := range lines {
		if strings.Contains(line, "interface:") {
			ifaceName = strings.TrimSpace(strings.Split(line, ":")[1])
		}
		if strings.Contains(line, "gateway:") {
			gatewayIP = net.ParseIP(strings.TrimSpace(strings.Split(line, ":")[1]))
		}
	}

	if ifaceName == "" || gatewayIP == nil {
		return net.Interface{}, nil, fmt.Errorf("default route not found")
	}

	// Get the interface by name
	iface, err := net.InterfaceByName(ifaceName)
	if err != nil {
		return net.Interface{}, nil, fmt.Errorf("failed to get interface by name: %v", err)
	}

	return *iface, gatewayIP, nil
}

// addRoute adds a route to the routing table.
// It takes the network interface, destination CIDR, and gateway IP as arguments.
// It returns an error if the route cannot be added.
func addRoute(iface net.Interface, dst *net.IPNet, gw net.IP) error {
	// Use the `route` command to add the route on macOS
	cmd := exec.Command("route", "add", "-net", dst.String(), gw.String(), "-interface", iface.Name)
	return cmd.Run()
}

// routeExists checks if a route exists in the routing table.
// It takes the network interface and destination CIDR as arguments.
// It returns true if the route exists, false otherwise.
// It returns an error if the route cannot be checked.
func routeExists(iface net.Interface, dst *net.IPNet) (bool, error) {
	// Use the `netstat` command to check if the route exists on macOS
	cmd := exec.Command("netstat", "-rn")
	output, err := cmd.Output()
	if err != nil {
		return false, fmt.Errorf("failed to list routes: %v", err)
	}

	lines := strings.Split(string(output), "\n")
	for _, line := range lines {
		if strings.Contains(line, dst.String()) && strings.Contains(line, iface.Name) {
			return true, nil
		}
	}

	return false, nil
}
