package vpn

import (
	"fmt"
	"log"
	"os/exec"
	"runtime"
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

// getAvailableTunInterface finds an unused TUN interface name and appropriate IPs
func getAvailableTunInterface() (string, string, string) {
	ifaceLocker.Lock()
	defer ifaceLocker.Unlock()

	baseLocalIP := "10.1.1.1"
	// Use a predefined subnet for each connection
	for i := 0; i < 256; i++ {
		ifaceName := fmt.Sprintf("utun%d", i)
		if _, err := netlink.LinkByName(ifaceName); err != nil {
			// Use a distinct subnet for each connection to avoid conflicts
			localIP := fmt.Sprintf("10.%d.%d.1", (i/255)+1, i%255+1)
			remoteIP := fmt.Sprintf("10.%d.%d.2", (i/255)+1, i%255+1)
			return ifaceName, localIP, remoteIP
		}
	}
	log.Fatal("No available TUN interface found")
	return "", baseLocalIP, ""
}

// SetInterfaceUpForConnection creates a new TUN interface for a specific connection
func SetInterfaceUpForConnection() (*water.Interface, string, string, string) {
	ifaceName, localIPAddr, remoteIPAddr := getAvailableTunInterface()

	InterfaceName, remoteIP = getAvailableTunInterface()

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
