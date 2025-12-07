package utils

import (
	"encoding/binary"
	"errors"
	"io"
)

// // rateLimitedWriter wraps an io.Writer and limits the rate of writes.
// type rateLimitedWriter struct {
// 	writer  io.Writer
// 	limiter *rate.Limiter
// }

// func (rlw *rateLimitedWriter) Write(p []byte) (int, error) {
// 	n := 0
// 	for len(p) > 0 {
// 		// Wait for permission to write
// 		if err := rlw.limiter.WaitN(context.TODO(), len(p)); err != nil {
// 			return n, err
// 		}
// 		// Write the data
// 		written, err := rlw.writer.Write(p)
// 		n += written
// 		if err != nil {
// 			return n, err
// 		}
// 		p = p[written:]
// 	}
// 	return n, nil
// }

// BytesCallback is a function type for reporting bytes transferred
type BytesCallback func(n int64)

// Copy copies from src to dst using a buffer. If buf is nil, one is allocated.
func Copy(dst io.Writer, src io.Reader, buf []byte) (written int64, err error) {
	return CopyWithCallback(dst, src, buf, nil)
}

// CopyWithCallback copies from src to dst using a buffer, calling the callback after each write.
// This allows real-time tracking of bytes transferred.
// OPTIMIZED: Removed rate limiter for maximum throughput.
func CopyWithCallback(dst io.Writer, src io.Reader, buf []byte, onBytes BytesCallback) (written int64, err error) {
	// // Create a rate limiter that allows n MB per second
	// limiter := rate.NewLimiter(50<<20, 50<<20)

	// // Wrap the destination writer with the rate-limited writer
	// rlw := &rateLimitedWriter{
	// 	writer:  dst,
	// 	limiter: limiter,
	// }

	if buf == nil {
		// Use a larger buffer for better throughput (64KB instead of MTU-sized 1470)
		// This reduces syscall overhead significantly for bulk transfers
		size := 65536 // 64KB buffer
		if l, ok := src.(*io.LimitedReader); ok && int64(size) > l.N {
			if l.N < 1 {
				size = 1
			} else {
				size = int(l.N)
			}
		}
		buf = make([]byte, size)
	}

	// Direct copy without rate limiting for maximum throughput
	for {
		nr, er := src.Read(buf)
		if nr > 0 {
			// nw, ew := rlw.Write(buf[0:nr])
			nw, ew := dst.Write(buf[0:nr])
			if nw < 0 || nr < nw {
				nw = 0
				if ew == nil {
					ew = errors.New("invalid write result")
				}
			}
			written += int64(nw)
			// Call the callback for real-time stats tracking
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

type lengthPrefixedWriter struct {
	writer io.Writer
}

func (lpw *lengthPrefixedWriter) Write(p []byte) (int, error) {
	// Write the length of the data as a 4-byte integer
	length := uint32(len(p))
	err := binary.Write(lpw.writer, binary.BigEndian, length)
	if err != nil {
		return 0, err
	}

	// Write the actual dataCopy(Copy(
	n, err := lpw.writer.Write(p)
	if err != nil {
		return n, err
	}

	return n, nil
}

// NewLengthPrefixedWriter creates a new length-prefixed writer
func NewLengthPrefixedWriter(writer io.Writer) io.Writer {
	return &lengthPrefixedWriter{writer: writer}
}

type lengthPrefixedReader struct {
	reader io.Reader
}

func (lpr *lengthPrefixedReader) Read(p []byte) (int, error) {
	// Read the length of the data as a 4-byte integer
	var length uint32
	err := binary.Read(lpr.reader, binary.BigEndian, &length)
	if err != nil {
		return 0, err
	}

	// Ensure the buffer is large enough
	if len(p) < int(length) {
		return 0, io.ErrShortBuffer
	}

	// Use io.ReadFull to ensure we read ALL the expected bytes
	// A single Read() call may return fewer bytes than requested on streams,
	// causing incomplete packet reads and data corruption.
	n, err := io.ReadFull(lpr.reader, p[:length])
	if err != nil {
		return n, err
	}

	return n, nil
}

// NewLengthPrefixedReader creates a new length-prefixed reader
func NewLengthPrefixedReader(reader io.Reader) io.Reader {
	return &lengthPrefixedReader{reader: reader}
}
