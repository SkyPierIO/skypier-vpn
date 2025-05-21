package vpn

import (
	"fmt"
	"log"
	"os/exec"
	"runtime"
	"strings"
	"sync"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/songgao/water"
	"github.com/vishvananda/netlink"
)

var (
	// Removed unused localIP variable
	InterfaceName string
	ifaceLocker   sync.Mutex // Global lock for TUN interface creation
)

// SubnetRegistry keeps track of allocated subnets to avoid conflicts
var SubnetRegistry = struct {
	sync.RWMutex
	allocatedSubnets map[string]bool // Map of allocated subnet prefixes (e.g., "10.1.1")
}{
	allocatedSubnets: make(map[string]bool),
}

// AllocateSubnet finds and reserves an available subnet
func AllocateSubnet() string {
	SubnetRegistry.Lock()
	defer SubnetRegistry.Unlock()

	// Start with 10.1.1 and try to find an available subnet
	for i := 1; i < 256; i++ {
		for j := 1; j < 256; j++ {
			subnet := fmt.Sprintf("10.%d.%d", i, j)
			if !SubnetRegistry.allocatedSubnets[subnet] {
				SubnetRegistry.allocatedSubnets[subnet] = true
				log.Printf("Allocated subnet: %s", subnet)
				return subnet
			}
		}
	}

	// If we get here, we've run out of subnets!
	log.Printf("WARNING: No more subnets available, reusing 10.1.1")
	return "10.1.1" // Fallback to default
}

// ReleaseSubnet marks a subnet as available again
func ReleaseSubnet(subnet string) {
	SubnetRegistry.Lock()
	defer SubnetRegistry.Unlock()

	// Extract the subnet prefix (e.g., "10.1.1" from "10.1.1.1")
	parts := strings.Split(subnet, ".")
	if len(parts) >= 3 {
		prefix := fmt.Sprintf("%s.%s.%s", parts[0], parts[1], parts[2])
		delete(SubnetRegistry.allocatedSubnets, prefix)
		log.Printf("Released subnet: %s", prefix)
	}
}

// getAvailableTunInterface finds an unused TUN interface name and appropriate IPs
func getAvailableTunInterface() (string, string, string) {
	ifaceLocker.Lock()
	defer ifaceLocker.Unlock()

	// Allocate a unique subnet for this connection
	subnet := AllocateSubnet()
	localIP := fmt.Sprintf("%s.1", subnet)
	remoteIP := fmt.Sprintf("%s.2", subnet)

	var ifaceName string

	// Choose interface name based on operating system
	switch runtime.GOOS {
	case "darwin":
		// On macOS, try to find an available utun interface
		for i := 0; i < 256; i++ {
			candidate := fmt.Sprintf("utun%d", i)
			// Try to use the netstat command to check if the interface exists
			cmd := exec.Command("netstat", "-ni")
			output, err := cmd.CombinedOutput()
			if err != nil {
				log.Printf("Warning: Failed to run netstat: %v", err)
				break
			}

			// If the interface name doesn't appear in netstat output, it's likely available
			if !strings.Contains(string(output), candidate) {
				ifaceName = candidate
				break
			}
		}

		// If we couldn't find an available interface, let the OS choose one
		if ifaceName == "" {
			ifaceName = "" // Empty string means let macOS choose
			log.Printf("Letting macOS choose a TUN interface name")
		}

	case "linux", "android":
		// On Linux, we try to use sequential tun names
		for i := 0; i < 256; i++ {
			candidate := fmt.Sprintf("utun%d", i)
			_, err := netlink.LinkByName(candidate)
			if err != nil {
				// Interface doesn't exist, we can use this name
				ifaceName = candidate
				log.Printf("Found available Linux TUN interface: %s", ifaceName)
				break
			}
		}

		// If all interfaces are taken (unlikely), use a default
		if ifaceName == "" {
			ifaceName = "skypier0"
			log.Printf("Using default interface name: %s", ifaceName)
		}

	default:
		log.Fatalf("Unsupported operating system: %s", runtime.GOOS)
	}

	log.Printf("Selected interface %s with subnet %s (local=%s, remote=%s)",
		ifaceName, subnet, localIP, remoteIP)

	return ifaceName, localIP, remoteIP
}

