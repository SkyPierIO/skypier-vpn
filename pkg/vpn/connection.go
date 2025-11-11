package vpn

import (
	"errors"
	"log"
	"sync"

	"github.com/libp2p/go-libp2p/core/network"
	"github.com/libp2p/go-libp2p/core/peer"
	"github.com/songgao/water"
)

var ErrStreamClosed = errors.New("stream is closed")

// ConnectionContext manages the state of a single VPN connection
type ConnectionContext struct {
	PeerID        peer.ID          // ID of the connected peer
	Stream        network.Stream   // libp2p stream for communication with the peer
	Interface     *water.Interface // TUN interface for this connection
	InterfaceName string           // Name of this connection's TUN interface
	LocalIP       string           // Local IP for this TUN interface
	RemoteIP      string           // Remote IP for this TUN interface
	OrigLocalIP   string           // Original local IP (before negotiation)
	OrigRemoteIP  string           // Original remote IP (before negotiation)
	IPNegotiated  bool             // Whether IP negotiation has been completed
	StopChan      chan struct{}    // Channel to signal termination of this connection
	StopOnce      sync.Once        // Ensures the StopChan is closed only once
	IsRunning     bool             // Whether the connection is active
	mutex         sync.RWMutex     // Protects access to Stream and other fields during shutdown
	streamClosed  bool             // Indicates if the stream has been closed
}

// SafeStreamWrite safely writes to the stream, checking if it's closed first
func (conn *ConnectionContext) SafeStreamWrite(data []byte) (int, error) {
	conn.mutex.RLock()
	defer conn.mutex.RUnlock()

	if conn.streamClosed || conn.Stream == nil {
		return 0, ErrStreamClosed
	}

	return conn.Stream.Write(data)
}

// SafeWrite is an alias for SafeStreamWrite for backward compatibility
func (conn *ConnectionContext) SafeWrite(data []byte) (int, error) {
	return conn.SafeStreamWrite(data)
}

// SafeStreamRead safely reads from the stream, checking if it's closed first
func (conn *ConnectionContext) SafeStreamRead(p []byte) (int, error) {
	conn.mutex.RLock()
	defer conn.mutex.RUnlock()

	if conn.streamClosed || conn.Stream == nil {
		return 0, ErrStreamClosed
	}

	return conn.Stream.Read(p)
}

// SafeRead is an alias for SafeStreamRead for backward compatibility
func (conn *ConnectionContext) SafeRead(p []byte) (int, error) {
	return conn.SafeStreamRead(p)
}

// GetStream safely returns the current stream
func (conn *ConnectionContext) GetStream() (network.Stream, bool) {
	conn.mutex.RLock()
	defer conn.mutex.RUnlock()

	return conn.Stream, !conn.streamClosed
}

// CloseStream safely closes the stream
func (conn *ConnectionContext) CloseStream() error {
	conn.mutex.Lock()
	defer conn.mutex.Unlock()

	if conn.streamClosed || conn.Stream == nil {
		return nil // Already closed
	}

	err := conn.Stream.Close()
	conn.streamClosed = true
	log.Printf("Stream closed for peer %s", conn.PeerID)

	// Call UnregisterStream for backward compatibility
	UnregisterStream(conn.Stream)

	return err
}

