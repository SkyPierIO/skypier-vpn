// from Peer ID to IP address
package utils

import (
	"fmt"
	"net"

	"github.com/multiformats/go-multiaddr"
)

// Check peer have valid ip address
func GetIPFromP2pAddr(peerAddr multiaddr.Multiaddr) (string, error) {
	// TODO get multiaddr from remote peer
	ip := "10.0.0.1"
	if net.ParseIP(ip).String() == "<nil>" {
		return "", fmt.Errorf("%s is not a valid ip address", ip)
	}
	return ip, nil
}
