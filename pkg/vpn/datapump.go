package vpn

import (
	"bufio"
	"encoding/binary"
	"fmt"
	"io"
)

// streamReadBufferSize is the bufio read buffer wrapped around the libp2p
// stream on the receive side. It must comfortably hold a full TUN batch worth
// of framed packets so that packets arriving together in one transport read can
// be coalesced into a single batched TUN write (enabling GSO on the kernel).
const streamReadBufferSize = 1 << 18 // 256 KB

// frameHeaderLen is the length prefix prepended to each packet on the wire.
// It matches utils.NewLengthPrefixedWriter / Reader so the format is
// interoperable with peers running the older single-packet pump.
const frameHeaderLen = 4

// pumpTunToStream moves packets from the TUN device to the libp2p stream.
//
// It batch-reads up to tunReadBatch packets in one syscall, frames them all
// (4-byte big-endian length prefix + payload) into a single buffer, and writes
// that buffer to the stream in one call. This preserves the syscall/framing
// amortisation that GRO on the TUN read side provides, instead of exploding a
// GSO super-packet into dozens of tiny per-segment stream writes.
//
// It returns when the stream or TUN device errors, or when StopChan is closed.
func (conn *ConnectionContext) pumpTunToStream(stats *ConnectionStats) error {
	dev := conn.Interface
	bufs := make([][]byte, tunReadBatch)
	sizes := make([]int, tunReadBatch)
	for i := range bufs {
		bufs[i] = make([]byte, tunSegmentBufSize)
	}
	// Worst-case framed batch: every slot full plus its length prefix.
	frame := make([]byte, 0, tunReadBatch*(frameHeaderLen+tunSegmentBufSize))

	for {
		select {
		case <-conn.StopChan:
			return nil
		default:
		}

		n, err := dev.ReadBatch(bufs, sizes)
		if err != nil {
			return err
		}
		if n == 0 {
			continue
		}

		frame = frame[:0]
		var total int64
		for i := 0; i < n; i++ {
			sz := sizes[i]
			if sz == 0 {
				continue
			}
			var hdr [frameHeaderLen]byte
			binary.BigEndian.PutUint32(hdr[:], uint32(sz))
			frame = append(frame, hdr[:]...)
			frame = append(frame, bufs[i][:sz]...)
			total += int64(sz)
		}
		if len(frame) == 0 {
			continue
		}

		if _, err := conn.SafeStreamWrite(frame); err != nil {
			return err
		}
		if stats != nil {
			stats.RecordBytesSent(total)
		}
	}
}

// pumpStreamToTun moves packets from the libp2p stream to the TUN device.
//
// It reads length-prefixed packets through a buffered reader and accumulates a
// batch of all packets already buffered (those that arrived in the same
// transport read), then writes them to the TUN device in one batched call.
// wireguard-go's handleGRO coalesces the batch into a GSO super-packet so the
// kernel performs a single large write and re-segments via TSO.
//
// It returns when the stream or TUN device errors, or when StopChan is closed.
func (conn *ConnectionContext) pumpStreamToTun(stats *ConnectionStats) error {
	dev := conn.Interface
	stream, ok := conn.GetStream()
	if !ok {
		return ErrStreamClosed
	}
	br := bufio.NewReaderSize(stream, streamReadBufferSize)

	// Each TUN write buffer carries virtioHdrRoom bytes of headroom before the
	// packet so handleGRO can prepend the virtio_net_hdr in place.
	bufs := make([][]byte, tunReadBatch)
	for i := range bufs {
		bufs[i] = make([]byte, virtioHdrRoom+tunSegmentBufSize)
	}
	writeBufs := make([][]byte, 0, tunReadBatch)

	var lenBuf [frameHeaderLen]byte
	for {
		select {
		case <-conn.StopChan:
			return nil
		default:
		}

		writeBufs = writeBufs[:0]
		var total int64
		for count := 0; count < tunReadBatch; count++ {
			if _, err := io.ReadFull(br, lenBuf[:]); err != nil {
				return err
			}
			length := int(binary.BigEndian.Uint32(lenBuf[:]))
			if length == 0 || length > tunSegmentBufSize {
				return fmt.Errorf("invalid frame length %d from peer %s", length, conn.PeerID)
			}

			dst := bufs[count][virtioHdrRoom : virtioHdrRoom+length]
			if _, err := io.ReadFull(br, dst); err != nil {
				return err
			}
			writeBufs = append(writeBufs, bufs[count][:virtioHdrRoom+length])
			total += int64(length)

			// Only keep batching while another length prefix is already
			// buffered; otherwise flush now to avoid adding latency.
			if br.Buffered() < frameHeaderLen {
				break
			}
		}

		if len(writeBufs) == 0 {
			continue
		}
		if _, err := dev.WriteBatch(writeBufs); err != nil {
			return err
		}
		if stats != nil {
			stats.RecordBytesReceived(total)
		}
	}
}
