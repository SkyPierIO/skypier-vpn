package vpn

import (
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

func GetNodeRegistryEntries(registry *NodeRegistry) gin.HandlerFunc {
	return func(c *gin.Context) {
		if registry == nil {
			c.JSON(http.StatusServiceUnavailable, gin.H{"error": "node registry is not initialized"})
			return
		}

		includeStale := parseTruthy(c.Query("includeStale"))
		nodes := registry.List(time.Now().UTC(), includeStale)

		c.JSON(http.StatusOK, gin.H{
			"nodes":        nodes,
			"count":        len(nodes),
			"ttlSeconds":   int(registry.TTL().Seconds()),
			"includeStale": includeStale,
		})
	}
}

func GetNodeRegistryEntry(registry *NodeRegistry) gin.HandlerFunc {
	return func(c *gin.Context) {
		if registry == nil {
			c.JSON(http.StatusServiceUnavailable, gin.H{"error": "node registry is not initialized"})
			return
		}

		peerID := c.Param("peerId")
		entry, exists := registry.GetEntry(peerID, time.Now().UTC())
		if !exists {
			c.JSON(http.StatusNotFound, gin.H{"error": "peer metadata not found"})
			return
		}

		includeStale := parseTruthy(c.Query("includeStale"))
		if entry.Stale && !includeStale {
			c.JSON(http.StatusNotFound, gin.H{
				"error":      "peer metadata is stale",
				"peerId":     peerID,
				"lastSeenAt": entry.LastSeenAt,
			})
			return
		}

		c.JSON(http.StatusOK, entry)
	}
}

func parseTruthy(v string) bool {
	v = strings.ToLower(strings.TrimSpace(v))
	return v == "1" || v == "true" || v == "yes" || v == "on"
}
