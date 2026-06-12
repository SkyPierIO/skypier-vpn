package vpn

import (
	"runtime"
	"testing"
	"time"

	"github.com/libp2p/go-libp2p"
)

func TestNodeStatusToHex(t *testing.T) {
	testCases := []struct {
		status   string
		expected string
	}{
		{status: "dev", expected: "0x01"},
		{status: "preprod", expected: "0x02"},
		{status: "prod", expected: "0x03"},
		{status: "private", expected: "0x04"},
	}

	for _, tc := range testCases {
		hexCode, err := NodeStatusToHex(tc.status)
		if err != nil {
			t.Fatalf("status %s should be valid: %v", tc.status, err)
		}
		if hexCode != tc.expected {
			t.Fatalf("unexpected hex code for %s: got %s want %s", tc.status, hexCode, tc.expected)
		}
	}

	if _, err := NodeStatusToHex("invalid-status"); err == nil {
		t.Fatal("invalid status should return an error")
	}
}

func TestSkypierIDFromPeerIDFormat(t *testing.T) {
	peerID := "12D3KooWBMxYf4zR7zj6Xv7d8Vq8d4n8pFx7B1m6uP1x2Y3z4A5b"
	idA := SkypierIDFromPeerID(peerID)
	idB := SkypierIDFromPeerID(peerID)

	if len(idA) != 64 {
		t.Fatalf("skypier id must be 64 chars, got %d", len(idA))
	}
	if idA != idB {
		t.Fatal("skypier id must be deterministic")
	}
}

func TestSignAndVerifyNodeMetadataAnnouncement(t *testing.T) {
	h, err := libp2p.New()
	if err != nil {
		t.Fatalf("failed to create test host: %v", err)
	}
	defer h.Close()

	payload := NodeMetadataPayload{
		PeerID:         h.ID().String(),
		SkypierID:      SkypierIDFromPeerID(h.ID().String()),
		Status:         NodeStatusPrivate,
		StatusHex:      "0x04",
		Nickname:       "test-node",
		Timestamp:      time.Now().Unix(),
		UptimeSeconds:  1,
		ResourceStatus: NodeResourceStable,
		Version:        nodeVersion,
		OperatingOS:    runtime.GOOS,
	}

	announcement, err := SignNodeMetadataAnnouncement(h, payload)
	if err != nil {
		t.Fatalf("failed to sign announcement: %v", err)
	}

	if err := VerifyNodeMetadataAnnouncement(announcement, 5*time.Second); err != nil {
		t.Fatalf("verification should succeed: %v", err)
	}

	tampered := announcement
	tampered.Payload.Nickname = "evil-node"
	if err := VerifyNodeMetadataAnnouncement(tampered, 5*time.Second); err == nil {
		t.Fatal("verification should fail for tampered payload")
	}
}
