package vpn

import (
	"log"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/songgao/water"
	"github.com/vishvananda/netlink"
)

var interfaceName = "skypier0"

func SetInterfaceUp() *water.Interface {
	config := water.Config{
		DeviceType: water.TUN,
	}
	config.Name = interfaceName

	// Create a new TUN/TAP interface using config.
	iface, err := water.New(config)
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Set TUN interface up")

	// Configure the network interface
	pierIface, _ := netlink.LinkByName(interfaceName)
	var addr *netlink.Addr
	if utils.IS_NODE_HOST {
		addr, _ = netlink.ParseAddr("10.1.1.2/24") // TODO remove static IP
	} else {
		addr, _ = netlink.ParseAddr("10.1.1.1/24") // TODO remove static IP
	}
	netlink.AddrAdd(pierIface, addr)
	netlink.LinkSetUp(pierIface)

	return iface
}

func SetInterfaceDown() error {
	link, err := netlink.LinkByName(interfaceName)
	if err != nil {
		return err
	}
	return netlink.LinkSetDown(link)
}
