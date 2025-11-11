package vpn

import (
	"fmt"
	"os/exec"
	"runtime"
	"strings"

	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/vishvananda/netlink"
)

type VPNStatus struct {
	Status    string `json:"status"`
	IP        string `json:"ip,omitempty"`
	Interface string `json:"interface,omitempty"`
	PeerID    string `json:"peer_id,omitempty"`
	Country   string `json:"country,omitempty"`
}

// IsTUNInterfaceUp checks if a TUN interface is up on the machine for a given name.
func IsTUNInterfaceUp(interfaceName string) (bool, error) {
	switch runtime.GOOS {
	case "linux":
		return isTUNInterfaceUpLinux(interfaceName)
	case "darwin":
		return isTUNInterfaceUpMacOS(interfaceName)
	// Note: Windows support is not implemented yet
	// case "windows":
	// 	return isTUNInterfaceUpWindows(interfaceName)
	default:
		return false, fmt.Errorf("unsupported operating system: %s", runtime.GOOS)
	}
}

func isTUNInterfaceUpLinux(interfaceName string) (bool, error) {
	cmd := exec.Command("ip", "addr", "show", "dev", interfaceName)
	output, err := cmd.Output()
	if err != nil {
		return false, err
	}
	return strings.Contains(string(output), interfaceName), nil
}

func isTUNInterfaceUpMacOS(interfaceName string) (bool, error) {
	cmd := exec.Command("ifconfig", interfaceName)
	output, err := cmd.Output()
	if err != nil {
		return false, err
	}
	outputStr := string(output)
	if !strings.Contains(outputStr, interfaceName) {
		return false, nil
	}
	// check if an IP address is assigned to the interface
	if !strings.Contains(outputStr, "inet ") {
		return false, nil
	}
	return true, nil
}

func isTUNInterfaceUpWindows(interfaceName string) (bool, error) {
	cmd := exec.Command("powershell", "Get-NetAdapter", "-Name", interfaceName)
	output, err := cmd.Output()
	if err != nil {
		return false, err
	}
	return strings.Contains(string(output), interfaceName), nil
}

func GetVPNStatus(c *gin.Context) {
	status := checkVPNStatus()
	c.JSON(http.StatusOK, status)
}

func getCurrentTunInterface() (string, error) {
	for i := 0; i < 256; i++ {
		ifaceName := fmt.Sprintf("utun%d", i)
		if _, err := netlink.LinkByName(ifaceName); err == nil {
			return ifaceName, nil
		}
	}
	return "", fmt.Errorf("no available TUN interface found")
}

func checkVPNStatus() VPNStatus {
	// Iterate through possible utun interfaces to find the first available one
	interfaceName, err := getCurrentTunInterface()
	if err != nil {
		return VPNStatus{Status: "disconnected"}
	}

	if interfaceName != "" {
		// Find the peer ID associated with the active stream
		var peerID string
		streamsMu.Lock()
		for pid := range streams {
			peerID = pid.String()
			break
		}
		streamsMu.Unlock()

		return VPNStatus{
			Status:    "connected",
			Interface: interfaceName,
			PeerID:    peerID,
		}
	} else {
		return VPNStatus{Status: "disconnected"}
	}
}
