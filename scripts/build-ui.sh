#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
UI_DIR="${ROOT_DIR}/pkg/ui/web"

echo -e "\n[+]\tBuild embedded frontend..."

if ! command -v pnpm >/dev/null 2>&1; then
    echo "pnpm is required to build the embedded frontend."
    exit 1
fi

pushd "${UI_DIR}" >/dev/null

if [[ "${CI:-}" == "true" || "${CI:-}" == "1" ]]; then
    pnpm install --frozen-lockfile
else
    pnpm install
fi

pnpm build

popd >/dev/null
