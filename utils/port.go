package utils

import (
	"fmt"
	"net"
	"strconv"
	"time"
)

func GetFirstAvailableTCPPort(first int, last int) string {
	for port := first; port <= last; port++ {
		p := strconv.Itoa(port)
		host := "127.0.0.1"
		timeout := time.Second
		conn, err := net.DialTimeout("tcp", net.JoinHostPort(host, p), timeout)
		if err != nil {
			fmt.Println("Using port " + p + " for forwarding the traffic")
			return p
		}
		if conn != nil {
			defer conn.Close()
			fmt.Println("Opened", net.JoinHostPort(host, p))
		}
	}
	return ""
}

func GetFirstAvailableUDPPort(first int, last int) string {
	for port := first; port <= last; port++ {
		p := strconv.Itoa(port)
		host := "127.0.0.1"
		timeout := time.Second
		conn, err := net.DialTimeout("udp", net.JoinHostPort(host, p), timeout)
		if err != nil {
			fmt.Println("Using port " + p + " for forwarding the traffic")
			return p
		}
		if conn != nil {
			defer conn.Close()
			fmt.Println("Opened", net.JoinHostPort(host, p))
		}
	}
	return ""
}
