package vpn

import (
	wgtun "golang.zx2c4.com/wireguard/tun"
)

// virtioHdrRoom is the number of bytes wireguard-go's Linux TUN needs as
// headroom before packet data when IFF_VNET_HDR is active (which this version
// of wireguard-go always enables). The kernel uses that space for the
// virtio_net_hdr struct (10 bytes). Without the headroom, the Write path does
// offset -= 10 → negative slice index → panic / corrupted write.
const virtioHdrRoom = 10

// tunReadBatch is the number of output buffers passed to wireguard-go's batch
// Read. wireguard-go's gsoSplit returns ErrTooManySegments if a GSO
// super-packet contains more segments than len(bufs). A single TCP bulk
// transfer with 1400-byte MTU can produce up to ~46 segments per GSO
// super-packet (65535 / 1400). 128 gives comfortable headroom.
const tunReadBatch = 128

// tunSegmentBufSize is the per-segment buffer size. After gsoSplit each slot
// holds one IP packet ≤ gsoSize + IP/TCP headers. 2048 bytes comfortably
// covers any MTU up to ~1980 bytes.
const tunSegmentBufSize = 2048

// WGTunDevice wraps wireguard-go's tun.Device and exposes batched read/write
// over its [][]byte API. Callers use ReadBatch / WriteBatch (see datapump.go);
// the batch API is what lets a GSO super-packet stay coalesced across the
// libp2p stream instead of being exploded into per-segment writes.
type WGTunDevice struct {
	dev wgtun.Device
}

func newWGTunDevice(dev wgtun.Device) *WGTunDevice {
	w := &WGTunDevice{dev: dev}
	// Drain the events channel so wireguard-go's internal goroutines never
	// block on send. We don't need to act on link-up/down events here.
	go func() {
		for range dev.Events() {
		}
	}()
	return w
}

// ReadBatch reads up to len(bufs) IP packets from the TUN device in a single
// syscall. sizes[i] is set to the length of the packet in bufs[i]. It returns
// the number of packets read.
//
// A GSO super-packet handed up by the kernel is split across as many bufs
// elements as it has segments, so callers must pass a batch of buffers
// (tunReadBatch) to avoid ErrTooManySegments. That error is benign — it means
// the batch filled before the super-packet was fully split — so it is swallowed
// and the populated packets are returned.
func (w *WGTunDevice) ReadBatch(bufs [][]byte, sizes []int) (int, error) {
	for i := range sizes {
		sizes[i] = 0
	}
	n, err := w.dev.Read(bufs, sizes, 0)
	if err == wgtun.ErrTooManySegments {
		err = nil
	}
	return n, err
}

// WriteBatch writes a batch of IP packets to the TUN device in as few syscalls
// as possible. Each element of bufs must have virtioHdrRoom bytes of headroom
// before the packet data (packet at bufs[i][virtioHdrRoom:]); wireguard-go's
// handleGRO uses that headroom to coalesce consecutive TCP/UDP segments into a
// single GSO super-packet, letting the kernel re-segment via TSO.
func (w *WGTunDevice) WriteBatch(bufs [][]byte) (int, error) {
	return w.dev.Write(bufs, virtioHdrRoom)
}

// Close closes the underlying TUN device.
func (w *WGTunDevice) Close() error {
	return w.dev.Close()
}
