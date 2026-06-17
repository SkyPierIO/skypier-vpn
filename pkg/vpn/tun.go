package vpn

import (
	"fmt"
	"os/exec"
	"runtime"
	"strings"
	"sync"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/vishvananda/netlink"
	wgtun "golang.zx2c4.com/wireguard/tun"
)

func runCmd(name string, args ...string) error {
	out, err := exec.Command(name, args...).CombinedOutput()
	if err != nil {
		return fmt.Errorf("%s %v: %w (output: %s)", name, args, err, out)
	}
	return nil
}

// VPN_TUN_MTU is the MTU advertised to the OS for VPN tunnel interfaces.
//
// 1500 (ethernet) minus tunnel overhead:
//   QUIC/UDP headers  ~40 bytes
//   QUIC packet hdr   ~25 bytes
//   Noise AEAD tag    ~16 bytes
//   yamux frame hdr   ~12 bytes
//   length prefix       4 bytes
//   headroom           ~3 bytes
// Total overhead ~100 bytes → 1400 gives a safe margin and avoids outer
// IP fragmentation, which silently hurts QUIC retransmit behaviour.
const VPN_TUN_MTU = 1400

var (
	InterfaceName string
	ifaceLocker   sync.Mutex
	tunLog        = utils.TUNLog
)

// SubnetRegistry keeps track of allocated subnets to avoid conflicts
var SubnetRegistry = struct {
	sync.RWMutex
	allocatedSubnets map[string]bool
}{
	allocatedSubnets: make(map[string]bool),
}

// AllocateSubnet finds and reserves an available subnet
func AllocateSubnet() string {
	SubnetRegistry.Lock()
	defer SubnetRegistry.Unlock()

	for i := 1; i < 256; i++ {
		for j := 1; j < 256; j++ {
			subnet := fmt.Sprintf("10.%d.%d", i, j)
			if !SubnetRegistry.allocatedSubnets[subnet] {
				SubnetRegistry.allocatedSubnets[subnet] = true
				tunLog.Debug("Allocated subnet: %s", subnet)
				return subnet
			}
		}
	}

	tunLog.Warn("No more subnets available, reusing 10.1.1")
	return "10.1.1"
}

// ReleaseSubnet marks a subnet as available again
func ReleaseSubnet(subnet string) {
	SubnetRegistry.Lock()
	defer SubnetRegistry.Unlock()

	parts := strings.Split(subnet, ".")
	if len(parts) >= 3 {
		prefix := fmt.Sprintf("%s.%s.%s", parts[0], parts[1], parts[2])
		delete(SubnetRegistry.allocatedSubnets, prefix)
		tunLog.Debug("Released subnet: %s", prefix)
	}
}

// getAvailableTunInterface returns an interface name (or hint for macOS) and
// a pair of private IPs for the new tunnel endpoint.
func getAvailableTunInterface() (string, string, string) {
	ifaceLocker.Lock()
	defer ifaceLocker.Unlock()

	subnet := AllocateSubnet()
	localIP := fmt.Sprintf("%s.1", subnet)
	remoteIP := fmt.Sprintf("%s.2", subnet)

	var ifaceName string

	switch runtime.GOOS {
	case "darwin":
		// Pass "utun" — wireguard-go asks the kernel to assign the next free
		// utun index. We retrieve the real name from dev.Name() after creation.
		ifaceName = "utun"

	case "linux", "android":
		for i := 0; i < 256; i++ {
			candidate := fmt.Sprintf("utun%d", i)
			_, err := netlink.LinkByName(candidate)
			if err != nil {
				ifaceName = candidate
				tunLog.Debug("Found available TUN interface: %s", ifaceName)
				break
			}
		}
		if ifaceName == "" {
			ifaceName = "skypier0"
			tunLog.Debug("Using default interface: %s", ifaceName)
		}

	default:
		panic(fmt.Sprintf("Unsupported operating system: %s", runtime.GOOS))
	}

	tunLog.Info("Selected %s with subnet %s (local=%s, remote=%s)",
		ifaceName, subnet, localIP, remoteIP)

	return ifaceName, localIP, remoteIP
}

