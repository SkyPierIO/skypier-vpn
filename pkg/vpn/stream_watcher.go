package vpn

import (
	"context"
	"log"

	"github.com/libp2p/go-libp2p/core/network"
	"github.com/libp2p/go-libp2p/core/peer"
)

// StreamWatcher provides functionality to monitor and handle stream lifecycle events
type StreamWatcher struct {
	connectionManager *ConnectionManager
}

// NewStreamWatcher creates a new stream watcher
func NewStreamWatcher(cm *ConnectionManager) *StreamWatcher {
	return &StreamWatcher{
		connectionManager: cm,
	}
}

// RegisterHost registers the stream watcher with a libp2p host
func (sw *StreamWatcher) RegisterHost(ctx context.Context, notifBundle *network.NotifyBundle) {
	// Define handlers for stream events
	notifBundle.DisconnectedF = sw.onDisconnected

	// libp2p doesn't have a direct ClosedStream notification, so we'll rely on Disconnected events
}

// onDisconnected is called when a peer is disconnected
func (sw *StreamWatcher) onDisconnected(net network.Network, conn network.Conn) {
	peerID := conn.RemotePeer()
	// log.Printf("Peer disconnected: %s, cleaning up resources", peerID.String())

	// Stop and remove the connection
	if sw.connectionManager.StopConnection(peerID) {
		log.Printf("Successfully cleaned up resources for disconnected peer: %s", peerID.String())
	}
}

// onStreamClosed is called when a stream is closed
func (sw *StreamWatcher) onStreamClosed(net network.Network, stream network.Stream) {
	peerID := stream.Conn().RemotePeer()
	log.Printf("Stream closed for peer: %s, protocol: %s", peerID.String(), stream.Protocol())

	// Only clean up if this is a VPN protocol stream
	if string(stream.Protocol()) == "/skypier/1.0" {
		log.Printf("VPN stream closed for peer: %s, cleaning up resources", peerID.String())
		if sw.connectionManager.StopConnection(peerID) {
			log.Printf("Successfully cleaned up resources for peer with closed stream: %s", peerID.String())
		}
	}
}

// OnConnectionError handles errors that might indicate a connection is broken
func (sw *StreamWatcher) OnConnectionError(peerID peer.ID, err error) {
	log.Printf("Connection error with peer %s: %v", peerID.String(), err)

	// Stop and remove the connection
	if sw.connectionManager.StopConnection(peerID) {
		log.Printf("Cleaned up resources after connection error with peer: %s", peerID.String())
	}
}
