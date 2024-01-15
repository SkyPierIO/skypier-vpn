package controllers

import (
	"log"

	"github.com/songgao/packets/ethernet"
	"github.com/songgao/water"
	"github.com/vishvananda/netlink"
)

func SetInterfaceUp() {

	config := water.Config{
		DeviceType: water.TAP,
	}
	config.Name = "skypier0"

	iface, err := water.New(config)
	if err != nil {
		log.Fatal(err)
	}

	pierIface, _ := netlink.LinkByName("skypier0")
	addr, _ := netlink.ParseAddr("10.1.1.1/24") // TODO remove static IP
	netlink.AddrAdd(pierIface, addr)
	netlink.LinkSetUp(pierIface)

	var frame ethernet.Frame

	for {
		frame.Resize(1500) // MTU
		n, err := iface.Read([]byte(frame))
		if err != nil {
			log.Fatal(err)
		}
		frame = frame[:n]
		// log.Printf("Dst: %s\n", frame.Destination())
		// log.Printf("Src: %s\n", frame.Source())
		// log.Printf("Ethertype: % x\n", frame.Ethertype())
		// log.Printf("Payload: % x\n", frame.Payload())
	}
}

func SetInterfaceDown() {
	// TODO implement it
}
