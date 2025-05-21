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

// CleanupRoutes cleans up routes associated with a specific interface
// This is a cross-platform wrapper around the CleanupInterfaceRoutes function
func CleanupRoutes(ifaceName string) error {
	// Delegate to the cross-platform implementation in routes.go
	return CleanupInterfaceRoutes(ifaceName)
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
