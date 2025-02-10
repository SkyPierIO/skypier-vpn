package vpn

import (
	"context"
	"log"
	"strings"

	b64 "encoding/base64"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/libp2p/go-libp2p"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/crypto"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/network"
	peerstore "github.com/libp2p/go-libp2p/core/peer"
	"github.com/libp2p/go-libp2p/core/routing"
	rcmgr "github.com/libp2p/go-libp2p/p2p/host/resource-manager"

	// "github.com/libp2p/go-libp2p/p2p/net/connmgr"

	noise "github.com/libp2p/go-libp2p/p2p/security/noise"
	libp2ptls "github.com/libp2p/go-libp2p/p2p/security/tls"
	quic "github.com/libp2p/go-libp2p/p2p/transport/quic"
	"github.com/libp2p/go-libp2p/p2p/transport/tcp"
	"github.com/songgao/water"
)

var (
	tunEnabled bool
	nodeIface  *water.Interface
	stopChan   = make(chan struct{})
)

func handleCloseStreamHandler() {
	closeOnce.Do(func() {
		close(stopChan)
	})
}

func displayNodeInfo(node host.Host) {
	// print node ID
	log.Println("───────────────────────────────────────────────────")
	log.Println("libp2p peer ID: ", node.ID())

	// print the node's PeerInfo in multiaddr format
	peerInfo := peerstore.AddrInfo{
		ID:    node.ID(),
		Addrs: node.Addrs(),
	}
	addrs, err := peerstore.AddrInfoToP2pAddrs(&peerInfo)
	utils.Check(err)

	log.Println("libp2p peer address:")
	for i := 0; i < len(addrs); i++ {
		log.Println("\t", addrs[i])
	}
	log.Println("───────────────────────────────────────────────────")
}

