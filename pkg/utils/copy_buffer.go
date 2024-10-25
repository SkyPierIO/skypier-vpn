package utils

import (
	"context"
	"encoding/binary"
	"errors"
	"io"

	"golang.org/x/time/rate"
)

// rateLimitedWriter wraps an io.Writer and limits the rate of writes.
type rateLimitedWriter struct {
	writer  io.Writer
	limiter *rate.Limiter
}

func (rlw *rateLimitedWriter) Write(p []byte) (int, error) {
	n := 0
	for len(p) > 0 {
		// Wait for permission to write
		if err := rlw.limiter.WaitN(context.TODO(), len(p)); err != nil {
			return n, err
		}
		// Write the data
		written, err := rlw.writer.Write(p)
		n += written
		if err != nil {
			return n, err
		}
		p = p[written:]
	}
	return n, nil
}

// Copy copies from src to dst using a buffer. If buf is nil, one is allocated.
func Copy(dst io.Writer, src io.Reader, buf []byte) (written int64, err error) {
	// Create a rate limiter that allows n MB per second
	limiter := rate.NewLimiter(50<<20, 50<<20)

	// Wrap the destination writer with the rate-limited writer
	rlw := &rateLimitedWriter{
		writer:  dst,
		limiter: limiter,
	}

	if buf == nil {
		size := 1470
		if l, ok := src.(*io.LimitedReader); ok && int64(size) > l.N {
			if l.N < 1 {
				size = 1
			} else {
				size = int(l.N)
			}
		}
		buf = make([]byte, size)
	}
	for {
		nr, er := src.Read(buf)
		if nr > 0 {
			nw, ew := rlw.Write(buf[0:nr])
			if nw < 0 || nr < nw {
				nw = 0
				if ew == nil {
					ew = errors.New("invalid write result")
				}
			}
			written += int64(nw)
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

	// Write the actual data
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

	// Read the actual data
	n, err := lpr.reader.Read(p[:length])
	if err != nil {
		return n, err
	}

	return n, nil
}

// NewLengthPrefixedReader creates a new length-prefixed reader
func NewLengthPrefixedReader(reader io.Reader) io.Reader {
	return &lengthPrefixedReader{reader: reader}
}
