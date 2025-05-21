package vpn

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net"
	"time"

	"github.com/libp2p/go-libp2p/core/network"
	"github.com/libp2p/go-libp2p/core/peer"
)

// IPNegotiationMessage is the structure used to exchange IP information
// between client and server
type IPNegotiationMessage struct {
	LocalIP  string `json:"local_ip"`  // IP address assigned to the local side
	RemoteIP string `json:"remote_ip"` // IP address assigned to the remote side
	Subnet   string `json:"subnet"`    // Subnet mask (e.g., "24" for /24)
	Role     string `json:"role"`      // "server" or "client"
}

// NegotiateIPs handles IP negotiation between client and server
// Returns the negotiated local and remote IPs
func NegotiateIPs(conn *ConnectionContext, role string) (string, string, error) {
	// Default timeout of 10 seconds for the negotiation
	timeoutChan := time.After(10 * time.Second)

	// Use the pre-computed IPs from the connection context
	var localIP, remoteIP string

	// Server should take remoteIP as its local address to avoid conflicts
	if role == "server" {
		// For server, swap the default assignments
		localIP = conn.RemoteIP // Server takes what would be client's remote
		remoteIP = conn.LocalIP // Server considers client's local as its remote
		log.Printf("Server taking remote address as local to avoid conflicts")
	} else {
		// For client, use the default assignments
		localIP = conn.LocalIP
		remoteIP = conn.RemoteIP
	}

	// Save original IPs
	conn.OrigLocalIP = localIP
	conn.OrigRemoteIP = remoteIP

	log.Printf("Starting IP negotiation as %s: local=%s, remote=%s", role, localIP, remoteIP)

	// Create the negotiation message
	message := IPNegotiationMessage{
		LocalIP:  localIP,
		RemoteIP: remoteIP,
		Subnet:   "24",
		Role:     role,
	}

	// Serialize message to JSON
	msgData, err := json.Marshal(message)
	if err != nil {
		return "", "", err
	}

	// Get the stream
	stream, ok := conn.GetStream()
	if !ok {
		return "", "", ErrStreamClosed
	}

	// Send the message
	log.Printf("Sending IP negotiation message: local=%s, remote=%s", localIP, remoteIP)
	_, err = stream.Write(append(msgData, '\n'))
	if err != nil {
		log.Printf("Error sending IP negotiation message: %v", err)
		conn.CloseStream()
		return "", "", err
	}

	log.Printf("IP negotiation message sent successfully")

	// For the server, we're done - just use our already assigned IPs
	if role == "server" {
		log.Printf("Server-side negotiation complete, using assigned IPs")
		conn.IPNegotiated = true
		return localIP, remoteIP, nil
	}

	// For clients, we need to read the response from the server
	// to get the correct IPs to use
	responseChan := make(chan IPNegotiationMessage, 1)
	errChan := make(chan error, 1)

	// Read the response in a separate goroutine
	go func() {
		log.Printf("Waiting for IP negotiation response from server...")

		// Use our improved JSON message reader
		cleanData, err := ReadJSONMessage(stream, 1024)
		if err != nil {
			log.Printf("Error reading IP negotiation response: %v", err)
			errChan <- err
			return
		}

		log.Printf("Received valid JSON data: %s", string(cleanData))

		var response IPNegotiationMessage
		err = json.Unmarshal(cleanData, &response)
		if err != nil {
			log.Printf("Error unmarshaling IP negotiation response: %v", err)
			errChan <- err
			return
		}

		log.Printf("Successfully parsed IP negotiation response")
		responseChan <- response
	}()

	// Wait for response or timeout
	select {
	case response := <-responseChan:
		log.Printf("Client received IP negotiation response: local=%s, remote=%s, subnet=%s",
			response.RemoteIP, response.LocalIP, response.Subnet)

		// The client needs to swap the IPs because what's "local" for the server is "remote" for the client
		negotiatedLocalIP := response.RemoteIP
		negotiatedRemoteIP := response.LocalIP

		// Validate the IPs before using them
		validatedLocal, validatedRemote, err := ValidateAndUseNegotiatedIPs(conn, negotiatedLocalIP, negotiatedRemoteIP)
		if err != nil {
			log.Printf("Invalid negotiated IPs: %v, using original IPs", err)
			return conn.OrigLocalIP, conn.OrigRemoteIP, nil
		}

		// If the negotiation changed our IPs, we need to update our TUN interface
		if conn.OrigLocalIP != validatedLocal || conn.OrigRemoteIP != validatedRemote {
			log.Printf("Updating TUN interface with negotiated IPs: local=%s, remote=%s",
				validatedLocal, validatedRemote)

			err := UpdateInterfaceIP(conn.InterfaceName, validatedLocal, validatedRemote)
			if err != nil {
				log.Printf("Failed to update TUN interface with negotiated IPs: %v", err)
				return conn.OrigLocalIP, conn.OrigRemoteIP, err
			}
		}

		return validatedLocal, validatedRemote, nil

	case err := <-errChan:
		log.Printf("Error during IP negotiation: %v", err)
		return "", "", err

	case <-timeoutChan:
		log.Printf("Timeout waiting for IP negotiation response")
		return "", "", ErrNegotiationTimeout
	}
}

