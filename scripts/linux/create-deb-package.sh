#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
APP_NAME="${APP_NAME:-skypier-vpn}"
VERSION="${VERSION:-0.1.0}"
ARCH="${ARCH:-amd64}"
MAINTAINER="${MAINTAINER:-Skypier Technologies <info@skypier.io>}"
DESCRIPTION="${DESCRIPTION:-Skypier VPN is a decentralized VPN leveraging the libp2p framework, which is also used by IPFS and Ethereum. Skypier VPN relies on relay nodes run by the community. Each contributor is rewarded by sharing unused bandwidth and IP address. Thanks to relay node hosts, users can browse the internet safely and anonymously by connecting through a Skypier node.}"
DIST_DIR="${DIST_DIR:-${ROOT_DIR}/dist}"
WORK_DIR="$(mktemp -d)"
PKG_DIR="${WORK_DIR}/${APP_NAME}_${VERSION}_${ARCH}"
DEBIAN_DIR="${PKG_DIR}/DEBIAN"
BIN_DIR="${PKG_DIR}/usr/local/bin"
OPT_DIR="${PKG_DIR}/opt/skypier"
DESKTOP_DIR="${PKG_DIR}/usr/share/applications"
OUTPUT_FILE="${DIST_DIR}/${APP_NAME}_${VERSION}_${ARCH}.deb"

trap 'rm -rf "${WORK_DIR}"' EXIT

bash "${ROOT_DIR}/scripts/build-client.sh"

mkdir -p "${DEBIAN_DIR}" "${BIN_DIR}" "${OPT_DIR}" "${DESKTOP_DIR}" "${DIST_DIR}"

cat <<EOF > "${DEBIAN_DIR}/control"
Package: ${APP_NAME}
Version: ${VERSION}
Section: net
Priority: optional
Architecture: ${ARCH}
Depends: libc6 (>= 2.7)
Maintainer: ${MAINTAINER}
Description: ${DESCRIPTION}
EOF

cat <<EOF > "${DEBIAN_DIR}/postinst"
#!/usr/bin/env bash
set -euo pipefail

if [ ! -d /etc/skypier ]; then
  mkdir -p /etc/skypier
  chown root:root /etc/skypier
  chmod 755 /etc/skypier
fi
EOF

chmod 755 "${DEBIAN_DIR}/postinst"

cp "${ROOT_DIR}/build/skypier-vpn" "${BIN_DIR}/"
cp "${ROOT_DIR}/scripts/linux/start.sh" "${OPT_DIR}/"
cp "${ROOT_DIR}/scripts/linux/skypier.svg" "${OPT_DIR}/"
chmod +x "${OPT_DIR}/start.sh"

cat <<EOF > "${DESKTOP_DIR}/skypier.desktop"
[Desktop Entry]
Type=Application
Name=Skypier-VPN
Terminal=false
Exec=/opt/skypier/start.sh
Icon=/opt/skypier/skypier.svg
Comment=The web3 VPN
Categories=Network;VPN;Security;
EOF

dpkg-deb --build "${PKG_DIR}" "${OUTPUT_FILE}"

echo "DEB package created: ${OUTPUT_FILE}"