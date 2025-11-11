//go:build darwin
// +build darwin

package vpn

import (
	"log"
	"os/exec"
	"strings"
)

// cleanupInterfaceRoutesOSSpecific is the Darwin (macOS) specific implementation
func cleanupInterfaceRoutesOSSpecific(ifaceName string) error {
	log.Printf("Cleaning up macOS routes for interface %s", ifaceName)

	// Use the route command on macOS to remove routes associated with the interface
	cmd := exec.Command("route", "-n", "flush", "-ifp", ifaceName)
	output, err := cmd.CombinedOutput()
	if err != nil {
		log.Printf("Error flushing routes: %v, output: %s", err, output)

		// Try an alternative approach
		// First, list all routes for this interface
		listCmd := exec.Command("netstat", "-nr", "-f", "inet")
		listOutput, listErr := listCmd.CombinedOutput()
		if listErr != nil {
			log.Printf("Error listing routes: %v", listErr)
			return err // Return the original error
		}

		// Parse netstat output to find routes for this interface
		lines := strings.Split(string(listOutput), "\n")
		for _, line := range lines {
			if strings.Contains(line, ifaceName) {
				fields := strings.Fields(line)
				if len(fields) >= 2 {
					destination := fields[0]
					if destination != "default" && destination != "Destination" {
						// Delete this specific route
						delCmd := exec.Command("route", "-n", "delete", destination)
						_, delErr := delCmd.CombinedOutput()
						if delErr != nil {
							log.Printf("Error deleting route to %s: %v", destination, delErr)
							// Continue with other routes
						} else {
							log.Printf("Deleted route to %s", destination)
						}
					}
				}
			}
		}

		return nil // We've tried our best with individual route deletion
	}

	log.Printf("Successfully flushed routes for interface %s", ifaceName)
	return nil
}