func StartNode(innerConfig utils.InnerConfig, pk crypto.PrivKey, tcpPort string, udpPort string) (host.Host, *dht.IpfsDHT, error) {
	// Init a libp2p node
	// ----------------------------------------------------------

	// The context governs the lifetime of the libp2p node.
	// Cancelling it will stop the host.
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	// Connection manager - Load Balancer
	// ----------------------------------
	// NewConnManager creates a new BasicConnMgr with
	// the provided params: lo and hi are watermarks
	// governing the number of connections that'll be
	// maintained. When the peer count exceeds the
	// 'high watermark', as many peers will be pruned
	// (and their connections terminated) until
	// 'low watermark' peers remain.
	// connmgr, err := connmgr.NewConnManager(
	// 	5,  // Lowwater
	// 	15, // HighWater
	// 	connmgr.WithGracePeriod(10*time.Second),
	// )
	// utils.Check(err)

	// Sometimes the swarm_stream is left open, but the underlying yamux_stream is closed.
	// This causes the resource limit to be reached. We Need to add monitoring and force to close old streams
	resourceManager, err := rcmgr.NewResourceManager(rcmgr.NewFixedLimiter(rcmgr.InfiniteLimits))
	utils.Check(err)

	var idht *dht.IpfsDHT

	// QUIC is an UDP-based transport protocol.
	// QUIC connections are always encrypted (usin	g TLS 1.3) and
	// provides native stream multiplexing.
	// Whenever possible, QUIC should be preferred over TCP.
	// Not only is it faster, it also increases the chances of a
	// successful holepunch in case of firewalls

	// However: UDP is blocked in ~5-10% of networks,
	// especially in corporate networks, so running a node
	// exclusively with QUIC is usually not an option.

	// TODO add a cli/config option to prevent private IP advertising
	node, err := libp2p.New(
		// Let's prevent our peer from having too many
		// connections by attaching a connection manager.
		// libp2p.ConnectionManager(connmgr),
		// Multiple listen addresses
		libp2p.ListenAddrStrings(
			// "/ip6/::/udp/"+udpPort+"/quic-v1",      // IPv6 QUIC
			"/ip4/0.0.0.0/udp/"+udpPort+"/quic-v1", // IPv4 QUIC
			// "/ip6/::/tcp/"+tcpPort,                 // IPv6 TCP
			"/ip4/0.0.0.0/tcp/"+tcpPort, // IPv4 TCP
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
		// Attempt to open ports using uPNP for NATed hosts.
		libp2p.NATPortMap(),
		// Let this host use the DHT to find other hosts
		libp2p.Routing(func(h host.Host) (routing.PeerRouting, error) {
			// var dstore datastore.Batching
			// idht = dht.NewDHTClient(ctx, h, dstore)
			idht, err = dht.New(ctx, h)
			log.Println("initializing DHT...")
			return idht, err
		}),
		// add monitoring and force to close old streams
		libp2p.ResourceManager(resourceManager),
		// libp2p.FallbackDefaults,
		libp2p.Ping(true),
	)
	utils.Check(err)
	// defer node.Close()

	keyBytes, err := crypto.MarshalPrivateKey(node.Peerstore().PrivKey(node.ID()))
	utils.Check(err)
	sEnc := b64.StdEncoding.EncodeToString([]byte(keyBytes))
	if utils.IsDebugEnabled() {
		log.Println(sEnc)
	}

	// Dev test bootstrap node (NL)
	// TODO add more bootstrap nodes for Skypier in other countries to avoid single point of failure
	// TODO add some bootstrap nodes with TCP && QUIC
	// TODO avoid having default bootstrap nodes hardcoded here. could be get from an online URI, easier for future update

	// ipfsPublicPeer, err := multiaddr.NewMultiaddr("/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb")
	// utils.Check(err)
	// // skypierPublicPeer, err := multiaddr.NewMultiaddr("/ip4/136.244.105.166/udp/4001/quic-v1/p2p/12D3KooWKzmZmLySs5WKBvdxzsctWNsN9abbtnj4PyyqNg9LCyek")
	// utils.Check(err)
	// skypierBootstrapPeers := [...]multiaddr.Multiaddr{
	// 	// skypierPublicPeer,
	// 	ipfsPublicPeer,
	// }

	// This connects to public bootstrappers
	// use `dht.DefaultBootstrapPeers` for IPFS public bootstrap nodes
	// use `skypierBootstrapPeers` for Skypier dedicated bootstrap nodes
	for _, addr := range dht.DefaultBootstrapPeers {
		pi, _ := peerstore.AddrInfoFromP2pAddr(addr)
		// We ignore errors as some bootstrap peers may be down
		// and that is fine.
		err := node.Connect(ctx, *pi)
		utils.Check(err)
		log.Println("Connected to bootstrap peer: ", pi.ID)
	}

	log.Println("Enabling Stream Handler...")
	// Set the Skypier protocol handler on the Host's Mux
	node.SetStreamHandler("/skypier/1.0", streamHandler)
	log.Println("Stream handler enabled for protocol /skypier/1.0")

	// Bootstrap the DHT to build its routing table
	if err := idht.Bootstrap(ctx); err != nil {
		log.Fatalf("Failed to bootstrap DHT: %v", err)
	}

	// Refresh the DHT routing table
	// ----------------------------------------------------------
	// RefreshRoutingTable tells the DHT to refresh it's routing tables.
	//
	// The returned channel will block until the refresh finishes,
	// then yield the error and close. The channel is buffered and safe to ignore.
	//
	// ----------------------------------------------------------
	// log.Println("Refreshing the DHT routing table. Please wait...")
	// errChan := idht.RefreshRoutingTable()
	// if err := <-errChan; err != nil {
	// 	log.Printf("DHT refresh failed: %v", err)
	// } else {
	// 	log.Println("DHT refresh completed successfully.")
	// }
	idht.RefreshRoutingTable()

	return node, idht, err
}

func shouldCloseStream(err error) bool {
	if err == nil {
		return false
	}
	errMsg := err.Error()
	return errMsg == "stream reset" ||
		errMsg == "no recent network activity" ||
		errMsg == "read tun: not pollable" ||
		strings.Contains(errMsg, "received a stateless reset with token") ||
		strings.Contains(errMsg, "Application error 0x0")
}

func SetNodeUp(ctx context.Context, config utils.InnerConfig) (host.Host, *dht.IpfsDHT) {
	log.Println("Generating identity...")
	privKey, err := LoadPrivateKey()
	utils.Check(err)

	// Find available port for both TCP and UDP
	tcpPort := utils.GetFirstAvailableTCPPort(4002, 4999)
	udpPort := utils.GetFirstAvailableTCPPort(4002, 4999)

	node, dht, err := StartNode(config, privKey, tcpPort, udpPort)
	utils.Check(err)
	displayNodeInfo(node)

	return node, dht
}

func streamHandler(s network.Stream) {
	log.Println("Starting the stream handler...")
	log.Println("node status", utils.IS_NODE_HOST)

	if !tunEnabled {
		nodeIface = SetInterfaceUp()
		tunEnabled = true
	}

	buf_mtu := make([]byte, 1500)

	// Start the goroutine with error handling
	go func() {
		for {
			select {
			case <-stopChan:
				return
			default:
				// Wrap the stream writer with the length-prefixed writer
				lengthPrefixedStream := utils.NewLengthPrefixedWriter(s)
				n, err := utils.Copy(lengthPrefixedStream, nodeIface, buf_mtu)
				log.Printf("⬅️ %d bytes copied from nodeIface to stream", n)
				if err != nil {
					log.Printf("🚨🚨🚨 Error copying data: %v", err)
					if shouldCloseStream(err) {
						log.Println("Closing stream...")
						handleCloseStreamHandler()
						return
					} else {
						log.Println("Error is not so bad, continue... (debug)")
					}
				}
			}
		}
	}()

	go func() {
		for {
			select {
			case <-stopChan:
				return
			default:
				// Wrap the stream reader with the length-prefixed reader
				lengthPrefixedStream := utils.NewLengthPrefixedReader(s)
				n, err := utils.Copy(nodeIface, lengthPrefixedStream, buf_mtu)
				if err != nil {
					if err.Error() == "short buffer" {
						continue // 0 bytes copied, continue
					}
					if n != 0 {
						log.Printf("➡️ %d bytes copied from stream to nodeIface", n)
						log.Printf("🚨🚨🚨 Error copying data: %v", err)
					}
					if shouldCloseStream(err) {
						handleCloseStreamHandler()
						return
					}
				} else {
					if n == 0 {
						log.Println("🚨🚨🚨 No data copied, closing stream")
						handleCloseStreamHandler()
						return
					}
				}
			}
		}
	}()
}
