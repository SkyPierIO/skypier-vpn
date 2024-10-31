package utils

import (
	"encoding/binary"
	"fmt"
	"log"
	"net"
	"os/exec"
	"strings"
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

func PrettyPrintIPHeader(packet []byte, level string) {
	color := Cyan
	switch level {
	case "DEBUG":
		color = Orange
	case "ERROR":
		color = Red
	default:
		color = Cyan
	}
	if len(packet) < 20 {
		log.Println(Orange, "Packet too short", Reset)
		return
	}

	version := packet[0] >> 4
	ihl := packet[0] & 0x0F
	tos := packet[1]
	totalLength := binary.BigEndian.Uint16(packet[2:4])
	identification := binary.BigEndian.Uint16(packet[4:6])
	flags := packet[6] >> 5
	fragmentOffset := binary.BigEndian.Uint16(packet[6:8]) & 0x1FFF
	ttl := packet[8]
	protocol := GetProtocolById(packet[9])
	headerChecksum := binary.BigEndian.Uint16(packet[10:12])
	sourceAddress := net.IP(packet[12:16])
	destinationAddress := net.IP(packet[16:20])

	log.Println(color, "IP Header:", Reset)
	log.Println(color, "+---------------------+---------------------+", Reset)
	log.Println(color, "| Field               | Value               |", Reset)
	log.Println(color, "+---------------------+---------------------+", Reset)
	log.Printf(" %s| %-19s | %-19d |%s\n", color, "Version", version, Reset)
	log.Printf(" %s| %-19s | %-19d |%s\n", color, "IHL", ihl, Reset)
	log.Printf(" %s| %-19s | %-19d |%s\n", color, "Type of Service", tos, Reset)
	log.Printf(" %s| %-19s | %-19d |%s\n", color, "Total Length", totalLength, Reset)
	log.Printf(" %s| %-19s | %-19d |%s\n", color, "Identification", identification, Reset)
	log.Printf(" %s| %-19s | %-19d |%s\n", color, "Flags", flags, Reset)
	log.Printf(" %s| %-19s | %-19d |%s\n", color, "Fragment Offset", fragmentOffset, Reset)
	log.Printf(" %s| %-19s | %-19d |%s\n", color, "Time to Live", ttl, Reset)
	log.Printf(" %s| %-19s | %v    |%s\n", color, "Protocol", protocol, Reset)
	log.Printf(" %s| %-19s | %-19d |%s\n", color, "Header Checksum", headerChecksum, Reset)
	log.Printf(" %s| %-19s | %-19s |%s\n", color, "Source Address", sourceAddress, Reset)
	log.Printf(" %s| %-19s | %-19s |%s\n", color, "Destination Address", destinationAddress, Reset)
	log.Println(color, "+---------------------+---------------------+", Reset)
}

// DisableIPv6 disables IPv6 on the host by writing to /proc/sys/net/ipv6/conf/*/disable_ipv6
// Support Linux hosts only at the moment.
// TODO do MacOS and Windows if still needed
func DisableIPv6Linux() error {
	paths := []string{
		"/proc/sys/net/ipv6/conf/all/disable_ipv6",
		"/proc/sys/net/ipv6/conf/default/disable_ipv6",
		"/proc/sys/net/ipv6/conf/lo/disable_ipv6",
	}

	for _, path := range paths {
		if err := writeToFile(path, "1"); err != nil {
			return fmt.Errorf("failed to disable IPv6 at %s: %v", path, err)
		}
	}

	return nil
}

func DisableIPv6Darwin() error {
	// List all network services
	services, err := listNetworkServicesDarwin()
	if err != nil {
		return fmt.Errorf("failed to list network services: %v", err)
	}

	// Disable IPv6 on each network service
	for _, service := range services {
		if err := disableIPv6OnServiceDarwin(service); err != nil {
			return fmt.Errorf("failed to disable IPv6 on %s: %v", service, err)
		}
	}

	return nil
}

func listNetworkServicesDarwin() ([]string, error) {
	cmd := exec.Command("networksetup", "-listallnetworkservices")
	output, err := cmd.CombinedOutput()
	if err != nil {
		return nil, fmt.Errorf("failed to list network services: %v, output: %s", err, output)
	}

	lines := strings.Split(string(output), "\n")
	var services []string
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line != "" && !strings.HasPrefix(line, "An asterisk (*) denotes that a network service is disabled.") {
			services = append(services, line)
		}
	}

	return services, nil
}

func disableIPv6OnServiceDarwin(service string) error {
	cmd := exec.Command("networksetup", "-setv6off", service)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to disable IPv6 on service %s: %v, output: %s", service, err, output)
	}
	return nil
}
