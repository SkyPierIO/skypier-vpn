#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo -e "\n[+]\tUpdate frontend sources..."
git -C "${ROOT_DIR}" submodule update --remote

bash "${ROOT_DIR}/scripts/build-ui.sh"