// SetInterfaceUpForConnection creates a new TUN interface for a specific connection
func SetInterfaceUpForConnection() (*water.Interface, string, string, string) {
	ifaceName, localIPAddr, remoteIPAddr := getAvailableTunInterface()

	// Store the global interface name for backward compatibility
	InterfaceName = ifaceName

	config := water.Config{
		DeviceType: water.TUN,
	}
	config.Name = ifaceName

	// Create a new TUN/TAP interface using config.
	iface, err := water.New(config)
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Set TUN interface up:", ifaceName)

	if runtime.GOOS == "darwin" {
		// macOS specific configuration
		err := configureTunMacOS(ifaceName, localIPAddr, remoteIPAddr)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		// Linux specific configuration
		pierIface, _ := netlink.LinkByName(ifaceName)
		var addr *netlink.Addr
		if utils.IS_NODE_HOST {
			addr, _ = netlink.ParseAddr(remoteIPAddr + "/24")
		} else {
			addr, _ = netlink.ParseAddr(localIPAddr + "/24")
		}
		netlink.AddrAdd(pierIface, addr)

		err := netlink.LinkSetMTU(pierIface, 1500) // MTU set to 1500 for standard MTU
		if err != nil {
			log.Fatalf("Failed to set MTU: %v", err)
		}

		netlink.LinkSetUp(pierIface)
	}
	return iface, ifaceName, localIPAddr, remoteIPAddr
}

// Legacy method for backward compatibility
func SetInterfaceUp() *water.Interface {
	iface, ifaceName, _, _ := SetInterfaceUpForConnection()
	InterfaceName = ifaceName // Set the global variable for backward compatibility
	return iface
}

func configureTunMacOS(ifaceName, localIP, remoteIP string) error {
	// Set the local address
	cmd := exec.Command("ifconfig", ifaceName, "inet", localIP, remoteIP, "up")
	if err := cmd.Run(); err != nil {
		return err
	}

	// Set the MTU to allow Jumbo Frames
	cmd = exec.Command("sudo", "ifconfig", ifaceName, "mtu", fmt.Sprintf("%d", 1500)) // MTU set to 1500 for standard MTU
	// cmd = exec.Command("sudo", "ifconfig", ifaceName, "mtu", fmt.Sprintf("%d", 9000)) // MTU set to 9000 for Jumbo Frames
	if output, err := cmd.CombinedOutput(); err != nil {
		return fmt.Errorf("failed to set MTU: %v, output: %s", err, output)
	}

	// Add the route to the remote address
	cmd = exec.Command("route", "add", remoteIP, "-interface", ifaceName)
	if err := cmd.Run(); err != nil {
		return err
	}

	return nil
}

// UpdateInterfaceIP updates the IP address of an existing TUN interface
func UpdateInterfaceIP(ifaceName string, localIP string, remoteIP string) error {
	log.Printf("Updating interface %s with IPs: local=%s, remote=%s", ifaceName, localIP, remoteIP)

	if runtime.GOOS == "darwin" {
		// Delete the existing route configuration first
		cmd := exec.Command("ifconfig", ifaceName, "inet", "0.0.0.0", "0.0.0.0", "down")
		if err := cmd.Run(); err != nil {
			return fmt.Errorf("failed to bring down interface: %v", err)
		}

		// Set up the interface with new IPs
		return configureTunMacOS(ifaceName, localIP, remoteIP)
	} else {
		// Linux configuration
		pierIface, err := netlink.LinkByName(ifaceName)
		if err != nil {
			return fmt.Errorf("failed to get interface %s: %v", ifaceName, err)
		}

		// Remove existing addresses
		addrs, err := netlink.AddrList(pierIface, netlink.FAMILY_V4)
		if err != nil {
			return fmt.Errorf("failed to list addresses: %v", err)
		}

		for _, addr := range addrs {
			if err := netlink.AddrDel(pierIface, &addr); err != nil {
				log.Printf("Warning: Failed to delete address %s: %v", addr.String(), err)
			}
		}

		// Add the new address
		var addr *netlink.Addr
		if utils.IS_NODE_HOST {
			addr, err = netlink.ParseAddr(remoteIP + "/24")
		} else {
			addr, err = netlink.ParseAddr(localIP + "/24")
		}
		if err != nil {
			return fmt.Errorf("failed to parse address: %v", err)
		}

		if err := netlink.AddrAdd(pierIface, addr); err != nil {
			return fmt.Errorf("failed to add address: %v", err)
		}

		// Make sure the interface is up
		if err := netlink.LinkSetUp(pierIface); err != nil {
			return fmt.Errorf("failed to set interface up: %v", err)
		}

		return nil
	}
}
