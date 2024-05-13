package vpn

import (
	"context"
	"log"
	"runtime"
	"time"

	b64 "encoding/base64"
	"encoding/binary"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/gin-gonic/gin"
	"github.com/ipfs/go-datastore"
	"github.com/libp2p/go-libp2p"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/crypto"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/network"
	peerstore "github.com/libp2p/go-libp2p/core/peer"
	"github.com/libp2p/go-libp2p/core/protocol"
	"github.com/libp2p/go-libp2p/core/routing"
	"github.com/libp2p/go-libp2p/p2p/net/connmgr"
	noise "github.com/libp2p/go-libp2p/p2p/security/noise"
	libp2ptls "github.com/libp2p/go-libp2p/p2p/security/tls"
	quic "github.com/libp2p/go-libp2p/p2p/transport/quic"
	"github.com/libp2p/go-libp2p/p2p/transport/tcp"
	"github.com/multiformats/go-multiaddr"
)

type SkypierNode struct {
	PeerId          string `json:"peerId"`
	Nickname        string `json:"nickname,omitempty"`
	Version         string `json:"version"`
	OperatingSystem string `json:"os"`
	// Uptime          time.Duration `json:"uptime"`
}

// GetLocalPeerId     godoc
// @Summary      Get the local peer ID
// @Description  Get the local libp2p peer ID (this is the identity of your node on the Skypier Network)
// @Tags         VPN
// @Produce      json
// @Router       /id [get]
func GetLocalPeerId(node host.Host) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		type PeerBrief struct {
			Id string `json:"peerId"`
		}
		p := &PeerBrief{Id: node.ID().String()}
		c.IndentedJSON(200, p)
	}
	return gin.HandlerFunc(fn)
}

// GetLocalPeerDetails     godoc
// @Summary      Get the local peer details
// @Description  Get the local libp2p peer ID and details (OS, uptime, version, etc.)
// @Tags         VPN
// @Produce      json
// @Router       /me [get]
func GetLocalPeerDetails(node host.Host) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		peerId := node.ID()
		config, err := utils.LoadConfiguration("/etc/skypier/config.json")
		utils.Check(err)

		skypierNode := &SkypierNode{
			PeerId:          peerId.String(),
			Nickname:        config.Nickname,
			Version:         "v0.0.1",
			OperatingSystem: runtime.GOOS,
		}

		c.IndentedJSON(200, skypierNode)
	}
	return gin.HandlerFunc(fn)
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
		log.Fatal(err)
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

func StartNode(innerConfig utils.InnerConfig, pk crypto.PrivKey, tcpPort string, udpPort string) (host.Host, *dht.IpfsDHT, error) {
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
		// Enable stream connection multiplexers
		libp2p.DefaultMuxers,
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
		libp2p.FallbackDefaults,
	)
	utils.Check(err)
	// defer node.Close()

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
		log.Fatal(err)
	}

	// Dev test bootstrap node (NL)
	// TODO add more bootstrap nodes for Skypier in other countries to avoid single point of failure
	// TODO add some bootstrap nodes with TCP && QUIC
	// TODO avoid having default bootstrap nodes hardcoded here. could be get from an online URI, easier for future update
	initPeer, err := multiaddr.NewMultiaddr("/ip4/136.244.105.166/udp/4001/quic-v1/p2p/12D3KooWKzmZmLySs5WKBvdxzsctWNsN9abbtnj4PyyqNg9LCyek")
	utils.Check(err)
	skypierBootstrapPeers := [...]multiaddr.Multiaddr{
		initPeer,
	}

	// This connects to public bootstrappers
	// use `dht.DefaultBootstrapPeers` for IPFS public bootstrap nodes
	for _, addr := range skypierBootstrapPeers {
		pi, _ := peerstore.AddrInfoFromP2pAddr(addr)
		// We ignore errors as some bootstrap peers may be down
		// and that is fine.
		err := node.Connect(ctx, *pi)
		utils.Check(err)
		log.Println("Connected to bootstrap peer: ", pi.ID)
	}

	// Set the Skypier protocol handler on the Host's Mux
	node.SetStreamHandler(protocol.ID(innerConfig.Protocol), streamHandler)

	return node, newDHT, err
}

func SetNodeUp(config utils.InnerConfig) (host.Host, *dht.IpfsDHT) {
	log.Println("Generating identity...")
	privKey, err := loadPrivateKey()
	utils.Check(err)

	// Find available port for both TCP and UDP
	tcpPort := utils.GetFirstAvailableTCPPort(4002, 4999)
	udpPort := utils.GetFirstAvailableTCPPort(4002, 4999)

	node, dht, err := StartNode(config, privKey, tcpPort, udpPort)
	utils.Check(err)
	displayNodeInfo(node, dht)

	// configure our own ping protocol
	// pingService := &ping.PingService{Host: node}
	// node.SetStreamHandler(ping.ID, pingService.PingHandler)

	// addr, err := multiaddr.NewMultiaddr("/p2p/12D3KooWB7JEdAmeuranEgNDqKZ738ynUcZMhaTQoAzN9wxGPL3H")
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// peer, err := peerstore.AddrInfoFromP2pAddr(addr)
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// if err := node.Connect(ctx, *peer); err != nil {
	// 	log.Fatal(err)
	// }
	// log.Println("sending 3 ping messages to", addr)
	// ch := pingService.Ping(ctx, peer.ID)
	// for i := 0; i < 3; i++ {
	// 	res := <-ch
	// 	log.Println("pinged", addr, "in", res.RTT)
	// }

	return node, dht
}

var RevLookup map[string]string

func streamHandler(stream network.Stream) {
	// If the remote node ID isn't in the list of known nodes don't respond.
	if _, ok := RevLookup[stream.Conn().RemotePeer().ShortString()]; !ok {
		stream.Reset()
		return
	}
	var packet = make([]byte, 1500)
	var packetSize = make([]byte, 2)
	for {
		// Read the incoming packet's size as a binary value.
		_, err := stream.Read(packetSize)
		if err != nil {
			stream.Close()
			return
		}

		// Decode the incoming packet's size from binary.
		size := binary.LittleEndian.Uint16(packetSize)

		// Read in the packet until completion.
		var plen uint16 = 0
		for plen < size {
			tmp, err := stream.Read(packet[plen:size])
			plen += uint16(tmp)
			if err != nil {
				stream.Close()
				return
			}
		}
		// tun.Iface.Write(packet[:size])
	}
}
