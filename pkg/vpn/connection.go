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

// SafeStreamRead safely reads from the stream, checking if it's closed first
func (conn *ConnectionContext) SafeStreamRead(p []byte) (int, error) {
	conn.mutex.RLock()
	defer conn.mutex.RUnlock()

	if conn.streamClosed || conn.Stream == nil {
		return 0, ErrStreamClosed
	}

	return conn.Stream.Read(p)
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

		// If TUN interface exists, we'll leave it to be cleaned up
		// by the connection manager to avoid concurrent access issues
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

// StopConnection stops a connection without removing it
func (cm *ConnectionManager) StopConnection(peerID peer.ID) bool {
	cm.mutex.RLock()
	defer cm.mutex.RUnlock()

	if conn, exists := cm.connections[peerID]; exists {
		// Use the centralized cleanup method
		conn.Cleanup()
		return true
	}
	return false
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
