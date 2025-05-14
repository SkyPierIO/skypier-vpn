package vpn

import (
	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
)

// SafeStreamWrapper provides IO operations that handle closed streams gracefully
type SafeStreamWrapper struct {
	conn *ConnectionContext
}

// NewSafeStreamWrapper creates a new SafeStreamWrapper for a connection
func NewSafeStreamWrapper(conn *ConnectionContext) *SafeStreamWrapper {
	return &SafeStreamWrapper{conn: conn}
}

// Write safely writes data to the stream using length-prefixed format
func (ssw *SafeStreamWrapper) Write(p []byte) (int, error) {
	// Get the stream and check if it's available
	stream, ok := ssw.conn.GetStream()
	if !ok {
		return 0, ErrStreamClosed
	}

	// Create a length-prefixed writer for the stream
	lpWriter := utils.NewLengthPrefixedWriter(stream)

	// Attempt to write the data
	n, err := lpWriter.Write(p)
	if err != nil {
		// If we get an error, mark the stream as closed to prevent future attempts
		if shouldCloseStream(err) {
			ssw.conn.CloseStream()
		}
		return n, err
	}

	return n, nil
}

// Read safely reads data from the stream using length-prefixed format
func (ssw *SafeStreamWrapper) Read(p []byte) (int, error) {
	// Get the stream and check if it's available
	stream, ok := ssw.conn.GetStream()
	if !ok {
		return 0, ErrStreamClosed
	}

	// Create a length-prefixed reader for the stream
	lpReader := utils.NewLengthPrefixedReader(stream)

	// Attempt to read the data
	n, err := lpReader.Read(p)
	if err != nil {
		// If we get an error, mark the stream as closed to prevent future attempts
		if shouldCloseStream(err) {
			ssw.conn.CloseStream()
		}
		return n, err
	}

	return n, nil
}
