package vpn

import (
	"context"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"runtime"
	"strings"
	"time"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	pubsub "github.com/libp2p/go-libp2p-pubsub"
	corecrypto "github.com/libp2p/go-libp2p/core/crypto"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/network"
	"github.com/libp2p/go-libp2p/core/peer"
	"github.com/shirou/gopsutil/v4/cpu"
	"github.com/shirou/gopsutil/v4/mem"
)

const (
	defaultNodeMetadataTopicName = "skypier-vpn-nodes-v1"
	defaultAnnounceInterval      = 20 * time.Second
	defaultPruneInterval         = 10 * time.Second
	defaultMeshReconnectInterval = 30 * time.Second
	defaultMeshTargetPeers       = 3
	defaultDialTimeout           = 8 * time.Second
	nodeVersion                  = "v0.0.1"
)

const (
	NodeStatusDev     = "dev"
	NodeStatusPreprod = "preprod"
	NodeStatusProd    = "prod"
	NodeStatusPrivate = "private"
)

const (
	NodeResourceStable  = "stable"
	NodeResourceLaggy   = "laggy"
	NodeResourceLoaded  = "loaded"
	NodeResourceUnknown = "unknown"
)

var (
	nodeMetadataLog   = utils.NewLogger(utils.ComponentDiscovery)
	nodeProcessStart  = time.Now()
	nodeStatusHexByID = map[string]string{
		NodeStatusDev:     "0x01",
		NodeStatusPreprod: "0x02",
		NodeStatusProd:    "0x03",
		NodeStatusPrivate: "0x04",
	}
)

type NodeMetadataPayload struct {
	PeerID         string `json:"peerId"`
	SkypierID      string `json:"skypierId"`
	Status         string `json:"status"`
	StatusHex      string `json:"statusHex"`
	Nickname       string `json:"nickname"`
	Timestamp      int64  `json:"timestamp"`
	UptimeSeconds  int64  `json:"uptimeSeconds"`
	ResourceStatus string `json:"resourceStatus"`
	Version        string `json:"version"`
	OperatingOS    string `json:"os"`
}

type NodeMetadataAnnouncement struct {
	Payload         NodeMetadataPayload `json:"payload"`
	SignerPeerID    string              `json:"signerPeerId"`
	SignerPublicKey string              `json:"signerPublicKey"`
	Signature       string              `json:"signature"`
}

func normalizeNodeStatus(status string) (string, error) {
	normalized := strings.ToLower(strings.TrimSpace(status))
	if normalized == "production" {
		normalized = NodeStatusProd
	}
	if _, exists := nodeStatusHexByID[normalized]; !exists {
		return "", fmt.Errorf("invalid node status: %s", status)
	}
	return normalized, nil
}

func NodeStatusToHex(status string) (string, error) {
	normalized, err := normalizeNodeStatus(status)
	if err != nil {
		return "", err
	}
	return nodeStatusHexByID[normalized], nil
}

func SkypierIDFromPeerID(peerID string) string {
	hash := sha256.Sum256([]byte(peerID))
	return hex.EncodeToString(hash[:])
}

func canonicalPayloadBytes(payload NodeMetadataPayload) []byte {
	canonical := fmt.Sprintf(
		"peerId=%s\nskypierId=%s\nstatus=%s\nstatusHex=%s\nnickname=%s\ntimestamp=%d\nuptimeSeconds=%d\nresourceStatus=%s\nversion=%s\nos=%s\n",
		payload.PeerID,
		payload.SkypierID,
		payload.Status,
		payload.StatusHex,
		payload.Nickname,
		payload.Timestamp,
		payload.UptimeSeconds,
		payload.ResourceStatus,
		payload.Version,
		payload.OperatingOS,
	)
	return []byte(canonical)
}

func isValidResourceStatus(resourceStatus string) bool {
	switch strings.ToLower(strings.TrimSpace(resourceStatus)) {
	case NodeResourceStable, NodeResourceLaggy, NodeResourceLoaded, NodeResourceUnknown:
		return true
	default:
		return false
	}
}

