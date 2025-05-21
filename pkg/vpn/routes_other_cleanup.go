//go:build !linux && !darwin
// +build !linux,!darwin

package vpn

import (
	"fmt"
	"log"
	"runtime"
)

// cleanupInterfaceRoutesOSSpecific provides a stub implementation for unsupported platforms
func cleanupInterfaceRoutesOSSpecific(ifaceName string) error {
	log.Printf("Route cleanup not supported on %s", runtime.GOOS)
	return fmt.Errorf("route cleanup not supported on %s", runtime.GOOS)
}
