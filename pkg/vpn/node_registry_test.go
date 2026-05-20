package vpn

import (
	"runtime"
	"testing"
	"time"

	"github.com/libp2p/go-libp2p"
)

func TestNodeRegistryFreshness(t *testing.T) {
	h, err := libp2p.New()
	if err != nil {
		t.Fatalf("failed to create host: %v", err)
	}
	defer h.Close()

	now := time.Now().UTC()
	payload := NodeMetadataPayload{
		PeerID:         h.ID().String(),
		SkypierID:      SkypierIDFromPeerID(h.ID().String()),
		Status:         NodeStatusPrivate,
		StatusHex:      "0x04",
		Nickname:       "registry-test",
		Timestamp:      now.Unix(),
		UptimeSeconds:  12,
		ResourceStatus: NodeResourceStable,
		Version:        nodeVersion,
		OperatingOS:    runtime.GOOS,
	}

	announcement, err := SignNodeMetadataAnnouncement(h, payload)
	if err != nil {
		t.Fatalf("failed to sign announcement: %v", err)
	}

	registry := NewNodeRegistry(120 * time.Second)
	registry.UpsertFromAnnouncement(announcement, "skypier-vpn-nodes-v1", now)

	exists, fresh, record := registry.Freshness(h.ID().String(), now)
	if !exists {
		t.Fatal("expected peer to exist in registry")
	}
	if !fresh {
		t.Fatal("expected peer metadata to be fresh")
	}
	if record.Metadata.PeerID != h.ID().String() {
		t.Fatalf("unexpected peer id in record: %s", record.Metadata.PeerID)
	}

	entries := registry.List(now, false)
	if len(entries) != 1 {
		t.Fatalf("expected one fresh entry, got %d", len(entries))
	}
}

func TestNodeRegistryPruneStale(t *testing.T) {
	h, err := libp2p.New()
	if err != nil {
		t.Fatalf("failed to create host: %v", err)
	}
	defer h.Close()

	now := time.Now().UTC()
	payload := NodeMetadataPayload{
		PeerID:         h.ID().String(),
		SkypierID:      SkypierIDFromPeerID(h.ID().String()),
		Status:         NodeStatusPrivate,
		StatusHex:      "0x04",
		Nickname:       "stale-test",
		Timestamp:      now.Add(-10 * time.Second).Unix(),
		UptimeSeconds:  5,
		ResourceStatus: NodeResourceStable,
		Version:        nodeVersion,
		OperatingOS:    runtime.GOOS,
	}

	announcement, err := SignNodeMetadataAnnouncement(h, payload)
	if err != nil {
		t.Fatalf("failed to sign announcement: %v", err)
	}

	registry := NewNodeRegistry(3 * time.Second)
	receivedAt := now.Add(-10 * time.Second)
	registry.UpsertFromAnnouncement(announcement, "skypier-vpn-nodes-v1", receivedAt)

	exists, fresh, _ := registry.Freshness(h.ID().String(), now)
	if !exists {
		t.Fatal("expected peer to exist in registry")
	}
	if fresh {
		t.Fatal("expected peer metadata to be stale")
	}

	removed := registry.PruneStale(now)
	if removed != 1 {
		t.Fatalf("expected one stale entry to be removed, got %d", removed)
	}

	entries := registry.List(now, true)
	if len(entries) != 0 {
		t.Fatalf("expected empty registry after prune, got %d entries", len(entries))
	}
}
