#!/bin/bash

set -e

echo -e "\n[+]\tGo build VPN Client..."
go build -o build/skypier-vpn -ldflags "-s -w" -trimpath -buildvcs=false cmd/skypier-vpn/main.go
tree --si ./build
