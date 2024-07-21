package utils

import (
	"fmt"
	"net"
)

// isPublicIP checks if the given IP address is public.
func IsPublicIP(ipStr string) bool {
	ip := net.ParseIP(ipStr)
	if ip == nil {
		fmt.Println("Invalid IP address")
		return false
	}

	// Check for private IP ranges
	// Private IP ranges are:
	// - 10.0.0.0/8
	// - 172.16.0.0/12
	// - 192.168.0.0/16
	// Additionally, loopback (127.0.0.0/8) is considered non-public
	privateIPBlocks := []string{
		"10.0.0.0/8",
		"172.16.0.0/12",
		"192.168.0.0/16",
		"127.0.0.0/8",
	}

	for _, block := range privateIPBlocks {
		_, cidr, _ := net.ParseCIDR(block)
		if cidr.Contains(ip) {
			return false // IP is private
		}
	}

	return true // IP is public
}