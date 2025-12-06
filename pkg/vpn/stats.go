package vpn

import (
	"fmt"
	"net/http"
	"sync"
	"sync/atomic"
	"time"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/gin-gonic/gin"
	"github.com/libp2p/go-libp2p/core/peer"
)

var statsLog = utils.NewLogger("STATS")

// ConnectionStats holds real-time statistics for a VPN connection
type ConnectionStats struct {
	// Byte counters (use atomic for thread-safe updates)
	BytesSent     atomic.Int64 `json:"-"`
	BytesReceived atomic.Int64 `json:"-"`

	// Packet counters
	PacketsSent     atomic.Int64 `json:"-"`
	PacketsReceived atomic.Int64 `json:"-"`

	// Timing information
	ConnectedAt    time.Time `json:"connected_at"`
	LastActivityAt time.Time `json:"-"`

	// Bandwidth measurements (bytes per second)
	currentUploadRate   atomic.Int64
	currentDownloadRate atomic.Int64

	// Latency tracking
	latencyMs atomic.Int64

	// For rate calculation
	lastBytesSent     int64
	lastBytesReceived int64
	lastRateCalcTime  time.Time
	rateMutex         sync.Mutex

	// Stop channel for the rate calculator goroutine
	stopChan chan struct{}
	stopOnce sync.Once
}

// ConnectionStatsJSON is the JSON-serializable version of ConnectionStats
type ConnectionStatsJSON struct {
	BytesSent       int64   `json:"bytes_sent"`
	BytesReceived   int64   `json:"bytes_received"`
	PacketsSent     int64   `json:"packets_sent"`
	PacketsReceived int64   `json:"packets_received"`
	ConnectedAt     string  `json:"connected_at"`
	UptimeSeconds   float64 `json:"uptime_seconds"`
	UploadRateBps   int64   `json:"upload_rate_bps"`
	DownloadRateBps int64   `json:"download_rate_bps"`
	LatencyMs       int64   `json:"latency_ms"`
	LastActivityAt  string  `json:"last_activity_at"`
}

// NewConnectionStats creates a new stats tracker
func NewConnectionStats() *ConnectionStats {
	stats := &ConnectionStats{
		ConnectedAt:      time.Now(),
		LastActivityAt:   time.Now(),
		lastRateCalcTime: time.Now(),
		stopChan:         make(chan struct{}),
	}

	// Start the background rate calculator
	go stats.calculateRates()

	return stats
}

// calculateRates runs in the background and calculates bandwidth rates every second
func (s *ConnectionStats) calculateRates() {
	ticker := time.NewTicker(1 * time.Second)
	defer ticker.Stop()

	logCounter := 0
	for {
		select {
		case <-s.stopChan:
			return
		case <-ticker.C:
			s.rateMutex.Lock()

			now := time.Now()
			elapsed := now.Sub(s.lastRateCalcTime).Seconds()
			if elapsed > 0 {
				currentSent := s.BytesSent.Load()
				currentReceived := s.BytesReceived.Load()

				// Calculate rates in bytes per second
				uploadRate := float64(currentSent-s.lastBytesSent) / elapsed
				downloadRate := float64(currentReceived-s.lastBytesReceived) / elapsed

				s.currentUploadRate.Store(int64(uploadRate))
				s.currentDownloadRate.Store(int64(downloadRate))

				// Log rates every 5 seconds if there's activity
				logCounter++
				if logCounter >= 5 && (uploadRate > 0 || downloadRate > 0) {
					statsLog.Debug("📊 Rates: ⬆️ %s ⬇️ %s | Total: ⬆️ %s ⬇️ %s",
						FormatBitrate(int64(uploadRate)), FormatBitrate(int64(downloadRate)),
						FormatBytes(currentSent), FormatBytes(currentReceived))
					logCounter = 0
				}

				s.lastBytesSent = currentSent
				s.lastBytesReceived = currentReceived
				s.lastRateCalcTime = now
			}

			s.rateMutex.Unlock()
		}
	}
}

