package vpn

import (
	"fmt"
	"log"
	"os/exec"
	"runtime"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/songgao/water"
	"github.com/vishvananda/netlink"
)

var (
	localIP       = "10.1.1.1" // TODO remove static IP
	remoteIP      = "10.1.1.2" // TODO remove static IP
	InterfaceName = "utun8"
)

func SetInterfaceUp() *water.Interface {
	config := water.Config{
		DeviceType: water.TUN,
	}
	config.Name = InterfaceName

	// Create a new TUN/TAP interface using config.
	iface, err := water.New(config)
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Set TUN interface up")

	if runtime.GOOS == "darwin" {
		// macOS specific configuration
		err := configureTunMacOS(InterfaceName, localIP, remoteIP)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		// Linux specific configuration
		pierIface, _ := netlink.LinkByName(InterfaceName)
		var addr *netlink.Addr
		if utils.IS_NODE_HOST {
			addr, _ = netlink.ParseAddr(remoteIP + "/24")
		} else {
			addr, _ = netlink.ParseAddr(localIP + "/24")
		}
		netlink.AddrAdd(pierIface, addr)
		netlink.LinkSetUp(pierIface)
	}
	return iface
}

func configureTunMacOS(ifaceName, localIP, remoteIP string) error {
	// Set the local address
	cmd := exec.Command("ifconfig", ifaceName, "inet", localIP, remoteIP, "up")
	if err := cmd.Run(); err != nil {
		return err
	}

	// Set the MTU
	cmd = exec.Command("sudo", "ifconfig", ifaceName, "mtu", fmt.Sprintf("%d", 1500))
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
