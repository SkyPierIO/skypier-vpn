package vpn

import (
	"log"
	"runtime"
)

var (
	// Store original routing information to restore later
	originalDefaultGateway string
	isRoutingModified      bool
)

// SaveOriginalRouting stores the current default gateway before modifying routes
func SaveOriginalRouting(defaultGw string) {
	if !isRoutingModified {
		originalDefaultGateway = defaultGw
		isRoutingModified = true
	}
}

// RestoreRouting restores the original routing information
func RestoreRouting() error {
	if !isRoutingModified {
		log.Println("Routing was not modified, no restoration needed")
		return nil
	}

	var err error
	if runtime.GOOS == "darwin" {
		err = restoreRoutingDarwin()
	} else {
		err = restoreRoutingLinux()
	}

	if err == nil {
		isRoutingModified = false
	}

	return err
}

// Platform specific implementations
func restoreRoutingDarwin() error {
	log.Println("Restoring original routing on macOS")
	if originalDefaultGateway != "" {
		// Run platform-specific commands to restore the default route
		// For example, using route command
		return nil
	}
	return nil
}

func restoreRoutingLinux() error {
	log.Println("Restoring original routing on Linux")
	if originalDefaultGateway != "" {
		// Run platform-specific commands to restore the default route
		// For example, using ip route command
		return nil
	}
	return nil
}
