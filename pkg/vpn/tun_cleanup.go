package vpn

import (
	"log"
	"os/exec"
	"runtime"
)

// CleanupTUNInterface performs platform-specific cleanup of TUN interfaces
func CleanupTUNInterface(ifaceName string) error {
	log.Printf("Platform-specific cleanup for TUN interface %s on %s", ifaceName, runtime.GOOS)

	// Delegate to platform-specific implementation based on OS
	switch runtime.GOOS {
	case "linux":
		return cleanupTUNInterfaceLinux(ifaceName)
	case "darwin":
		return cleanupTUNInterfaceDarwin(ifaceName)
	default:
		log.Printf("No specific TUN interface cleanup for %s, using generic method", runtime.GOOS)
		return cleanupTUNInterfaceGeneric(ifaceName)
	}
}

// Linux-specific implementation
func cleanupTUNInterfaceLinux(ifaceName string) error {
	log.Printf("Removing Linux TUN interface %s", ifaceName)

	// Use the existing RemoveInterface function which uses netlink
	err := RemoveInterface(ifaceName)
	if err != nil {
		log.Printf("Error removing Linux TUN interface %s via netlink: %v", ifaceName, err)

		// Fallback to using shell command if netlink fails
		cmd := exec.Command("ip", "link", "del", ifaceName)
		if output, cmdErr := cmd.CombinedOutput(); cmdErr != nil {
			log.Printf("Fallback also failed, couldn't remove interface %s: %v, output: %s",
				ifaceName, cmdErr, output)
			return cmdErr
		}
	}

	log.Printf("Successfully removed Linux TUN interface %s", ifaceName)
	return nil
}

// Darwin (macOS) specific implementation
func cleanupTUNInterfaceDarwin(ifaceName string) error {
	log.Printf("Cleaning up macOS TUN interface %s", ifaceName)

	// For macOS, we use ifconfig to bring down the interface since we can't easily delete it
	cmd := exec.Command("ifconfig", ifaceName, "down")
	if output, err := cmd.CombinedOutput(); err != nil {
		log.Printf("Error bringing down macOS TUN interface %s: %v, output: %s", ifaceName, err, output)
		return err
	}

	// Remove all IP addresses from the interface
	cmd = exec.Command("ifconfig", ifaceName, "inet", "0.0.0.0")
	if output, err := cmd.CombinedOutput(); err != nil {
		log.Printf("Error removing IP from macOS TUN interface %s: %v, output: %s", ifaceName, err, output)
		// Non-fatal, continue
	}

	log.Printf("Successfully cleaned up macOS TUN interface %s", ifaceName)
	return nil
}

// Generic implementation for other platforms
func cleanupTUNInterfaceGeneric(ifaceName string) error {
	log.Printf("Generic cleanup for TUN interface %s", ifaceName)

	// Try common method across platforms - bring the interface down
	cmd := exec.Command("ifconfig", ifaceName, "down")
	if err := cmd.Run(); err != nil {
		log.Printf("Error bringing down interface %s: %v", ifaceName, err)
		// Non-fatal error, continue
	}

	return nil
}
