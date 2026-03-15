#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
APP_NAME="${APP_NAME:-Skypier-VPN}"
VERSION="${VERSION:-0.1.0}"
GOARCH="${GOARCH:-amd64}"
DIST_DIR="${DIST_DIR:-${ROOT_DIR}/dist}"
BUILD_DIR="${ROOT_DIR}/build"
TEMP_DIR="$(mktemp -d)"
APP_BUNDLE="${TEMP_DIR}/${APP_NAME}.app"
APP_CONTENTS="${APP_BUNDLE}/Contents"
APP_MACOS_DIR="${APP_CONTENTS}/MacOS"
APP_RESOURCES_DIR="${APP_CONTENTS}/Resources"
DMG_STAGING_DIR="${TEMP_DIR}/dmg"
DMG_PATH="${DIST_DIR}/${APP_NAME}-${GOARCH}.dmg"
MACOS_BINARY="${BUILD_DIR}/skypier-vpn-darwin-${GOARCH}"
ICON_FILE="${ROOT_DIR}/scripts/darwin/skypier.icns"

trap 'rm -rf "${TEMP_DIR}"' EXIT

if [[ "$(uname -s)" != "Darwin" ]]; then
    echo "This packaging script must run on macOS."
    exit 1
fi

bash "${ROOT_DIR}/scripts/build-ui.sh"

mkdir -p "${BUILD_DIR}" "${DIST_DIR}" "${APP_MACOS_DIR}" "${APP_RESOURCES_DIR}" "${DMG_STAGING_DIR}"

echo -e "\n[+]\tGo build VPN Client for macOS (${GOARCH})..."
GOOS=darwin GOARCH="${GOARCH}" go build -o "${MACOS_BINARY}" -ldflags "-s -w" -trimpath -buildvcs=false ./cmd/skypier-vpn

cp "${ICON_FILE}" "${APP_RESOURCES_DIR}/skypier.icns"
cp "${MACOS_BINARY}" "${APP_MACOS_DIR}/skypier-vpn"

cat <<'EOF' > "${APP_MACOS_DIR}/start.sh"
#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SKYPIER_VPN="${SCRIPT_DIR}/skypier-vpn"

if [ ! -f "${SKYPIER_VPN}" ]; then
  echo "Error: skypier-vpn binary not found at ${SKYPIER_VPN}"
  exit 1
fi

osascript -e "do shell script \"${SKYPIER_VPN} >/dev/null 2>&1 &\" with administrator privileges"
sleep 3
open http://skypier.localhost:8081/ >/dev/null 2>&1 || true
EOF

chmod +x "${APP_MACOS_DIR}/start.sh" "${APP_MACOS_DIR}/skypier-vpn"

cat <<EOF > "${APP_CONTENTS}/Info.plist"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleName</key>
    <string>${APP_NAME}</string>
    <key>CFBundleDisplayName</key>
    <string>${APP_NAME}</string>
    <key>CFBundleIdentifier</key>
    <string>io.skypier.vpn</string>
    <key>CFBundleVersion</key>
    <string>${VERSION}</string>
    <key>CFBundleShortVersionString</key>
    <string>${VERSION}</string>
    <key>CFBundleExecutable</key>
    <string>start.sh</string>
    <key>CFBundleIconFile</key>
    <string>skypier</string>
    <key>LSUIElement</key>
    <true/>
</dict>
</plist>
EOF

cp -R "${APP_BUNDLE}" "${DMG_STAGING_DIR}/"

rm -f "${DMG_PATH}"
hdiutil create -volname "${APP_NAME}" -srcfolder "${DMG_STAGING_DIR}" -ov -format UDZO "${DMG_PATH}"

echo "DMG package created: ${DMG_PATH}"
