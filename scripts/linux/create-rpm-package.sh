#!/bin/bash

set -e

APP_NAME="skypier-vpn"
VERSION="0.1.0"
RELEASE="1"
ARCH="x86_64"
MAINTAINER="Skypier Technologies <info@skypier.io>"
DESCRIPTION="Skypier VPN is a decentralized VPN leveraging the libp2p network stack, which is also used by IPFS and Ethereum. With Skypier VPN, you can earn rewards by sharing your unused bandwidth with the network. Alternatively, you can browse the internet safely and anonymously by connecting through a Skypier node. This innovative approach ensures privacy and security while contributing to a decentralized internet infrastructure."
LICENSE="MIT"
RPMBUILD_DIR="${HOME}/rpmbuild"
BUILDROOT="${RPMBUILD_DIR}/BUILDROOT/${APP_NAME}-${VERSION}-${RELEASE}.${ARCH}"
SPEC_FILE="${RPMBUILD_DIR}/SPECS/${APP_NAME}.spec"

# Create necessary directories
mkdir -p "${BUILDROOT}/opt/skypier"
mkdir -p "${BUILDROOT}/usr/local/bin"
mkdir -p "${BUILDROOT}/usr/share/applications"
mkdir -p "${RPMBUILD_DIR}/SOURCES"
mkdir -p "${RPMBUILD_DIR}/SPECS"

# Copy application files
cp -r ./build/skypier-vpn "${BUILDROOT}/opt/skypier/"
cp ./scripts/linux/skypier.svg "${BUILDROOT}/opt/skypier/"

# Create start.sh script
cat <<EOF > "${BUILDROOT}/usr/local/bin/start-skypier-vpn.sh"
#!/bin/bash

pkexec /opt/skypier/skypier-vpn &
if [ \$? -ne 0 ]; then
  echo "pkexec failed: invalid password or insufficient permissions."
  exit 1
fi

sleep 1
open http://skypier.localhost:8081/ 2> /dev/null
wait
EOF

# Make start.sh executable
chmod +x "${BUILDROOT}/usr/local/bin/start-skypier-vpn.sh"

# Create .desktop file
cat <<EOF > "${BUILDROOT}/usr/share/applications/skypier-vpn.desktop"
[Desktop Entry]
Name=Skypier VPN
Comment=Decentralized VPN based on libp2p
Exec=/usr/local/bin/start-skypier-vpn.sh
Icon=/opt/skypier/skypier.svg
Terminal=false
Type=Application
Categories=Network;Security;
EOF

# Create spec file
cat <<EOF > "${SPEC_FILE}"
Name:           ${APP_NAME}
Version:        ${VERSION}
Release:        ${RELEASE}%{?dist}
Summary:        ${DESCRIPTION}

License:        ${LICENSE}
URL:            https://skypier.io/
Source0:        %{name}-%{version}.tar.gz

BuildArch:      ${ARCH}
Requires:       libc.so.6, pkexec

%description
${DESCRIPTION}

%prep
%setup -q

%build

%install
mkdir -p %{buildroot}
cp -r * %{buildroot}

%files
/opt/skypier
/usr/local/bin/start-skypier-vpn.sh
/usr/share/applications/skypier-vpn.desktop

%changelog
* $(date +"%a %b %d %Y") ${MAINTAINER} - ${VERSION}-${RELEASE}
- Initial package
EOF

# Create tarball of the application
tar -czf "${RPMBUILD_DIR}/SOURCES/${APP_NAME}-${VERSION}.tar.gz" -C "${BUILDROOT}" .

# Build the RPM package
rpmbuild -ba "${SPEC_FILE}"