func ValidateNodeMetadataPayload(payload NodeMetadataPayload) error {
	if payload.PeerID == "" {
		return fmt.Errorf("payload peerId is required")
	}
	if _, err := peer.Decode(payload.PeerID); err != nil {
		return fmt.Errorf("payload peerId is invalid: %w", err)
	}
	if payload.Nickname == "" {
		return fmt.Errorf("payload nickname is required")
	}
	if payload.Timestamp <= 0 {
		return fmt.Errorf("payload timestamp must be positive")
	}
	if payload.UptimeSeconds < 0 {
		return fmt.Errorf("payload uptimeSeconds cannot be negative")
	}
	if payload.SkypierID == "" || len(payload.SkypierID) != 64 {
		return fmt.Errorf("payload skypierId must be a 64-char hex string")
	}
	if _, err := hex.DecodeString(payload.SkypierID); err != nil {
		return fmt.Errorf("payload skypierId is not valid hex: %w", err)
	}

	expectedSkypierID := SkypierIDFromPeerID(payload.PeerID)
	if payload.SkypierID != expectedSkypierID {
		return fmt.Errorf("payload skypierId does not match peerId")
	}

	normalizedStatus, err := normalizeNodeStatus(payload.Status)
	if err != nil {
		return err
	}
	expectedHex, _ := NodeStatusToHex(normalizedStatus)
	if strings.ToLower(payload.StatusHex) != expectedHex {
		return fmt.Errorf("payload statusHex %s does not match status %s", payload.StatusHex, normalizedStatus)
	}
	if !isValidResourceStatus(payload.ResourceStatus) {
		return fmt.Errorf("payload resourceStatus is invalid: %s", payload.ResourceStatus)
	}
	if payload.Version == "" {
		return fmt.Errorf("payload version is required")
	}
	if payload.OperatingOS == "" {
		return fmt.Errorf("payload os is required")
	}

	return nil
}

func SignNodeMetadataAnnouncement(node host.Host, payload NodeMetadataPayload) (NodeMetadataAnnouncement, error) {
	if err := ValidateNodeMetadataPayload(payload); err != nil {
		return NodeMetadataAnnouncement{}, err
	}

	privKey := node.Peerstore().PrivKey(node.ID())
	if privKey == nil {
		return NodeMetadataAnnouncement{}, fmt.Errorf("missing private key for node peer id")
	}

	pubKey := node.Peerstore().PubKey(node.ID())
	if pubKey == nil {
		return NodeMetadataAnnouncement{}, fmt.Errorf("missing public key for node peer id")
	}

	signature, err := privKey.Sign(canonicalPayloadBytes(payload))
	if err != nil {
		return NodeMetadataAnnouncement{}, fmt.Errorf("failed to sign node metadata payload: %w", err)
	}

	pubKeyBytes, err := corecrypto.MarshalPublicKey(pubKey)
	if err != nil {
		return NodeMetadataAnnouncement{}, fmt.Errorf("failed to marshal signer public key: %w", err)
	}

	announcement := NodeMetadataAnnouncement{
		Payload:         payload,
		SignerPeerID:    node.ID().String(),
		SignerPublicKey: base64.StdEncoding.EncodeToString(pubKeyBytes),
		Signature:       base64.StdEncoding.EncodeToString(signature),
	}

	return announcement, nil
}

func VerifyNodeMetadataAnnouncement(announcement NodeMetadataAnnouncement, maxFutureSkew time.Duration) error {
	if err := ValidateNodeMetadataPayload(announcement.Payload); err != nil {
		return err
	}
	if announcement.SignerPeerID == "" {
		return fmt.Errorf("announcement signerPeerId is required")
	}
	if announcement.SignerPublicKey == "" {
		return fmt.Errorf("announcement signerPublicKey is required")
	}
	if announcement.Signature == "" {
		return fmt.Errorf("announcement signature is required")
	}

	if announcement.Payload.PeerID != announcement.SignerPeerID {
		return fmt.Errorf("payload peerId and signerPeerId mismatch")
	}

	if maxFutureSkew < 0 {
		maxFutureSkew = 0
	}
	now := time.Now().Unix()
	maxAllowed := now + int64(maxFutureSkew.Seconds())
	if announcement.Payload.Timestamp > maxAllowed {
		return fmt.Errorf("payload timestamp is too far in the future")
	}

	signerID, err := peer.Decode(announcement.SignerPeerID)
	if err != nil {
		return fmt.Errorf("invalid signer peer id: %w", err)
	}

	pubKeyBytes, err := base64.StdEncoding.DecodeString(announcement.SignerPublicKey)
	if err != nil {
		return fmt.Errorf("invalid signer public key encoding: %w", err)
	}
	pubKey, err := corecrypto.UnmarshalPublicKey(pubKeyBytes)
	if err != nil {
		return fmt.Errorf("invalid signer public key: %w", err)
	}

	derivedSignerID, err := peer.IDFromPublicKey(pubKey)
	if err != nil {
		return fmt.Errorf("failed to derive signer peer id from public key: %w", err)
	}
	if derivedSignerID != signerID {
		return fmt.Errorf("signer public key does not match signer peer id")
	}

	sigBytes, err := base64.StdEncoding.DecodeString(announcement.Signature)
	if err != nil {
		return fmt.Errorf("invalid signature encoding: %w", err)
	}

	valid, err := pubKey.Verify(canonicalPayloadBytes(announcement.Payload), sigBytes)
	if err != nil {
		return fmt.Errorf("signature verification failed: %w", err)
	}
	if !valid {
		return fmt.Errorf("signature verification failed")
	}

	return nil
}

