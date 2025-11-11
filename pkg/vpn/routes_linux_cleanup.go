//go:build linux
// +build linux

package vpn

import (
	"log"
	"os/exec"

	"github.com/vishvananda/netlink"
)

// cleanupInterfaceRoutesOSSpecific is the Linux-specific implementation
func cleanupInterfaceRoutesOSSpecific(ifaceName string) error {
	log.Printf("Cleaning up Linux routes for interface %s", ifaceName)

	// First, try to get the interface by name
	link, err := netlink.LinkByName(ifaceName)
	if err != nil {
		log.Printf("Interface %s not found, may already be removed: %v", ifaceName, err)
		// Consider this a non-fatal error since we're cleaning up
		return nil
	}

	// Get all routes associated with this interface
	routes, err := netlink.RouteList(link, netlink.FAMILY_V4)
	if err != nil {
		log.Printf("Error listing routes for interface %s: %v", ifaceName, err)
		// Try using ip command as a fallback
		cmd := exec.Command("ip", "route", "flush", "dev", ifaceName)
		output, cmdErr := cmd.CombinedOutput()
		if cmdErr != nil {
			log.Printf("Error flushing routes using ip command: %v, output: %s", cmdErr, output)
			return cmdErr
		}
		return nil
	}

	// Delete each route associated with this interface
	for _, route := range routes {
		if err := netlink.RouteDel(&route); err != nil {
			log.Printf("Error deleting route %v: %v", route, err)
			// Continue with other routes even if one fails
		}
	}

	log.Printf("Successfully cleaned up routes for interface %s", ifaceName)
	return nil
}
