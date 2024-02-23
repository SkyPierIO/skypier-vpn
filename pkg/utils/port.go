package utils

import (
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
			return p
		}
		if conn != nil {
			defer conn.Close()
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
			return p
		}
		if conn != nil {
			defer conn.Close()
		}
	}
	return ""
}
