package vpn

import (
	"encoding/json"
	"errors"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/libp2p/go-libp2p/core/network"
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

// ReadJSONMessage safely reads and parses a JSON message from a stream
// It handles common issues like null bytes and partial reads
func ReadJSONMessage(stream network.Stream, maxSize int) ([]byte, error) {
	if maxSize <= 0 {
		maxSize = 1024 // Default max buffer size
	}

	// Read from the stream
	buf := make([]byte, maxSize)
	n, err := stream.Read(buf)
	if err != nil {
		return nil, err
	}

	if n == 0 {
		return nil, errors.New("zero bytes read from stream")
	}

	// Extract and clean the data
	data := buf[:n]

	// Remove newline terminator if present
	if n > 0 && data[n-1] == '\n' {
		data = data[:n-1]
	}

	// Clean any null bytes or invalid JSON characters
	cleanData := make([]byte, 0, len(data))
	inJSON := false

	for i := 0; i < len(data); i++ {
		// Look for the start of JSON object
		if !inJSON && data[i] == '{' {
			inJSON = true
			cleanData = append(cleanData, data[i])
		} else if inJSON {
			// Accept all printable characters inside the JSON
			if data[i] == 0 {
				// Skip null bytes
				continue
			} else if data[i] == '}' {
				// End of JSON object
				cleanData = append(cleanData, data[i])
				break
			} else if data[i] >= 32 || data[i] == '\t' || data[i] == '\n' || data[i] == '\r' {
				// Accept printable chars and whitespace
				cleanData = append(cleanData, data[i])
			} else {
				// Replace other control chars with space
				cleanData = append(cleanData, ' ')
			}
		}
	}

	if len(cleanData) == 0 {
		return nil, errors.New("no valid JSON data found in stream")
	}

	return cleanData, nil
}

// WriteJSONMessage safely writes a JSON message to a stream with proper termination
func WriteJSONMessage(stream network.Stream, msg interface{}) (int, error) {
	// Marshal the message to JSON
	data, err := json.Marshal(msg)
	if err != nil {
		return 0, err
	}

	// Add newline terminator
	msgWithNewline := append(data, '\n')

	// Write to stream
	return stream.Write(msgWithNewline)
}