func detectNodeResourceStatus() (string, error) {
	cpuUsages, err := cpu.Percent(250*time.Millisecond, false)
	if err != nil {
		return NodeResourceUnknown, err
	}
	virtualMem, err := mem.VirtualMemory()
	if err != nil {
		return NodeResourceUnknown, err
	}

	cpuUsage := 0.0
	if len(cpuUsages) > 0 {
		cpuUsage = cpuUsages[0]
	}
	ramUsage := virtualMem.UsedPercent

	switch {
	case cpuUsage >= 85 || ramUsage >= 85:
		return NodeResourceLoaded, nil
	case cpuUsage >= 65 || ramUsage >= 65:
		return NodeResourceLaggy, nil
	default:
		return NodeResourceStable, nil
	}
}

func buildLocalNodeMetadataPayload(node host.Host, config utils.Config) (NodeMetadataPayload, error) {
	status, err := normalizeNodeStatus(config.NodeEnvironment)
	if err != nil {
		return NodeMetadataPayload{}, err
	}
	statusHex, err := NodeStatusToHex(status)
	if err != nil {
		return NodeMetadataPayload{}, err
	}

	resourceStatus, err := detectNodeResourceStatus()
	if err != nil {
		nodeMetadataLog.Warn("Could not compute host CPU/RAM resource status: %v", err)
		resourceStatus = NodeResourceUnknown
	}

	payload := NodeMetadataPayload{
		PeerID:         node.ID().String(),
		SkypierID:      SkypierIDFromPeerID(node.ID().String()),
		Status:         status,
		StatusHex:      statusHex,
		Nickname:       config.Nickname,
		Timestamp:      time.Now().Unix(),
		UptimeSeconds:  int64(time.Since(nodeProcessStart).Seconds()),
		ResourceStatus: resourceStatus,
		Version:        nodeVersion,
		OperatingOS:    runtime.GOOS,
	}

	return payload, ValidateNodeMetadataPayload(payload)
}

func connectToMetadataSeed(ctx context.Context, node host.Host, kadDHT *dht.IpfsDHT, seedPeer string) (peer.ID, error) {
	seedPeer = strings.TrimSpace(seedPeer)
	if seedPeer == "" {
		return "", fmt.Errorf("empty seed peer value")
	}

	if strings.HasPrefix(seedPeer, "/") {
		addrInfo, err := peer.AddrInfoFromString(seedPeer)
		if err != nil {
			return "", fmt.Errorf("invalid seed peer multiaddr: %w", err)
		}

		if addrInfo.ID == node.ID() {
			return addrInfo.ID, nil
		}

		if node.Network().Connectedness(addrInfo.ID) == network.Connected {
			return addrInfo.ID, nil
		}

		dialCtx, cancel := context.WithTimeout(ctx, defaultDialTimeout)
		defer cancel()

		if err := node.Connect(dialCtx, *addrInfo); err != nil {
			return addrInfo.ID, err
		}

		return addrInfo.ID, nil
	}

	seedPeerID, err := peer.Decode(seedPeer)
	if err != nil {
		return "", fmt.Errorf("invalid seed peer id: %w", err)
	}
	if seedPeerID == node.ID() {
		return seedPeerID, nil
	}
	if node.Network().Connectedness(seedPeerID) == network.Connected {
		return seedPeerID, nil
	}
	if kadDHT == nil {
		return seedPeerID, fmt.Errorf("seed peer id requires DHT lookup, but DHT is not available")
	}

	dialCtx, cancel := context.WithTimeout(ctx, defaultDialTimeout)
	defer cancel()

	addrInfo, err := kadDHT.FindPeer(dialCtx, seedPeerID)
	if err != nil {
		return seedPeerID, fmt.Errorf("failed to lookup seed peer in DHT: %w", err)
	}
	if err := node.Connect(dialCtx, addrInfo); err != nil {
		return seedPeerID, err
	}

	return seedPeerID, nil
}

