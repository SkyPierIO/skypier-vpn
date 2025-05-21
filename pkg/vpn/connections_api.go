package vpn

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

// ConnectionDetails represents the information about a VPN connection
// that will be returned in the API
type ConnectionDetails struct {
	PeerID        string    `json:"peerId"`        // ID of the connected peer
	LocalIP       string    `json:"localIp"`       // Local IP for this TUN interface
	RemoteIP      string    `json:"remoteIp"`      // Remote IP for this TUN interface
	OrigLocalIP   string    `json:"origLocalIp"`   // Original local IP (before negotiation)
	OrigRemoteIP  string    `json:"origRemoteIp"`  // Original remote IP (before negotiation)
	InterfaceName string    `json:"interfaceName"` // Name of the TUN interface
	IsRunning     bool      `json:"isRunning"`     // Whether the connection is active
	IPNegotiated  bool      `json:"ipNegotiated"`  // Whether IP negotiation has been completed
	StreamActive  bool      `json:"streamActive"`  // Whether the stream is active (not closed)
	ConnectedAt   time.Time `json:"connectedAt"`   // Time when the connection was established
}

// GetConnectionsTable godoc
// @Summary      Get all VPN connections
// @Description  Returns a table of all VPN connections with details including peer IDs, IP addresses and status
// @Tags         VPN
// @Produce      json
// @Success      200  {array}  ConnectionDetails
// @Router       /connections [get]
func GetConnectionsTable(c *gin.Context) {
	// Get all connections from the connection manager
	connections := connectionManager.GetAllConnections()

	// Create a response array
	response := make([]ConnectionDetails, 0, len(connections))

	// Populate the response with details from each connection
	for _, conn := range connections {
		// Check if the stream is still active
		_, streamActive := conn.GetStream()

		// Create a connection details object
		details := ConnectionDetails{
			PeerID:        conn.PeerID.String(),
			LocalIP:       conn.LocalIP,
			RemoteIP:      conn.RemoteIP,
			OrigLocalIP:   conn.OrigLocalIP,
			OrigRemoteIP:  conn.OrigRemoteIP,
			InterfaceName: conn.InterfaceName,
			IsRunning:     conn.IsRunning,
			IPNegotiated:  conn.IPNegotiated,
			StreamActive:  streamActive,
			// We don't have a timestamp for when the connection was established,
			// so we'll use the current time as a placeholder
			ConnectedAt: time.Now(),
		}

		// Add the details to the response
		response = append(response, details)
	}

	// Return the response as JSON
	c.JSON(http.StatusOK, gin.H{
		"connections": response,
		"count":       len(response),
	})
}
