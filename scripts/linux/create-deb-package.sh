#!/bin/bash

set -e

APP_NAME="skypier-vpn"
VERSION="0.1.0"
ARCH="amd64"
MAINTAINER="Skypier Technologies <info@skypier.io>"
DESCRIPTION="Skypier VPN is a decentralized VPN leveraging the libp2p framework, which is also used by IPFS and Ethereum. Skypier VPN relies on relay nodes run by the community. Each contributor is rewarded by sharing his unused bandwidth and IP address. Thanks to the relay node hosts, as a simple user, you can browse the internet safely and anonymously by connecting through a Skypier node (pay your subscription with cryptocurrency). This innovative approach ensures privacy and security while contributing to a decentralized internet infrastructure."
PKG_DIR="${APP_NAME}_${VERSION}_${ARCH}"
DEBIAN_DIR="${PKG_DIR}/DEBIAN"
BIN_DIR="${PKG_DIR}/usr/local/bin"
OPT_DIR="${PKG_DIR}/opt/skypier"
DESKTOP_DIR="${PKG_DIR}/usr/share/applications"

# Create necessary directories
mkdir -p "${DEBIAN_DIR}"
mkdir -p "${BIN_DIR}"
mkdir -p "${OPT_DIR}"
mkdir -p "${DESKTOP_DIR}"

# Create control file
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

# Create postinst script to create /etc/skypier directory
cat <<EOF > "${DEBIAN_DIR}/postinst"
#!/bin/bash
set -e
# Create /etc/skypier directory if it doesn't exist
if [ ! -d /etc/skypier ]; then
  mkdir -p /etc/skypier
  chown root:root /etc/skypier
  chmod 755 /etc/skypier
fi
EOF

# Make postinst script executable
chmod 755 "${DEBIAN_DIR}/postinst"

# Copy files
cp ./build/skypier-vpn "${BIN_DIR}/"
cp ./scripts/linux/start.sh "${OPT_DIR}/"
cp ./scripts/linux/skypier.svg "${OPT_DIR}/"

# Make start.sh executable
chmod +x "${OPT_DIR}/start.sh"

# Create the skypier.desktop file
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

# Build the .deb package
dpkg-deb --build "${PKG_DIR}"

# Clean up
rm -rf "${PKG_DIR}"

echo "DEB package ${PKG_DIR}.deb created successfully."