// RetryNegotiateIPs attempts to negotiate IPs with retries
// Returns the negotiated local and remote IPs
func RetryNegotiateIPs(conn *ConnectionContext, role string, maxRetries int) (string, string, error) {
	var lastErr error

	for attempt := 0; attempt < maxRetries; attempt++ {
		if attempt > 0 {
			log.Printf("IP negotiation retry attempt %d of %d", attempt+1, maxRetries)
			// Wait a short time between retries with exponential backoff
			backoffTime := time.Duration(500*(attempt+1)) * time.Millisecond
			time.Sleep(backoffTime)
		}

		localIP, remoteIP, err := NegotiateIPs(conn, role)
		if err == nil {
			// Successful negotiation
			return localIP, remoteIP, nil
		}

		lastErr = err
		log.Printf("IP negotiation attempt %d failed: %v", attempt+1, err)

		// If the connection is already terminated, don't retry
		if errors.Is(err, ErrStreamClosed) {
			log.Printf("Stream closed, aborting IP negotiation")
			return "", "", err
		}
	}

	log.Printf("IP negotiation failed after %d attempts: %v", maxRetries, lastErr)
	return "", "", fmt.Errorf("failed after %d attempts: %w", maxRetries, lastErr)
}

// HandleIPNegotiation processes an incoming IP negotiation message
func HandleIPNegotiation(stream network.Stream, peerID peer.ID) (IPNegotiationMessage, error) {
	log.Printf("Handling IP negotiation from peer %s", peerID.String())

	// Use our improved JSON reader to handle problematic data
	cleanData, err := ReadJSONMessage(stream, 1024)
	if err != nil {
		log.Printf("Error reading IP negotiation message: %v", err)
		return IPNegotiationMessage{}, err
	}

	log.Printf("Read valid JSON from negotiation message: %s", string(cleanData))

	// Log the cleaned data for debugging
	log.Printf("Data ready for unmarshaling: %s", string(cleanData))

	var message IPNegotiationMessage
	err = json.Unmarshal(cleanData, &message)
	if err != nil {
		log.Printf("Error unmarshaling IP negotiation message: %v", err)
		return IPNegotiationMessage{}, err
	}

	log.Printf("Received IP negotiation from peer %s: local=%s, remote=%s",
		peerID.String(), message.LocalIP, message.RemoteIP)

	// If this is a server handling a client message, we need to swap the IPs
	// in our response to ensure proper negotiation
	if message.Role == "client" {
		// Create response with swapped IPs
		response := IPNegotiationMessage{
			// What the client sees as remote should be our local
			LocalIP: message.RemoteIP,
			// What the client sees as local should be our remote
			RemoteIP: message.LocalIP,
			Subnet:   message.Subnet,
			Role:     "server", // Mark our response as coming from the server
		}
		log.Printf("Server preparing response with swapped IPs: local=%s, remote=%s",
			response.LocalIP, response.RemoteIP)

		// Use our improved JSON writer to safely send the response
		bytesWritten, err := WriteJSONMessage(stream, response)
		if err != nil {
			log.Printf("Error sending IP negotiation response: %v", err)
		} else {
			log.Printf("Sent %d bytes in IP negotiation response to peer %s", bytesWritten, peerID.String())
		}
		// Update the message to return the server's view
		message = response
	} else {
		// If not client, just echo back the same message
		log.Printf("Preparing to send response with the same message")
		bytesWritten, err := WriteJSONMessage(stream, message)
		if err != nil {
			log.Printf("Error sending IP negotiation response: %v", err)
		} else {
			log.Printf("Sent %d bytes in IP negotiation response to peer %s", bytesWritten, peerID.String())
		}
	}

	return message, err
}

