package controllers

import (
	"context"
	"fmt"

	b64 "encoding/base64"

	"github.com/SkyPierIO/skypier-vpn/utils"
	"github.com/ipfs/go-datastore"
	"github.com/libp2p/go-libp2p"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/crypto"
	"github.com/libp2p/go-libp2p/core/host"
	peerstore "github.com/libp2p/go-libp2p/core/peer"
	quic "github.com/libp2p/go-libp2p/p2p/transport/quic"
	"github.com/libp2p/go-libp2p/p2p/transport/tcp"
)

func check(err error) {
	if err != nil {
		panic(err)
	}
}

func loadPrivateKey() (crypto.PrivKey, error) {
	config, err := utils.LoadConfiguration("./config")
	if err != nil {
		privKey, _, err := crypto.GenerateKeyPair(crypto.RSA, 2048)
		if err != nil {
			return nil, err
		}
		return privKey, nil
	} else {
		privKey, err := crypto.UnmarshalPrivateKey([]byte(config.PrivateKey)) // TODO read PK from cfg
		check(err)
		return privKey, nil
	}
}

func displayNodeInfo(node host.Host, dht *dht.IpfsDHT) {
	// print node ID
	fmt.Println("───────────────────────────────────────────────────")
	fmt.Println("libp2p peer ID:\n\t", node.ID())

	// print the node's PeerInfo in multiaddr format
	peerInfo := peerstore.AddrInfo{
		ID:    node.ID(),
		Addrs: node.Addrs(),
	}
	addrs, err := peerstore.AddrInfoToP2pAddrs(&peerInfo)
	if err != nil {
		panic(err)
	}
	fmt.Println("libp2p peer address:")
	for i := 0; i < len(addrs); i++ {
		fmt.Println("\t", addrs[i])
	}
	fmt.Println("───────────────────────────────────────────────────")

	pubKey, err := dht.GetPublicKey(context.Background(), node.ID())
	check(err)

	fmt.Println("DHT Pub Key Struct : ", pubKey)
}

func BootstrapNode(pk crypto.PrivKey, tcpPort string, udpPort string) (host.Host, *dht.IpfsDHT, error) {
	// Init a libp2p node
	// ----------------------------------------------------------

	// QUIC is an UDP-based transport protocol.
	// QUIC connections are always encrypted (using TLS 1.3) and
	// provides native stream multiplexing.
	// Whenever possible, QUIC should be preferred over TCP.
	// Not only is it faster, it also increases the chances of a
	// successful holepunch in case of firewalls

	// However: UDP is blocked in ~5-10% of networks,
	// especially in corporate networks, so running a node
	// exclusively with QUIC is usually not an option.

	// TODO add a cli/config option to prevent private IP advertising
	node, err := libp2p.New(
		libp2p.ListenAddrStrings(
			"/ip6/::/udp/"+udpPort+"/quic-v1",      // IPv6 QUIC
			"/ip4/0.0.0.0/udp/"+udpPort+"/quic-v1", // IPv4 QUIC
			"/ip6/::/tcp/"+tcpPort,                 // IPv6 TCP
			"/ip4/0.0.0.0/tcp/"+tcpPort,            // IPv4 TCP
		),
		libp2p.Identity(pk),
		libp2p.DefaultSecurity,
		libp2p.Transport(quic.NewTransport),
		libp2p.Transport(tcp.NewTCPTransport),
	)
	check(err)

	keyBytes, err := crypto.MarshalPrivateKey(node.Peerstore().PrivKey(node.ID()))
	check(err)
	sEnc := b64.StdEncoding.EncodeToString([]byte(keyBytes))
	fmt.Println(sEnc)

	// Create private DHT
	newDHT := dht.NewDHTClient(context.Background(), node, datastore.NewMapDatastore())

	return node, newDHT, err
}

func SetNodeUp() {
	fmt.Println("Generating identity...")
	privKey, err := loadPrivateKey()
	check(err)

	// Find available port for both TCP and UDP

	tcpPort := utils.GetFirstAvailableTCPPort(3000, 3999)
	udpPort := utils.GetFirstAvailableTCPPort(3000, 3999)

	node, dht, err := BootstrapNode(privKey, tcpPort, udpPort)
	check(err)
	displayNodeInfo(node, dht)

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

}