func startNodeMetadataMeshMaintainer(ctx context.Context, node host.Host, kadDHT *dht.IpfsDHT, topic *pubsub.Topic, topicName string, seedPeers []string, targetPeers int, reconnectInterval time.Duration) {
	if len(seedPeers) == 0 {
		nodeMetadataLog.Warn("Node metadata subscriber has no seed peers configured; waiting for existing mesh peers on topic %s", topicName)
		return
	}

	if targetPeers <= 0 {
		targetPeers = defaultMeshTargetPeers
	}
	if reconnectInterval <= 0 {
		reconnectInterval = defaultMeshReconnectInterval
	}

	nodeMetadataLog.Info(
		"Node metadata mesh maintainer enabled on topic %s (targetPeers=%d seedPeers=%d interval=%s)",
		topicName,
		targetPeers,
		len(seedPeers),
		reconnectInterval,
	)

	go func() {
		ticker := time.NewTicker(reconnectInterval)
		defer ticker.Stop()

		seedCursor := 0
		ensureMesh := func() {
			topicPeers := topic.ListPeers()
			if len(topicPeers) >= targetPeers {
				return
			}

			attempts := len(seedPeers)
			for attempts > 0 {
				seed := seedPeers[seedCursor%len(seedPeers)]
				seedCursor++
				attempts--

				connectedPeerID, err := connectToMetadataSeed(ctx, node, kadDHT, seed)
				if err != nil {
					nodeMetadataLog.Warn("Node metadata mesh dial failed to seed %s: %v", seed, err)
					continue
				}

				if connectedPeerID == node.ID() {
					continue
				}

				nodeMetadataLog.Info("Node metadata mesh connected to seed %s for topic %s", connectedPeerID, topicName)
				break
			}
		}

		ensureMesh()

		for {
			select {
			case <-ctx.Done():
				return
			case <-ticker.C:
				ensureMesh()
			}
		}
	}()
}

func StartNodeMetadataAnnouncer(ctx context.Context, node host.Host, kadDHT *dht.IpfsDHT) error {
	config, err := utils.LoadConfiguration("/etc/skypier/config.json")
	if err != nil {
		nodeMetadataLog.Warn("Could not fully load config, continuing with defaults: %v", err)
	}

	if !config.NodePubSubEnabled {
		nodeMetadataLog.Info("Node metadata pubsub announcer disabled by config")
		return nil
	}

	topicName := strings.TrimSpace(config.NodeTopicName)
	if topicName == "" {
		topicName = defaultNodeMetadataTopicName
	}

	interval := time.Duration(config.NodeAnnouncementInterval) * time.Second
	if interval <= 0 {
		interval = defaultAnnounceInterval
	}

	ps, err := pubsub.NewGossipSub(ctx, node)
	if err != nil {
		return fmt.Errorf("failed to create gossipsub instance: %w", err)
	}

	topic, err := ps.Join(topicName)
	if err != nil {
		return fmt.Errorf("failed to join topic %s: %w", topicName, err)
	}

	// Subscribe and drain to ensure announcer-only nodes still participate in
	// gossipsub mesh relaying for this topic.
	sub, err := topic.Subscribe()
	if err != nil {
		topic.Close()
		return fmt.Errorf("failed to subscribe to topic %s for announcer relay participation: %w", topicName, err)
	}

	startNodeMetadataMeshMaintainer(
		ctx,
		node,
		kadDHT,
		topic,
		topicName,
		config.NodePubSubSeedPeers,
		config.NodePubSubMeshTargetPeers,
		time.Duration(config.NodePubSubReconnectInterval)*time.Second,
	)

	publishOnce := func() {
		latestConfig, cfgErr := utils.LoadConfiguration("/etc/skypier/config.json")
		if cfgErr != nil {
			nodeMetadataLog.Warn("Could not reload config, using last-known config for publish tick: %v", cfgErr)
			latestConfig = config
		}

		payload, buildErr := buildLocalNodeMetadataPayload(node, latestConfig)
		if buildErr != nil {
			nodeMetadataLog.Warn("Skipping metadata publish due to invalid payload: %v", buildErr)
			return
		}

		announcement, signErr := SignNodeMetadataAnnouncement(node, payload)
		if signErr != nil {
			nodeMetadataLog.Warn("Skipping metadata publish due to signing failure: %v", signErr)
			return
		}

		encoded, marshalErr := json.Marshal(announcement)
		if marshalErr != nil {
			nodeMetadataLog.Warn("Skipping metadata publish due to marshal failure: %v", marshalErr)
			return
		}

		if publishErr := topic.Publish(ctx, encoded); publishErr != nil {
			nodeMetadataLog.Warn("Failed to publish node metadata announcement: %v", publishErr)
			return
		}

		nodeMetadataLog.Debug("Published node metadata to topic %s (peer=%s, meshPeers=%d)", topicName, payload.PeerID, len(topic.ListPeers()))
	}

	nodeMetadataLog.Info("Node metadata announcer started on topic %s with interval %s", topicName, interval)
	publishOnce()

	go func() {
		defer sub.Cancel()

		for {
			msg, err := sub.Next(ctx)
			if err != nil {
				if ctx.Err() != nil {
					return
				}
				nodeMetadataLog.Warn("Node metadata announcer relay subscriber read error: %v", err)
				continue
			}

			if msg == nil || msg.ReceivedFrom == node.ID() {
				continue
			}

			nodeMetadataLog.Debug("Node metadata announcer relay observed message from %s on topic %s", msg.ReceivedFrom, topicName)
		}
	}()

	go func() {
		ticker := time.NewTicker(interval)
		defer ticker.Stop()
		defer sub.Cancel()
		defer topic.Close()

		for {
			select {
			case <-ctx.Done():
				nodeMetadataLog.Info("Node metadata announcer stopped")
				return
			case <-ticker.C:
				publishOnce()
			}
		}
	}()

	return nil
}

