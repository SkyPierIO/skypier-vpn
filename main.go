package main

import (
	"fmt"
	"log"

	"github.com/libp2p/go-libp2p"
	peerstore "github.com/libp2p/go-libp2p/core/peer"
	"github.com/libp2p/go-libp2p/p2p/protocol/ping"
	"github.com/songgao/packets/ethernet"
	"github.com/songgao/water"
	"github.com/vishvananda/netlink"
)

func main() {

	// start a libp2p node that listens on a random local TCP port,
	// but without running the built-in ping protocol
	node, err := libp2p.New(
		libp2p.ListenAddrStrings("/ip4/127.0.0.1/tcp/0"),
		libp2p.Ping(false),
	)
	if err != nil {
		panic(err)
	}

	// configure our own ping protocol
	pingService := &ping.PingService{Host: node}
	node.SetStreamHandler(ping.ID, pingService.PingHandler)

	// print node ID
	fmt.Println("───────────────────────────────────────────────────")
	fmt.Println("libp2p peer ID:\n", node.ID())

	// print the node's PeerInfo in multiaddr format
	peerInfo := peerstore.AddrInfo{
		ID:    node.ID(),
		Addrs: node.Addrs(),
	}
	addrs, err := peerstore.AddrInfoToP2pAddrs(&peerInfo)
	if err != nil {
		panic(err)
	}
	fmt.Println("libp2p peer address:\n", addrs[0])
	fmt.Println("───────────────────────────────────────────────────")

	// ptp = p2p.New(node.ID(), nil)

	config := water.Config{
		DeviceType: water.TAP,
	}
	config.Name = "skypier0"

	ifce, err := water.New(config)
	if err != nil {
		log.Fatal(err)
	}

	pierIface, _ := netlink.LinkByName("skypier0")
	addr, _ := netlink.ParseAddr("10.1.0.10/24")
	netlink.AddrAdd(pierIface, addr)
	netlink.LinkSetUp(pierIface)

	var frame ethernet.Frame

	for {
		frame.Resize(1500)
		n, err := ifce.Read([]byte(frame))
		if err != nil {
			log.Fatal(err)
		}
		frame = frame[:n]
		log.Printf("Dst: %s\n", frame.Destination())
		log.Printf("Src: %s\n", frame.Source())
		log.Printf("Ethertype: % x\n", frame.Ethertype())
		log.Printf("Payload: % x\n", frame.Payload())
	}
}