// Stop stops the rate calculator goroutine
func (s *ConnectionStats) Stop() {
	s.stopOnce.Do(func() {
		close(s.stopChan)
	})
}

// RecordBytesSent adds to the sent bytes counter
func (s *ConnectionStats) RecordBytesSent(n int64) {
	s.BytesSent.Add(n)
	s.PacketsSent.Add(1)
	s.updateLastActivity()
	total := s.BytesSent.Load()
	if total%100000 < n { // Log roughly every 100KB
		statsLog.Debug("📤 Sent %d bytes (total: %s)", n, FormatBytes(total))
	}
}

// RecordBytesReceived adds to the received bytes counter
func (s *ConnectionStats) RecordBytesReceived(n int64) {
	s.BytesReceived.Add(n)
	s.PacketsReceived.Add(1)
	total := s.BytesReceived.Load()
	if total%100000 < n { // Log roughly every 100KB
		statsLog.Debug("📥 Received %d bytes (total: %s)", n, FormatBytes(total))
	}
	s.updateLastActivity()
}

// updateLastActivity updates the last activity timestamp
func (s *ConnectionStats) updateLastActivity() {
	s.rateMutex.Lock()
	s.LastActivityAt = time.Now()
	s.rateMutex.Unlock()
}

// SetLatency sets the current latency in milliseconds
func (s *ConnectionStats) SetLatency(latencyMs int64) {
	s.latencyMs.Store(latencyMs)
}

// GetUploadRate returns the current upload rate in bytes per second
func (s *ConnectionStats) GetUploadRate() int64 {
	return s.currentUploadRate.Load()
}

// GetDownloadRate returns the current download rate in bytes per second
func (s *ConnectionStats) GetDownloadRate() int64 {
	return s.currentDownloadRate.Load()
}

// ToJSON converts stats to a JSON-serializable format
func (s *ConnectionStats) ToJSON() ConnectionStatsJSON {
	s.rateMutex.Lock()
	lastActivity := s.LastActivityAt
	s.rateMutex.Unlock()

	return ConnectionStatsJSON{
		BytesSent:       s.BytesSent.Load(),
		BytesReceived:   s.BytesReceived.Load(),
		PacketsSent:     s.PacketsSent.Load(),
		PacketsReceived: s.PacketsReceived.Load(),
		ConnectedAt:     s.ConnectedAt.Format(time.RFC3339),
		UptimeSeconds:   time.Since(s.ConnectedAt).Seconds(),
		UploadRateBps:   s.currentUploadRate.Load(),
		DownloadRateBps: s.currentDownloadRate.Load(),
		LatencyMs:       s.latencyMs.Load(),
		LastActivityAt:  lastActivity.Format(time.RFC3339),
	}
}

// ConnectionStatsManager manages stats for all connections
type ConnectionStatsManager struct {
	stats map[peer.ID]*ConnectionStats
	mutex sync.RWMutex
}

// Global stats manager
var statsManager = NewConnectionStatsManager()

// NewConnectionStatsManager creates a new stats manager
func NewConnectionStatsManager() *ConnectionStatsManager {
	return &ConnectionStatsManager{
		stats: make(map[peer.ID]*ConnectionStats),
	}
}

// GetOrCreate gets existing stats or creates new ones for a peer
func (m *ConnectionStatsManager) GetOrCreate(peerID peer.ID) *ConnectionStats {
	m.mutex.Lock()
	defer m.mutex.Unlock()

	if stats, exists := m.stats[peerID]; exists {
		return stats
	}

	stats := NewConnectionStats()
	m.stats[peerID] = stats
	statsLog.Debug("Created stats tracker for peer %s", peerID.String())
	return stats
}

// Get returns stats for a peer if they exist
func (m *ConnectionStatsManager) Get(peerID peer.ID) (*ConnectionStats, bool) {
	m.mutex.RLock()
	defer m.mutex.RUnlock()
	stats, exists := m.stats[peerID]
	return stats, exists
}

