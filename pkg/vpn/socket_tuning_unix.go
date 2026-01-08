//go:build unix

// Package vpn provides socket buffer tuning for optimized VPN throughput.
// US-2.3: Socket Buffer Tuning - Increase kernel socket buffers from default ~200KB to 8MB
package vpn

import (
	"context"
	"net"
	"syscall"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/libp2p/go-libp2p/p2p/transport/tcp"
	ma "github.com/multiformats/go-multiaddr"
)

const (
	// SocketBufferSize is the target buffer size for SO_RCVBUF and SO_SNDBUF (8MB)
	// Default Linux socket buffers are typically 200-400KB which limits throughput
	// on high-latency links. 8MB allows better pipelining.
	SocketBufferSize = 8 * 1024 * 1024 // 8MB

	// MinRecommendedBufferSize is the minimum recommended buffer size (4MB)
	MinRecommendedBufferSize = 4 * 1024 * 1024
)

var socketLog = utils.NewLogger("SOCKET")

// SocketTuningDialer creates a custom dialer that sets large socket buffers.
// This is used with libp2p's WithDialerForAddr option.
type SocketTuningDialer struct {
	BufferSize int
}

// NewSocketTuningDialer creates a new dialer with the specified buffer size.
func NewSocketTuningDialer(bufferSize int) *SocketTuningDialer {
	if bufferSize <= 0 {
		bufferSize = SocketBufferSize
	}
	return &SocketTuningDialer{BufferSize: bufferSize}
}

// DialContext implements tcp.ContextDialer interface with socket buffer tuning.
func (d *SocketTuningDialer) DialContext(ctx context.Context, network, address string) (net.Conn, error) {
	// Create a custom dialer with Control function to set socket options
	dialer := &net.Dialer{
		Control: d.setSocketBuffers,
	}

	conn, err := dialer.DialContext(ctx, network, address)
	if err != nil {
		return nil, err
	}

	socketLog.Debug("Connected to %s with %dMB socket buffers", address, d.BufferSize/(1024*1024))
	return conn, nil
}

// setSocketBuffers sets SO_RCVBUF and SO_SNDBUF on the raw socket before connect.
// This is called by net.Dialer.Control before the connection is established.
func (d *SocketTuningDialer) setSocketBuffers(network, address string, c syscall.RawConn) error {
	var setErr error

	err := c.Control(func(fd uintptr) {
		// Set receive buffer size
		if err := syscall.SetsockoptInt(int(fd), syscall.SOL_SOCKET, syscall.SO_RCVBUF, d.BufferSize); err != nil {
			socketLog.Warn("Failed to set SO_RCVBUF to %d: %v (kernel limit may be lower)", d.BufferSize, err)
			setErr = err
		}

		// Set send buffer size
		if err := syscall.SetsockoptInt(int(fd), syscall.SOL_SOCKET, syscall.SO_SNDBUF, d.BufferSize); err != nil {
			socketLog.Warn("Failed to set SO_SNDBUF to %d: %v (kernel limit may be lower)", d.BufferSize, err)
			setErr = err
		}

		// Log the actual buffer sizes (kernel may have adjusted)
		actualRcv, _ := syscall.GetsockoptInt(int(fd), syscall.SOL_SOCKET, syscall.SO_RCVBUF)
		actualSnd, _ := syscall.GetsockoptInt(int(fd), syscall.SOL_SOCKET, syscall.SO_SNDBUF)
		socketLog.Debug("Socket buffers set: rcvbuf=%dKB, sndbuf=%dKB (requested %dKB each)",
			actualRcv/1024, actualSnd/1024, d.BufferSize/1024)
	})

	if err != nil {
		return err
	}
	// We don't fail the connection if buffer setting fails - just warn
	_ = setErr
	return nil
}

// GetDialerForAddr returns a DialerForAddr function for use with libp2p TCP transport.
// This creates a socket tuning dialer for any multiaddr.
func (d *SocketTuningDialer) GetDialerForAddr() tcp.DialerForAddr {
	return func(raddr ma.Multiaddr) (tcp.ContextDialer, error) {
		return d, nil
	}
}

// GetTCPTransportOption returns a tcp.Option for socket buffer tuning.
// Use this with libp2p.Transport(tcp.NewTCPTransport, GetTCPTransportOption())
func GetTCPTransportOption() tcp.Option {
	dialer := NewSocketTuningDialer(SocketBufferSize)
	return tcp.WithDialerForAddr(dialer.GetDialerForAddr())
}

// LogSocketBufferRecommendations logs recommendations for kernel socket buffer tuning.
// This helps users understand how to get maximum performance.
func LogSocketBufferRecommendations() {
	socketLog.Info("=== Socket Buffer Tuning Recommendations ===")
	socketLog.Info("For optimal VPN throughput, increase kernel socket buffer limits:")
	socketLog.Info("")
	socketLog.Info("Temporary (until reboot):")
	socketLog.Info("  sudo sysctl -w net.core.rmem_max=8388608")
	socketLog.Info("  sudo sysctl -w net.core.wmem_max=8388608")
	socketLog.Info("  sudo sysctl -w net.core.rmem_default=1048576")
	socketLog.Info("  sudo sysctl -w net.core.wmem_default=1048576")
	socketLog.Info("")
	socketLog.Info("Permanent (add to /etc/sysctl.conf):")
	socketLog.Info("  net.core.rmem_max = 8388608")
	socketLog.Info("  net.core.wmem_max = 8388608")
	socketLog.Info("  net.core.rmem_default = 1048576")
	socketLog.Info("  net.core.wmem_default = 1048576")
	socketLog.Info("")
	socketLog.Info("Then run: sudo sysctl -p")
	socketLog.Info("============================================")
}
