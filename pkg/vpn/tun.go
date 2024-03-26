package vpn

import (
	"log"
	"net"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/songgao/packets/ethernet"
	"github.com/songgao/water"
	"github.com/vishvananda/netlink"
)

var interfaceName = "skypier0"

func SetInterfaceUp() {

	log.Println("Set TUN interface up")

	config := water.Config{
		DeviceType: water.TUN,
	}
	config.Name = interfaceName

	// Create a new TUN/TAP interface using config.
	iface, err := water.New(config)
	if err != nil {
		log.Fatal(err)
	}

	log.Println("New interface OK")

	// Configure the network interface
	pierIface, _ := netlink.LinkByName(interfaceName)
	addr, _ := netlink.ParseAddr("10.1.1.1/24") // TODO remove static IP
	netlink.AddrAdd(pierIface, addr)
	netlink.LinkSetUp(pierIface)

	isDebugEnabled := utils.IsDebugEnabled()

	var frame ethernet.Frame
	for {
		frame.Resize(1500) // MTU
		packet := []byte(frame)
		n, err := iface.Read(packet)
		if err != nil {
			log.Fatal(err)
		}
		frame = frame[:n]
		if isDebugEnabled {
			log.Printf("\n────────────── ETHERNET TYPE II ──────────────────")
			log.Printf("Dst MAC addr: %s\n", frame.Destination())
			log.Printf("Src MAC addr: %s\n", frame.Source())
			log.Printf("EtherType: % x\n", frame.Ethertype())
			log.Printf("Payload: % x\n", frame.Payload())
		}
		if frame.Ethertype() == ethernet.IPv4 {
			// 	Example Internet Datagram Header
			//
			// 	0                   1                   2                   3
			// 	0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
			// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
			// |Version|  IHL  |Type of Service|          Total Length         |
			// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
			// |         Identification        |Flags|      Fragment Offset    |
			// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
			// |  Time to Live |    Protocol   |         Header Checksum       |
			// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
			// |                       Source Address                          |
			// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
			// |                    Destination Address                        |
			// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
			// |                    Options                    |    Padding    |
			// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

			ipDst := net.IPv4(packet[16], packet[17], packet[18], packet[19]).String()
			ipSrc := net.IPv4(packet[20], packet[21], packet[22], packet[23]).String()

			if isDebugEnabled {
				log.Printf("─────────────────── IP packet ────────────────────")
				log.Printf("IP dst: %s\n", ipDst)
				log.Printf("IP src: %s\n", ipSrc)
			}
		}
	}
}

func SetInterfaceDown() error {
	link, err := netlink.LinkByName(interfaceName)
	if err != nil {
		return err
	}
	return netlink.LinkSetDown(link)
}
