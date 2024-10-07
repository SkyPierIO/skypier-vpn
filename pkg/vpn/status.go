package vpn

import (
	"fmt"
	"os/exec"
	"runtime"
	"strings"

	"net/http"

	"github.com/gin-gonic/gin"
)

type VPNStatus struct {
	Status  string `json:"status"`
	IP      string `json:"ip,omitempty"`
	PeerID  string `json:"peer_id,omitempty"`
	Country string `json:"country,omitempty"`
}

// IsTUNInterfaceUp checks if a TUN interface is up on the machine for a given name.
func IsTUNInterfaceUp(interfaceName string) (bool, error) {
	switch runtime.GOOS {
	case "linux":
		return isTUNInterfaceUpLinux(interfaceName)
	case "darwin":
		return isTUNInterfaceUpMacOS(interfaceName)
	case "windows":
		return isTUNInterfaceUpWindows(interfaceName)
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
	return strings.Contains(string(output), interfaceName), nil
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

func checkVPNStatus() VPNStatus {

	interfaceName := "utun8"
	isUp, err := IsTUNInterfaceUp(interfaceName)
	if err != nil {
		fmt.Printf("Error checking interface status: %v\n", err)
	}
	if isUp {
		// Gather details about the remote node
		ip := "10.1.1.2"            // TODO: Example IP address, replace with actual logic to get IP
		peerID := "QmExamplePeerID" // TODO: Example Peer ID, replace with actual logic to get Peer ID
		country := "US"             // TODO: Example country, replace with actual logic to get country

		return VPNStatus{
			Status:  "connected",
			IP:      ip,
			PeerID:  peerID,
			Country: country,
		}
	} else {
		return VPNStatus{Status: "disconnected"}
	}
}