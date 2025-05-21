package vpn

import (
	"log"

	"github.com/libp2p/go-libp2p/core/network"
)

// UnregisterStream is a utility function to handle stream cleanup.
// This is a compatibility function that doesn't do anything in the current version,
// but exists for backward compatibility with existing code.
func UnregisterStream(stream network.Stream) {
	if stream == nil {
		return
	}

	// In the current architecture we handle stream lifecycle in ConnectionContext,
	// but log the event for debugging purposes
	log.Printf("Stream unregistered: %v", stream.ID())
}
