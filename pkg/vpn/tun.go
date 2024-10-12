package vpn

import (
	"log"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/songgao/water"
	"github.com/vishvananda/netlink"
)

var InterfaceName = "utun8"

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

	// Configure the network interface
	pierIface, _ := netlink.LinkByName(InterfaceName)
	var addr *netlink.Addr
	if utils.IS_NODE_HOST {
		addr, _ = netlink.ParseAddr("10.1.1.2/24") // TODO remove static IP
	} else {
		addr, _ = netlink.ParseAddr("10.1.1.1/24") // TODO remove static IP
	}
	netlink.AddrAdd(pierIface, addr)
	netlink.LinkSetUp(pierIface)

	// if !utils.IS_NODE_HOST {
	// 	// Add default IP route
	// 	defaultRoute := &netlink.Route{
	// 		Dst:       nil,
	// 		Gw:        net.ParseIP("10.1.1.2"),
	// 		LinkIndex: pierIface.Attrs().Index,
	// 		Protocol:  0,  // Set the protocol to static
	// 		Priority:  50, // Set the priority to 50
	// 	}
	// 	err = netlink.RouteAdd(defaultRoute)
	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}
	// }

	return iface
}

func SetInterfaceDown() error {
	link, err := netlink.LinkByName(InterfaceName)
	if err != nil {
		return err
	}
	return netlink.LinkSetDown(link)
}
