#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="${ROOT_DIR}/build"

bash "${ROOT_DIR}/scripts/build-ui.sh"

mkdir -p "${BUILD_DIR}"

echo -e "\n[+]\tGo build VPN Client..."
go build -o "${BUILD_DIR}/skypier-vpn" -ldflags "-s -w" -trimpath -buildvcs=false ./cmd/skypier-vpn
