package vpn

import (
	"os/exec"
	"runtime"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
)

var tunCleanupLog = utils.TUNLog

// CleanupTUNInterface performs platform-specific cleanup of TUN interfaces
func CleanupTUNInterface(ifaceName string) error {
	tunCleanupLog.Debug("Cleanup for TUN %s on %s", ifaceName, runtime.GOOS)

	// Delegate to platform-specific implementation based on OS
	switch runtime.GOOS {
	case "linux":
		return cleanupTUNInterfaceLinux(ifaceName)
	case "darwin":
		return cleanupTUNInterfaceDarwin(ifaceName)
	default:
		tunCleanupLog.Debug("No specific cleanup for %s, using generic", runtime.GOOS)
		return cleanupTUNInterfaceGeneric(ifaceName)
	}
}

// Linux-specific implementation
func cleanupTUNInterfaceLinux(ifaceName string) error {
	tunCleanupLog.Debug("Removing Linux TUN %s", ifaceName)

	// Use the existing RemoveInterface function which uses netlink
	err := RemoveInterface(ifaceName)
	if err != nil {
		tunCleanupLog.Warn("Error removing TUN %s via netlink: %v", ifaceName, err)

		// Fallback to using shell command if netlink fails
		cmd := exec.Command("ip", "link", "del", ifaceName)
		if output, cmdErr := cmd.CombinedOutput(); cmdErr != nil {
			tunCleanupLog.Error("Fallback failed for %s: %v, output: %s",
				ifaceName, cmdErr, output)
			return cmdErr
		}
	}

	tunCleanupLog.Success("Removed Linux TUN %s", ifaceName)
	return nil
}

// Darwin (macOS) specific implementation
func cleanupTUNInterfaceDarwin(ifaceName string) error {
	tunCleanupLog.Debug("Cleaning up macOS TUN %s", ifaceName)

	// For macOS, we use ifconfig to bring down the interface since we can't easily delete it
	cmd := exec.Command("ifconfig", ifaceName, "down")
	if output, err := cmd.CombinedOutput(); err != nil {
		tunCleanupLog.Warn("Error bringing down macOS TUN %s: %v, output: %s", ifaceName, err, output)
		return err
	}

	// Remove all IP addresses from the interface
	cmd = exec.Command("ifconfig", ifaceName, "inet", "0.0.0.0")
	if output, err := cmd.CombinedOutput(); err != nil {
		tunCleanupLog.Debug("Error removing IP from macOS TUN %s: %v, output: %s", ifaceName, err, output)
		// Non-fatal, continue
	}

	tunCleanupLog.Success("Cleaned up macOS TUN %s", ifaceName)
	return nil
}

// Generic implementation for other platforms
func cleanupTUNInterfaceGeneric(ifaceName string) error {
	tunCleanupLog.Debug("Generic cleanup for TUN %s", ifaceName)

	// Try common method across platforms - bring the interface down
	cmd := exec.Command("ifconfig", ifaceName, "down")
	if err := cmd.Run(); err != nil {
		tunCleanupLog.Warn("Error bringing down %s: %v", ifaceName, err)
		// Non-fatal error, continue
	}

	return nil
}
