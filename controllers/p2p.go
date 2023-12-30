package controllers

import (
	"fmt"

	"github.com/libp2p/go-libp2p"
	peerstore "github.com/libp2p/go-libp2p/core/peer"
	quic "github.com/libp2p/go-libp2p/p2p/transport/quic"
	"github.com/libp2p/go-libp2p/p2p/transport/tcp"
)

func SetNodeUp() {

	// Start a libp2p node
	// that listens on a random local TCP port

	// ----------------------------------------

	// QUIC is an UDP-based transport protocol.
	// QUIC connections are always encrypted (using TLS 1.3) and
	// provides native stream multiplexing.
	// Whenever possible, QUIC should be preferred over TCP.
	// Not only is it faster, it also increases the chances of a
	// successful holepunch in case of firewalls

	// However: UDP is blocked in ~5-10% of networks,
	// especially in corporate networks, so running a node
	// exclusively with QUIC is usually not an option.

	node, err := libp2p.New(
		libp2p.ListenAddrStrings(
			"/ip6/::/udp/0/quic",      // IPv6 QUIC
			"/ip4/0.0.0.0/udp/0/quic", // IPv4 QUIC
			"/ip4/127.0.0.1/tcp/0",    // IPv4 TCP
		),
		libp2p.DefaultSecurity,
		libp2p.Transport(quic.NewTransport),
		libp2p.Transport(tcp.NewTCPTransport),
		libp2p.Ping(false),
	)
	if err != nil {
		panic(err)
	}

	// configure our own ping protocol
	// pingService := &ping.PingService{Host: node}
	// node.SetStreamHandler(ping.ID, pingService.PingHandler)

	// addr, err := multiaddr.NewMultiaddr("/p2p/12D3KooWB7JEdAmeuranEgNDqKZ738ynUcZMhaTQoAzN9wxGPL3H")
	// if err != nil {
	// 	panic(err)
	// }
	// peer, err := peerstore.AddrInfoFromP2pAddr(addr)
	// if err != nil {
	// 	panic(err)
	// }
	// if err := node.Connect(context.Background(), *peer); err != nil {
	// 	panic(err)
	// }
	// fmt.Println("sending 3 ping messages to", addr)
	// ch := pingService.Ping(context.Background(), peer.ID)
	// for i := 0; i < 3; i++ {
	// 	res := <-ch
	// 	fmt.Println("pinged", addr, "in", res.RTT)
	// }

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

}