func StartNodeMetadataSubscriber(ctx context.Context, node host.Host, kadDHT *dht.IpfsDHT, registry *NodeRegistry) error {
	if registry == nil {
		return fmt.Errorf("node metadata registry is required")
	}

	config, err := utils.LoadConfiguration("/etc/skypier/config.json")
	if err != nil {
		nodeMetadataLog.Warn("Could not fully load config, continuing with defaults: %v", err)
	}

	if !config.NodePubSubEnabled {
		nodeMetadataLog.Info("Node metadata pubsub subscriber disabled by config")
		return nil
	}

	topicName := strings.TrimSpace(config.NodeTopicName)
	if topicName == "" {
		topicName = defaultNodeMetadataTopicName
	}

	ps, err := pubsub.NewGossipSub(ctx, node)
	if err != nil {
		return fmt.Errorf("failed to create gossipsub instance for subscriber: %w", err)
	}

	topic, err := ps.Join(topicName)
	if err != nil {
		return fmt.Errorf("failed to join topic %s: %w", topicName, err)
	}

	sub, err := topic.Subscribe()
	if err != nil {
		topic.Close()
		return fmt.Errorf("failed to subscribe to topic %s: %w", topicName, err)
	}

	registry.StartPruner(ctx, defaultPruneInterval)
	nodeMetadataLog.Info("Node metadata subscriber started on topic %s", topicName)
	startNodeMetadataMeshMaintainer(
		ctx,
		node,
		kadDHT,
		topic,
		topicName,
		config.NodePubSubSeedPeers,
		config.NodePubSubMeshTargetPeers,
		time.Duration(config.NodePubSubReconnectInterval)*time.Second,
	)

	go func() {
		defer sub.Cancel()
		defer topic.Close()

		for {
			msg, err := sub.Next(ctx)
			if err != nil {
				if ctx.Err() != nil {
					nodeMetadataLog.Info("Node metadata subscriber stopped")
					return
				}
				nodeMetadataLog.Warn("Node metadata subscriber read error: %v", err)
				continue
			}

			if msg == nil || len(msg.Data) == 0 {
				continue
			}

			if msg.ReceivedFrom == node.ID() {
				continue
			}

			var announcement NodeMetadataAnnouncement
			if err := json.Unmarshal(msg.Data, &announcement); err != nil {
				nodeMetadataLog.Warn("Discarding invalid node metadata message: %v", err)
				continue
			}

			if err := VerifyNodeMetadataAnnouncement(announcement, 30*time.Second); err != nil {
				nodeMetadataLog.Warn("Discarding node metadata message with invalid signature/payload: %v", err)
				continue
			}

			registry.UpsertFromAnnouncement(announcement, topicName, time.Now().UTC())
			nodeMetadataLog.Info("Accepted node metadata from peer %s (receivedFrom=%s topic=%s)", announcement.Payload.PeerID, msg.ReceivedFrom, topicName)
		}
	}()

	return nil
}
