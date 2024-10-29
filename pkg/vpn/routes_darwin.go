//go:build darwin
// +build darwin

package vpn

import (
	"fmt"
	"log"
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
	cmd := exec.Command("sudo", "route", "-n", "add", "-net", dst.String(), gw.String(), "#-interface", iface.Name)
	log.Println("Adding route with command:", cmd.String())
	return cmd.Run()
}

// addHostRoute adds a network route to a specific host via a specified gateway.
// It executes the "route" command to add the route and captures any output or errors.
//
// Parameters:
//   - host: The destination host for the route.
//   - gateway: The gateway through which the host is reachable.
//
// Returns:
//   - error: An error object if the route addition fails, otherwise nil.
func addHostRoute(iface net.Interface, host *net.IPNet, gw net.IP) error {
	log.Println("Adding route to host:", host.String(), "via gateway:", gw.String(), "on interface:", iface.Name)
	cmd := exec.Command("route", "-n", "add", "-host", host.String(), gw.String())
	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to add route: %v, output: %s", err, output)
	}
	return nil
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

// AddDefaultRoute adds default routes to the specified network interface on Darwin (macOS) systems.
// It adds two routes, "0.0.0.0/1" and "128.0.0.0/1", which together cover the entire IPv4 address space,
// without removing the existing default route on the host.
//
// Parameters:
//   - interfaceName: The name of the network interface to which the routes will be added.
//   - gateway: The IP address of the gateway to use for the routes.
//
// Returns:
//   - error: An error object if an error occurs, otherwise nil.
//
// The function performs the following steps:
//  1. Retrieves the network interface by its name.
//  2. Parses the gateway IP address.
//  3. Defines the routes to be added.
//  4. Adds each route using the `route` command.
//
// Example usage:
//
//	err := AddDefaultRoute("en0", "192.168.1.1")
//	if err != nil {
//	    log.Fatalf("Failed to add default route: %v", err)
//	}
func AddDefaultRoute(interfaceName, gateway string) error {
	// Get the network interface by name
	iface, err := net.InterfaceByName(interfaceName)
	if err != nil {
		log.Printf("Failed to get interface %s: %v", interfaceName, err)
		return err
	}
	log.Println("Found interface:", iface.Name)

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
		// Add the route using the `route` command
		cmd := exec.Command("route", "-n", "add", "-net", route, gw.String())
		log.Println("Adding route with command:", cmd.String())
		output, err := cmd.CombinedOutput()
		if err != nil {
			log.Printf("Failed to add route %s: %v, output: %s", route, err, output)
			return err
		}
		log.Printf("Successfully added route %s via %s on interface %s", route, gateway, interfaceName)
	}

	return nil
}
