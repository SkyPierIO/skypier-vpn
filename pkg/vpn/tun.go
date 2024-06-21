package vpn

import (
	"log"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/songgao/water"
	"github.com/vishvananda/netlink"
)

const (
	// We're using TUN interface, so only plain IP packet,
	// No ethernet header + mtu is set to 1300
	BUFFERSIZE = 1500
	MTU        = "1300"
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

	// resolve remote addr
	// remoteAddr, err := net.ResolveUDPAddr("udp", "89.89.226.3:4321")
	// remoteAddr, err := net.ResolveUDPAddr("udp", "136.244.105.166:4321")
	// if nil != err {
	// 	log.Fatalln("Unable to resolve remote addr:", err)
	// }
	// // listen to local socket
	// lstnAddr, err := net.ResolveUDPAddr("udp", ":4321")
	// if nil != err {
	// 	log.Fatalln("Unable to get UDP socket:", err)
	// }
	// lstnConn, err := net.ListenUDP("udp", lstnAddr)
	// if nil != err {
	// 	log.Fatalln("Unable to listen on UDP socket:", err)
	// }
	// defer lstnConn.Close()
	// recv in separate thread
	// go func() {
	// 	buf := make([]byte, BUFFERSIZE)
	// 	for {
	// 		n, addr, err := lstnConn.ReadFromUDP(buf)
	// 		// just debug
	// 		header, _ := ipv4.ParseHeader(buf[:n])
	// 		fmt.Printf("Received %d bytes from %v: %+v\n", n, addr, header)
	// 		if err != nil || n == 0 {
	// 			fmt.Println("Error: ", err)
	// 			continue
	// 		}
	// 		// write to TUN interface
	// 		iface.Write(buf[:n])
	// 	}
	// }()
	// // and one more loop
	// packet := make([]byte, BUFFERSIZE)
	// for {
	// 	plen, err := iface.Read(packet)
	// 	if err != nil {
	// 		break
	// 	}
	// 	// debug :)
	// 	header, _ := ipv4.ParseHeader(packet[:plen])
	// 	fmt.Printf("Sending to remote: %+v (%+v)\n", header, err)
	// 	// real send
	// 	lstnConn.WriteToUDP(packet[:plen], remoteAddr)
	// }

}

func SetInterfaceDown() error {
	link, err := netlink.LinkByName(interfaceName)
	if err != nil {
		return err
	}
	return netlink.LinkSetDown(link)
}