// ValidateAndUseNegotiatedIPs ensures the negotiated IPs are valid
// and updates the connection context accordingly
func ValidateAndUseNegotiatedIPs(conn *ConnectionContext, negotiatedLocalIP, negotiatedRemoteIP string) (string, string, error) {
	// Simple validation - ensure IPs are not empty
	if negotiatedLocalIP == "" || negotiatedRemoteIP == "" {
		return conn.OrigLocalIP, conn.OrigRemoteIP, fmt.Errorf("invalid negotiated IPs: local=%s, remote=%s",
			negotiatedLocalIP, negotiatedRemoteIP)
	}

	// Parse IPs to ensure they're valid
	localIP := net.ParseIP(negotiatedLocalIP)
	remoteIP := net.ParseIP(negotiatedRemoteIP)

	if localIP == nil || remoteIP == nil {
		return conn.OrigLocalIP, conn.OrigRemoteIP, fmt.Errorf("invalid IP addresses: local=%s, remote=%s",
			negotiatedLocalIP, negotiatedRemoteIP)
	}

	// Check if the IPs are in a valid subnet (should be private IPs)
	if !isPrivateIP(localIP) || !isPrivateIP(remoteIP) {
		log.Printf("Warning: Using non-private IPs: local=%s, remote=%s", localIP, remoteIP)
	}

	// Set the negotiated IPs in the connection context
	conn.LocalIP = negotiatedLocalIP
	conn.RemoteIP = negotiatedRemoteIP
	conn.IPNegotiated = true

	return negotiatedLocalIP, negotiatedRemoteIP, nil
}

// isPrivateIP checks if an IP is in private range
func isPrivateIP(ip net.IP) bool {
	// Check if the IP is in any of the private ranges
	privateBlocks := []string{
		"10.0.0.0/8",     // RFC1918
		"172.16.0.0/12",  // RFC1918
		"192.168.0.0/16", // RFC1918
		"169.254.0.0/16", // RFC3927 (link-local)
		"fd00::/8",       // RFC4193 (IPv6 ULA)
	}

	for _, block := range privateBlocks {
		_, cidr, err := net.ParseCIDR(block)
		if err != nil {
			continue
		}
		if cidr.Contains(ip) {
			return true
		}
	}
	return false
}

// sanitizeJsonData cleans a byte slice to ensure it can be safely unmarshaled as JSON
func sanitizeJsonData(data []byte) []byte {
	// First, find the first non-null byte
	start := 0
	for start < len(data) && data[start] == 0 {
		start++
	}

	// If the entire buffer is null bytes, return an empty JSON object
	if start == len(data) {
		return []byte("{}")
	}

	// Find the last non-null, non-whitespace byte
	end := len(data) - 1
	for end > start && (data[end] == 0 || data[end] <= 32) { // ASCII 32 is space, anything lower is control char
		end--
	}

	// Extract the meaningful part of the data
	cleanData := data[start : end+1]

	// Check if the data starts with '{' - if not, it's likely not valid JSON
	if len(cleanData) == 0 || cleanData[0] != '{' {
		log.Printf("Warning: Data doesn't appear to be valid JSON: %s", string(cleanData))
		// Try to find a JSON object in the buffer - look for '{' and '}'
		objStart := -1
		objEnd := -1

		for i := 0; i < len(data); i++ {
			if data[i] == '{' {
				objStart = i
				break
			}
		}

		if objStart >= 0 {
			for i := len(data) - 1; i > objStart; i-- {
				if data[i] == '}' {
					objEnd = i
					break
				}
			}
		}

		if objStart >= 0 && objEnd > objStart {
			cleanData = data[objStart : objEnd+1]
			log.Printf("Found potential JSON object: %s", string(cleanData))
		} else {
			log.Printf("Could not find valid JSON object in the response")
			return []byte("{}")
		}
	}

	// Replace any null bytes or other control characters inside the object with spaces
	for i := 0; i < len(cleanData); i++ {
		if cleanData[i] == 0 || (cleanData[i] < 32 && cleanData[i] != 9 && cleanData[i] != 10 && cleanData[i] != 13) {
			cleanData[i] = 32 // Replace with space
		}
	}

	return cleanData
}

// Define a timeout error
var ErrNegotiationTimeout = NewConnectionError("IP negotiation timeout")

// ConnectionError represents a connection-specific error
type ConnectionError struct {
	msg string
}

// NewConnectionError creates a new connection error
func NewConnectionError(msg string) *ConnectionError {
	return &ConnectionError{msg: msg}
}

// Error implements the error interface
func (e *ConnectionError) Error() string {
	return e.msg
}