// Cleanup performs a safe cleanup of all resources associated with a connection
func (conn *ConnectionContext) Cleanup() {
	// Use StopOnce to ensure we only clean up once
	conn.StopOnce.Do(func() {
		log.Printf("Cleaning up connection to peer %s", conn.PeerID)

		// First, mark the connection as not running
		conn.IsRunning = false

		// Close the stream gracefully
		conn.CloseStream()

		// Signal all goroutines to stop
		close(conn.StopChan)

		// Release the subnet back to the pool
		if conn.LocalIP != "" {
			log.Printf("Releasing subnet for connection %s", conn.PeerID)
			ReleaseSubnet(conn.LocalIP)
		}

		// Cleanup routes if needed
		if conn.Interface != nil && conn.InterfaceName != "" {
			log.Printf("Cleaning up routes for interface %s", conn.InterfaceName)
			// Use the cross-platform cleanup function
			if err := CleanupInterfaceRoutes(conn.InterfaceName); err != nil {
				log.Printf("Error during route cleanup for interface %s: %v", conn.InterfaceName, err)
				// Non-fatal error, continue with cleanup
			}
		}

		// Clean up the TUN interface
		if conn.InterfaceName != "" {
			log.Printf("Cleaning up TUN interface %s", conn.InterfaceName)

			// Platform-specific interface cleanup
			if err := CleanupTUNInterface(conn.InterfaceName); err != nil {
				log.Printf("Error cleaning up TUN interface %s: %v", conn.InterfaceName, err)
			} else {
				log.Printf("Successfully cleaned up TUN interface %s", conn.InterfaceName)
			}

			// If interface still exists, close it directly
			if conn.Interface != nil {
				if err := conn.Interface.Close(); err != nil {
					log.Printf("Error closing TUN interface: %v", err)
				} else {
					log.Printf("TUN interface closed successfully")
				}
				conn.Interface = nil
			}
		}
	})
}

// ConnectionManager handles all VPN connections
type ConnectionManager struct {
	connections map[peer.ID]*ConnectionContext
	mutex       sync.RWMutex
}

// NewConnectionManager creates a new connection manager
func NewConnectionManager() *ConnectionManager {
	return &ConnectionManager{
		connections: make(map[peer.ID]*ConnectionContext),
	}
}

// NewConnectionContext creates a new connection context
func NewConnectionContext(peerID peer.ID, stream network.Stream) *ConnectionContext {
	return &ConnectionContext{
		PeerID:       peerID,
		Stream:       stream,
		StopChan:     make(chan struct{}),
		IsRunning:    true,
		streamClosed: false,
		IPNegotiated: false,
	}
}

// AddConnection adds a new connection to the manager
func (cm *ConnectionManager) AddConnection(conn *ConnectionContext) {
	cm.mutex.Lock()
	defer cm.mutex.Unlock()
	cm.connections[conn.PeerID] = conn
}

// GetConnection retrieves a connection by peer ID
func (cm *ConnectionManager) GetConnection(peerID peer.ID) (*ConnectionContext, bool) {
	cm.mutex.RLock()
	defer cm.mutex.RUnlock()
	conn, exists := cm.connections[peerID]
	return conn, exists
}

// RemoveConnection removes a connection from the manager
func (cm *ConnectionManager) RemoveConnection(peerID peer.ID) {
	cm.mutex.Lock()
	defer cm.mutex.Unlock()
	delete(cm.connections, peerID)
}

// StopConnection stops a connection and removes it from the manager
func (cm *ConnectionManager) StopConnection(peerID peer.ID) bool {
	// First acquire read lock to check existence
	cm.mutex.RLock()
	conn, exists := cm.connections[peerID]
	cm.mutex.RUnlock()

	if !exists {
		return false
	}

	// Use the centralized cleanup method
	conn.Cleanup()

	// Now remove from the manager with a write lock
	cm.mutex.Lock()
	delete(cm.connections, peerID)
	cm.mutex.Unlock()

	log.Printf("Connection for peer %s has been stopped and removed from manager", peerID)
	return true
}

// StopAllConnections stops all active connections
func (cm *ConnectionManager) StopAllConnections() {
	cm.mutex.RLock()
	defer cm.mutex.RUnlock()

	for _, conn := range cm.connections {
		if conn.IsRunning {
			// Use the centralized cleanup method
			conn.Cleanup()
		}
	}
}

// GetAllConnections returns all connections
func (cm *ConnectionManager) GetAllConnections() []*ConnectionContext {
	cm.mutex.RLock()
	defer cm.mutex.RUnlock()

	conns := make([]*ConnectionContext, 0, len(cm.connections))
	for _, conn := range cm.connections {
		conns = append(conns, conn)
	}
	return conns
}

// GetActiveConnectionsCount returns the count of active connections
func (cm *ConnectionManager) GetActiveConnectionsCount() int {
	cm.mutex.RLock()
	defer cm.mutex.RUnlock()

	count := 0
	for _, conn := range cm.connections {
		if conn.IsRunning {
			count++
		}
	}
	return count
}
