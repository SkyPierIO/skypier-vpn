package vpn

import (
	"io"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
)

var batchLog = utils.NewLogger("BATCH")

// BatchedIOConfig holds configuration for batched I/O operations
type BatchedIOConfig struct {
	// BufferSize is the size of the read/write buffer
	// Larger buffers allow more data per syscall when available
	// Default: 64KB
	BufferSize int
}

// DefaultBatchedIOConfig returns sensible defaults optimized for VPN traffic
func DefaultBatchedIOConfig() *BatchedIOConfig {
	return &BatchedIOConfig{
		BufferSize: 65536, // 64KB - allows batching when data is available
	}
}

// BatchedCopyWithCallback copies from src to dst using larger buffers
// to reduce syscall overhead when multiple packets are available.
//
// This is a SIMPLE, LOW-LATENCY implementation that:
// - Uses a 64KB buffer instead of 1500-byte MTU-sized buffer
// - Does NOT add any artificial delays or batching waits
// - Writes data immediately as soon as it's read
// - Allows the OS to naturally batch when multiple packets are queued
//
// Key insight: We don't WAIT to batch - we just use a larger buffer
// so the kernel can give us more data per read() syscall when it's available.
// This reduces syscalls during high traffic without adding latency during idle.
func BatchedCopyWithCallback(dst io.Writer, src io.Reader, config *BatchedIOConfig, onBytes func(int64)) (written int64, err error) {
	if config == nil {
		config = DefaultBatchedIOConfig()
	}

	// Use a large buffer - this is the key optimization
	// When multiple packets are queued in the kernel, we can read them all at once
	// When only one packet is available, we get just that packet (no waiting)
	buf := make([]byte, config.BufferSize)

	for {
		// Read as much as available (up to buffer size)
		// This does NOT block waiting for more data - it returns
		// immediately with whatever is available in the kernel buffer
		nr, er := src.Read(buf)

		if nr > 0 {
			// Write immediately - no batching delay
			// The destination (TUN or stream) gets data as fast as possible
			nw, ew := dst.Write(buf[0:nr])
			if nw < 0 || nr < nw {
				nw = 0
				if ew == nil {
					ew = io.ErrUnexpectedEOF
				}
			}
			written += int64(nw)

			// Call the callback for stats tracking
			if onBytes != nil && nw > 0 {
				onBytes(int64(nw))
			}

			if ew != nil {
				err = ew
				break
			}
			if nr != nw {
				err = io.ErrShortWrite
				break
			}
		}

		if er != nil {
			if er != io.EOF {
				err = er
			}
			break
		}
	}

	return written, err
}
