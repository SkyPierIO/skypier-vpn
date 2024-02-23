package controllers

import (
	"context"
	"log"
	"time"

	b64 "encoding/base64"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/ipfs/go-datastore"
	"github.com/libp2p/go-libp2p"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/crypto"
	"github.com/libp2p/go-libp2p/core/host"
	peerstore "github.com/libp2p/go-libp2p/core/peer"
	"github.com/libp2p/go-libp2p/core/routing"
	"github.com/libp2p/go-libp2p/p2p/net/connmgr"
	noise "github.com/libp2p/go-libp2p/p2p/security/noise"
	libp2ptls "github.com/libp2p/go-libp2p/p2p/security/tls"
	quic "github.com/libp2p/go-libp2p/p2p/transport/quic"
	"github.com/libp2p/go-libp2p/p2p/transport/tcp"
)

func loadPrivateKey() (crypto.PrivKey, error) {
	config, err := utils.LoadConfiguration("./config")
	if err != nil {
		privKey, _, err := crypto.GenerateKeyPair(crypto.RSA, 2048)
		if err != nil {
			log.Printf("error generating new key...")
			return nil, err
		}
		return privKey, nil
	} else {
		privKey, err := crypto.UnmarshalPrivateKey([]byte(config.PrivateKey)) // TODO read PK from cfg
		utils.Check(err)
		return privKey, nil
	}
}

func displayNodeInfo(node host.Host, dht *dht.IpfsDHT) {
	// print node ID
	log.Println("───────────────────────────────────────────────────")
	log.Println("libp2p peer ID: ", node.ID())

	// print the node's PeerInfo in multiaddr format
	peerInfo := peerstore.AddrInfo{
		ID:    node.ID(),
		Addrs: node.Addrs(),
	}
	addrs, err := peerstore.AddrInfoToP2pAddrs(&peerInfo)
	if err != nil {
		panic(err)
	}
	log.Println("libp2p peer address:")
	for i := 0; i < len(addrs); i++ {
		log.Println("\t", addrs[i])
	}
	log.Println("───────────────────────────────────────────────────")

	pubKey, err := dht.GetPublicKey(context.Background(), node.ID())
	utils.Check(err)

	log.Println("DHT Pub Key Struct : ", pubKey)
}

func BootstrapNode(pk crypto.PrivKey, tcpPort string, udpPort string) (host.Host, *dht.IpfsDHT, error) {
	// Init a libp2p node
	// ----------------------------------------------------------

	// The context governs the lifetime of the libp2p node.
	// Cancelling it will stop the host.
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	// Connection manager - Load Balancer
	connmgr, err := connmgr.NewConnManager(
		100, // Lowwater
		400, // HighWater,
		connmgr.WithGracePeriod(time.Minute),
	)

	var idht *dht.IpfsDHT

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
		// Multiple listen addresses
		libp2p.ListenAddrStrings(
			"/ip6/::/udp/"+udpPort+"/quic-v1",      // IPv6 QUIC
			"/ip4/0.0.0.0/udp/"+udpPort+"/quic-v1", // IPv4 QUIC
			"/ip6/::/tcp/"+tcpPort,                 // IPv6 TCP
			"/ip4/0.0.0.0/tcp/"+tcpPort,            // IPv4 TCP
		),
		// Use the keypair we generated / from config file
		libp2p.Identity(pk),
		// libp2p.DefaultSecurity,
		// support TLS connections
		libp2p.Security(libp2ptls.ID, libp2ptls.New),
		// support noise connections
		libp2p.Security(noise.ID, noise.New),
		// support QUIC transports
		libp2p.Transport(quic.NewTransport),
		// support default TCP transport
		libp2p.Transport(tcp.NewTCPTransport),
		// Let's prevent our peer from having too many
		// connections by attaching a connection manager.
		libp2p.ConnectionManager(connmgr),
		// Attempt to open ports using uPNP for NATed hosts.
		libp2p.NATPortMap(),
		// Let this host use the DHT to find other hosts
		libp2p.Routing(func(h host.Host) (routing.PeerRouting, error) {
			idht, err = dht.New(ctx, h)
			return idht, err
		}),
	)
	utils.Check(err)
	defer node.Close()

	keyBytes, err := crypto.MarshalPrivateKey(node.Peerstore().PrivKey(node.ID()))
	utils.Check(err)
	sEnc := b64.StdEncoding.EncodeToString([]byte(keyBytes))
	if utils.IsDebugEnabled() {
		log.Println(sEnc)
	}

	// Start a DHT, for use in peer discovery. We can't just make a new DHT client
	// because we want each peer to maintain its own local copy of the DHT, so
	// that the bootstrapping node of the DHT can go down without inhibitting
	// future peer discovery.
	//
	// Use dht.NewDHTClient if you don't want our DHT to be requested
	newDHT := dht.NewDHT(ctx, node, datastore.NewMapDatastore())

	// Bootstrap the DHT. In the default configuration, this spawns a Background
	// thread that will refresh the peer table every five minutes.
	if err = newDHT.Bootstrap(ctx); err != nil {
		panic(err)
	}

	// This connects to public bootstrappers
	for _, addr := range dht.DefaultBootstrapPeers {
		pi, _ := peerstore.AddrInfoFromP2pAddr(addr)
		// We ignore errors as some bootstrap peers may be down
		// and that is fine.
		err := node.Connect(ctx, *pi)
		utils.Check(err)
		log.Println("Connected to bootstrap peer: ", pi.ID)

	}

	return node, newDHT, err
}

func SetNodeUp() {
	log.Println("Generating identity...")
	privKey, err := loadPrivateKey()
	utils.Check(err)

	// Find available port for both TCP and UDP
	tcpPort := utils.GetFirstAvailableTCPPort(3000, 3999)
	udpPort := utils.GetFirstAvailableTCPPort(3000, 3999)

	node, dht, err := BootstrapNode(privKey, tcpPort, udpPort)
	utils.Check(err)
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
	// if err := node.Connect(ctx, *peer); err != nil {
	// 	panic(err)
	// }
	// log.Println("sending 3 ping messages to", addr)
	// ch := pingService.Ping(ctx, peer.ID)
	// for i := 0; i < 3; i++ {
	// 	res := <-ch
	// 	log.Println("pinged", addr, "in", res.RTT)
	// }

}
