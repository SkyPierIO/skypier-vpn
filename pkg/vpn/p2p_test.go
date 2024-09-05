package vpn

import (
	"context"
	"testing"

	"github.com/libp2p/go-libp2p"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/libp2p/go-libp2p/core/crypto"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/routing"
	rcmgr "github.com/libp2p/go-libp2p/p2p/host/resource-manager"
	"github.com/libp2p/go-libp2p/p2p/net/connmgr"
	noise "github.com/libp2p/go-libp2p/p2p/security/noise"
	libp2ptls "github.com/libp2p/go-libp2p/p2p/security/tls"
	quic "github.com/libp2p/go-libp2p/p2p/transport/quic"
	"github.com/libp2p/go-libp2p/p2p/transport/tcp"
)

func TestP2PNode(t *testing.T) {
	ctx := context.Background()

	// Mock configurations
	tcpPort := "4002"
	pk := generateMockPrivateKey()
	connmgr, _ := connmgr.NewConnManager(100, 400, connmgr.WithGracePeriod(0))
	resourceManager, _ := rcmgr.NewResourceManager(rcmgr.NewFixedLimiter(rcmgr.InfiniteLimits))

	// Create a new libp2p host
	h, err := libp2p.New(
		libp2p.ListenAddrStrings("/ip4/0.0.0.0/tcp/"+tcpPort),
		libp2p.Identity(pk),
		libp2p.DefaultMuxers,
		libp2p.Security(libp2ptls.ID, libp2ptls.New),
		libp2p.Security(noise.ID, noise.New),
		libp2p.Transport(quic.NewTransport),
		libp2p.Transport(tcp.NewTCPTransport),
		libp2p.ConnectionManager(connmgr),
		libp2p.NATPortMap(),
		libp2p.Routing(func(h host.Host) (routing.PeerRouting, error) {
			idht, err := dht.New(ctx, h)
			return idht, err
		}),
		libp2p.ResourceManager(resourceManager),
		libp2p.FallbackDefaults,
		libp2p.Ping(true),
	)
	if err != nil {
		t.Fatalf("Failed to create libp2p host: %v", err)
	}

	// Verify the host is created and running
	if h.ID() == "" {
		t.Fatal("Expected non-empty host ID")
	}

	// Verify the host has the correct transport protocols
	if !hasTransport(h, "/ip4/127.0.0.1/tcp/"+tcpPort) {
		t.Fatalf("Expected host to listen on /ip4/127.0.0.1/tcp/%s", tcpPort)
	}

	// Clean up
	if err := h.Close(); err != nil {
		t.Fatalf("Failed to close libp2p host: %v", err)
	}
}

// hasTransport checks if the host has a specific transport protocol
func hasTransport(h host.Host, addr string) bool {
	for _, a := range h.Addrs() {
		if a.String() == addr {
			return true
		}
	}
	return false
}

// generateMockPrivateKey generates a mock private key for testing
func generateMockPrivateKey() crypto.PrivKey {
	pk, _, _ := crypto.GenerateKeyPair(crypto.RSA, 2048)
	return pk
}