// SetInterfaceUpForConnection creates a new TUN interface for a connection.
// It returns a WGTunDevice (wrapping wireguard-go's tun.Device) together with
// the resolved interface name and the two tunnel endpoint IPs.
func SetInterfaceUpForConnection() (*WGTunDevice, string, string, string) {
	ifaceName, localIPAddr, remoteIPAddr := getAvailableTunInterface()

	dev, err := wgtun.CreateTUN(ifaceName, VPN_TUN_MTU)
	if err != nil {
		tunLog.Error("Failed to create TUN interface %s: %v", ifaceName, err)
		panic(err)
	}

	// On macOS the kernel assigns the actual utunN index; on Linux the name
	// is what we requested.
	actualName, err := dev.Name()
	if err != nil {
		tunLog.Error("Failed to query TUN interface name: %v", err)
		panic(err)
	}
	InterfaceName = actualName

	tunLog.Success("TUN interface up: %s (MTU %d)", actualName, VPN_TUN_MTU)

	if runtime.GOOS == "darwin" {
		if err := configureTunMacOS(actualName, localIPAddr, remoteIPAddr); err != nil {
			tunLog.Error("Failed to configure macOS TUN: %v", err)
			panic(err)
		}
	} else {
		// Linux: wireguard-go already set the MTU via IOCTL — only add the
		// IP address and bring the link up.
		pierIface, _ := netlink.LinkByName(actualName)
		var addr *netlink.Addr
		if utils.IS_NODE_HOST {
			addr, _ = netlink.ParseAddr(remoteIPAddr + "/24")
		} else {
			addr, _ = netlink.ParseAddr(localIPAddr + "/24")
		}
		netlink.AddrAdd(pierIface, addr)
		netlink.LinkSetUp(pierIface)
	}

	return newWGTunDevice(dev), actualName, localIPAddr, remoteIPAddr
}

// SetInterfaceUp is kept for backward compatibility.
func SetInterfaceUp() *WGTunDevice {
	iface, ifaceName, _, _ := SetInterfaceUpForConnection()
	InterfaceName = ifaceName
	return iface
}

func configureTunMacOS(ifaceName, localIP, remoteIP string) error {
	// Assign the point-to-point address pair and bring the interface up.
	if err := runCmd("ifconfig", ifaceName, "inet", localIP, remoteIP, "up"); err != nil {
		return err
	}

	// Set MTU to match VPN_TUN_MTU — wireguard-go sets it via IOCTL but
	// ifconfig is the authoritative setter on macOS for the kernel routing layer.
	if err := runCmd("sudo", "ifconfig", ifaceName, "mtu", fmt.Sprintf("%d", VPN_TUN_MTU)); err != nil {
		return fmt.Errorf("failed to set MTU: %w", err)
	}

	// Add a host route for the remote tunnel endpoint.
	return runCmd("route", "add", remoteIP, "-interface", ifaceName)
}

// UpdateInterfaceIP updates the IP addresses of an existing TUN interface.
func UpdateInterfaceIP(ifaceName string, localIP string, remoteIP string) error {
	tunLog.Info("Updating %s with IPs: local=%s, remote=%s", ifaceName, localIP, remoteIP)

	if runtime.GOOS == "darwin" {
		if err := runCmd("ifconfig", ifaceName, "inet", "0.0.0.0", "0.0.0.0", "down"); err != nil {
			return fmt.Errorf("failed to bring down interface: %w", err)
		}
		return configureTunMacOS(ifaceName, localIP, remoteIP)
	}

	// Linux
	pierIface, err := netlink.LinkByName(ifaceName)
	if err != nil {
		return fmt.Errorf("failed to get interface %s: %w", ifaceName, err)
	}

	addrs, err := netlink.AddrList(pierIface, netlink.FAMILY_V4)
	if err != nil {
		return fmt.Errorf("failed to list addresses: %w", err)
	}
	for _, addr := range addrs {
		if err := netlink.AddrDel(pierIface, &addr); err != nil {
			tunLog.Warn("Failed to delete address %s: %v", addr.String(), err)
		}
	}

	var addr *netlink.Addr
	if utils.IS_NODE_HOST {
		addr, err = netlink.ParseAddr(remoteIP + "/24")
	} else {
		addr, err = netlink.ParseAddr(localIP + "/24")
	}
	if err != nil {
		return fmt.Errorf("failed to parse address: %w", err)
	}
	if err := netlink.AddrAdd(pierIface, addr); err != nil {
		return fmt.Errorf("failed to add address: %w", err)
	}
	if err := netlink.LinkSetUp(pierIface); err != nil {
		return fmt.Errorf("failed to set interface up: %w", err)
	}
	return nil
}
