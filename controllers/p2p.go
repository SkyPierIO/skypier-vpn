package controllers

import (
	"fmt"

	"github.com/libp2p/go-libp2p"
	peerstore "github.com/libp2p/go-libp2p/core/peer"
)

func SetNodeUp() {

	// start a libp2p node that listens on a random local TCP port,
	node, err := libp2p.New(
		libp2p.ListenAddrStrings("/ip4/127.0.0.1/tcp/0"),
	)
	if err != nil {
		panic(err)
	}

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