// ListPeers returns a list of all tracked peer IDs (for debugging)
func (m *ConnectionStatsManager) ListPeers() []string {
	m.mutex.RLock()
	defer m.mutex.RUnlock()
	peers := make([]string, 0, len(m.stats))
	for peerID := range m.stats {
		peers = append(peers, peerID.String()[:20]+"...")
	}
	return peers
}

// Remove removes stats for a peer
func (m *ConnectionStatsManager) Remove(peerID peer.ID) {
	m.mutex.Lock()
	defer m.mutex.Unlock()

	if stats, exists := m.stats[peerID]; exists {
		stats.Stop()
		delete(m.stats, peerID)
		statsLog.Debug("Removed stats tracker for peer %s", peerID.String())
	}
}

// GetAllStats returns stats for all connections
func (m *ConnectionStatsManager) GetAllStats() map[string]ConnectionStatsJSON {
	m.mutex.RLock()
	defer m.mutex.RUnlock()

	result := make(map[string]ConnectionStatsJSON)
	for peerID, stats := range m.stats {
		result[peerID.String()] = stats.ToJSON()
	}
	return result
}

// GetGlobalStats returns the global stats manager
func GetGlobalStats() *ConnectionStatsManager {
	return statsManager
}

// FormatBytes formats bytes to a human-readable string
func FormatBytes(bytes int64) string {
	const unit = 1024
	if bytes < unit {
		return fmt.Sprintf("%d B", bytes)
	}
	div, exp := int64(unit), 0
	for n := bytes / unit; n >= unit; n /= unit {
		div *= unit
		exp++
	}
	return fmt.Sprintf("%.1f %cB", float64(bytes)/float64(div), "KMGTPE"[exp])
}

// FormatBitrate formats bytes per second to a human-readable bitrate string
func FormatBitrate(bytesPerSecond int64) string {
	bitsPerSecond := bytesPerSecond * 8
	const unit = 1000
	if bitsPerSecond < unit {
		return fmt.Sprintf("%d bps", bitsPerSecond)
	}
	div, exp := int64(unit), 0
	for n := bitsPerSecond / unit; n >= unit; n /= unit {
		div *= unit
		exp++
	}
	return fmt.Sprintf("%.1f %cbps", float64(bitsPerSecond)/float64(div), "kMGTPE"[exp])
}

// GetConnectionStats returns a Gin handler for getting stats for a specific peer
// @Summary      Get connection statistics for a peer
// @Description  Get real-time bandwidth and connection statistics for a specific VPN connection
// @Tags         VPN
// @Produce      json
// @Param        peerId   path string  true  "Peer ID"
// @Router       /stats/{peerId} [get]
func GetConnectionStats() gin.HandlerFunc {
	return func(c *gin.Context) {
		peerIdStr := c.Param("peerId")
		peerID, err := peer.Decode(peerIdStr)
		if err != nil {
			statsLog.Error("Invalid peer ID: %s - %v", peerIdStr, err)
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Invalid peer ID",
			})
			return
		}

		stats, exists := statsManager.Get(peerID)
		if !exists {
			statsLog.Warn("No stats found for peer %s - available peers: %v", peerIdStr, statsManager.ListPeers())
			c.JSON(http.StatusNotFound, gin.H{
				"error": "No stats found for this peer",
			})
			return
		}

		json := stats.ToJSON()
		statsLog.Debug("Stats for %s: ⬆️ %s ⬇️ %s", peerIdStr[:20], FormatBitrate(json.UploadRateBps), FormatBitrate(json.DownloadRateBps))
		c.JSON(http.StatusOK, json)
	}
}

// GetAllConnectionStats returns a Gin handler for getting stats for all connections
// @Summary      Get all connection statistics
// @Description  Get real-time bandwidth and connection statistics for all active VPN connections
// @Tags         VPN
// @Produce      json
// @Router       /stats [get]
func GetAllConnectionStats() gin.HandlerFunc {
	return func(c *gin.Context) {
		allStats := statsManager.GetAllStats()
		c.JSON(http.StatusOK, gin.H{
			"connections": allStats,
			"count":       len(allStats),
		})
	}
}
