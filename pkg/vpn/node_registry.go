package vpn

import (
	"context"
	"sort"
	"sync"
	"time"
)

const defaultNodeRegistryTTL = 120 * time.Second

type NodeRegistryRecord struct {
	Metadata             NodeMetadataPayload
	FirstSeenAt          time.Time
	LastSeenAt           time.Time
	LastValidSignatureAt time.Time
	SourceTopic          string
}

type NodeRegistryEntry struct {
	PeerID               string              `json:"peerId"`
	Metadata             NodeMetadataPayload `json:"metadata"`
	FirstSeenAt          string              `json:"firstSeenAt"`
	LastSeenAt           string              `json:"lastSeenAt"`
	LastValidSignatureAt string              `json:"lastValidSignatureAt"`
	SourceTopic          string              `json:"sourceTopic"`
	Stale                bool                `json:"stale"`
	AgeSeconds           int64               `json:"ageSeconds"`
}

type NodeRegistry struct {
	mu      sync.RWMutex
	ttl     time.Duration
	records map[string]NodeRegistryRecord
}

func NewNodeRegistry(ttl time.Duration) *NodeRegistry {
	if ttl <= 0 {
		ttl = defaultNodeRegistryTTL
	}

	return &NodeRegistry{
		ttl:     ttl,
		records: make(map[string]NodeRegistryRecord),
	}
}

func (r *NodeRegistry) TTL() time.Duration {
	r.mu.RLock()
	defer r.mu.RUnlock()
	return r.ttl
}

func (r *NodeRegistry) UpsertFromAnnouncement(announcement NodeMetadataAnnouncement, sourceTopic string, receivedAt time.Time) {
	if receivedAt.IsZero() {
		receivedAt = time.Now().UTC()
	} else {
		receivedAt = receivedAt.UTC()
	}

	peerID := announcement.Payload.PeerID

	r.mu.Lock()
	defer r.mu.Unlock()

	record, exists := r.records[peerID]
	if !exists {
		record.FirstSeenAt = receivedAt
	}

	record.Metadata = announcement.Payload
	// Freshness should be based on when we observed a valid announcement locally,
	// not on the remote wall clock embedded in the payload.
	record.LastSeenAt = receivedAt
	record.LastValidSignatureAt = receivedAt
	record.SourceTopic = sourceTopic

	r.records[peerID] = record
}

func (r *NodeRegistry) Freshness(peerID string, now time.Time) (bool, bool, NodeRegistryRecord) {
	if now.IsZero() {
		now = time.Now().UTC()
	} else {
		now = now.UTC()
	}

	r.mu.RLock()
	record, exists := r.records[peerID]
	ttl := r.ttl
	r.mu.RUnlock()

	if !exists {
		return false, false, NodeRegistryRecord{}
	}

	ref := record.LastSeenAt
	if ref.IsZero() {
		ref = record.LastValidSignatureAt
	}
	if ref.IsZero() {
		ref = record.FirstSeenAt
	}

	age := now.Sub(ref)
	if age < 0 {
		age = 0
	}

	return true, age <= ttl, record
}

func (r *NodeRegistry) GetEntry(peerID string, now time.Time) (NodeRegistryEntry, bool) {
	if now.IsZero() {
		now = time.Now().UTC()
	} else {
		now = now.UTC()
	}

	r.mu.RLock()
	record, exists := r.records[peerID]
	ttl := r.ttl
	r.mu.RUnlock()
	if !exists {
		return NodeRegistryEntry{}, false
	}

	return recordToEntry(peerID, record, now, ttl), true
}

func (r *NodeRegistry) List(now time.Time, includeStale bool) []NodeRegistryEntry {
	if now.IsZero() {
		now = time.Now().UTC()
	} else {
		now = now.UTC()
	}

	r.mu.RLock()
	ttl := r.ttl
	entries := make([]NodeRegistryEntry, 0, len(r.records))
	for peerID, record := range r.records {
		entry := recordToEntry(peerID, record, now, ttl)
		if includeStale || !entry.Stale {
			entries = append(entries, entry)
		}
	}
	r.mu.RUnlock()

	sort.Slice(entries, func(i, j int) bool {
		return entries[i].LastSeenAt > entries[j].LastSeenAt
	})

	return entries
}

func (r *NodeRegistry) PruneStale(now time.Time) int {
	if now.IsZero() {
		now = time.Now().UTC()
	} else {
		now = now.UTC()
	}

	r.mu.Lock()
	defer r.mu.Unlock()

	removed := 0
	for peerID, record := range r.records {
		ref := record.LastSeenAt
		if ref.IsZero() {
			ref = record.LastValidSignatureAt
		}
		if ref.IsZero() {
			ref = record.FirstSeenAt
		}

		age := now.Sub(ref)
		if age > r.ttl {
			delete(r.records, peerID)
			removed++
		}
	}

	return removed
}

func (r *NodeRegistry) StartPruner(ctx context.Context, interval time.Duration) {
	if interval <= 0 {
		interval = 10 * time.Second
	}

	go func() {
		ticker := time.NewTicker(interval)
		defer ticker.Stop()

		for {
			select {
			case <-ctx.Done():
				return
			case <-ticker.C:
				removed := r.PruneStale(time.Now().UTC())
				if removed > 0 {
					nodeMetadataLog.Info("Pruned %d stale node metadata records from registry", removed)
				}
			}
		}
	}()
}

func recordToEntry(peerID string, record NodeRegistryRecord, now time.Time, ttl time.Duration) NodeRegistryEntry {
	ref := record.LastSeenAt
	if ref.IsZero() {
		ref = record.LastValidSignatureAt
	}
	if ref.IsZero() {
		ref = record.FirstSeenAt
	}

	age := now.Sub(ref)
	if age < 0 {
		age = 0
	}

	return NodeRegistryEntry{
		PeerID:               peerID,
		Metadata:             record.Metadata,
		FirstSeenAt:          safeFormatTime(record.FirstSeenAt),
		LastSeenAt:           safeFormatTime(record.LastSeenAt),
		LastValidSignatureAt: safeFormatTime(record.LastValidSignatureAt),
		SourceTopic:          record.SourceTopic,
		Stale:                age > ttl,
		AgeSeconds:           int64(age.Seconds()),
	}
}

func safeFormatTime(t time.Time) string {
	if t.IsZero() {
		return ""
	}
	return t.UTC().Format(time.RFC3339)
}
