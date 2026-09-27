# Changelog

All notable changes to Skypier VPN are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2026-09-27

The VPN data plane now runs on wireguard-go's batched TUN API and a new batched
data pump. Throughput on bulk transfers is roughly 6x the previous per-packet
path. This release also fixes a stream desynchronisation in the IP negotiation
handshake that the new pump exposed.

> Upgrade note: both the node and the client must run this version. The
> negotiation fix is on the node side, and the data plane only reaches its full
> throughput when both ends use the batched path.

### Added

- wireguard-go TUN backend. TUN interfaces are created and driven through
  `golang.zx2c4.com/wireguard/tun` on both the node and the client, replacing
  the previous single-packet read/write interface. The device exposes a batched
  `[][]byte` API and enables the kernel's segmentation offloads (`IFF_VNET_HDR`,
  GSO, GRO):
  - GRO on read: the kernel coalesces consecutive TCP/UDP segments into one
    super-packet, pulled up in a single `read()` syscall instead of one syscall
    per 1400-byte packet.
  - GSO on write: packets handed back to the kernel in a batch are re-coalesced
    (`handleGRO`) into a single GSO super-packet, which the NIC re-segments via
    TSO. One `write()` syscall replaces dozens.
  - `WGTunDevice.ReadBatch` and `WriteBatch` wrap the device's batch API, handle
    the benign `ErrTooManySegments` case, and reserve the 10-byte
    `virtio_net_hdr` headroom the offload path requires.

- Batched data pump (`pkg/vpn/datapump.go`). The two copy loops that move
  packets between the TUN and the libp2p stream are replaced by
  `pumpTunToStream` and `pumpStreamToTun`:
  - TUN to stream: batch-reads up to 128 packets in one syscall, frames them all
    (4-byte big-endian length prefix plus payload) into a single buffer, and
    writes that buffer to the stream in one call. Previously a GSO super-packet
    was split into dozens of segments, each sent as its own stream write.
  - Stream to TUN: reads length-prefixed packets through a 256 KB buffered
    reader, accumulates everything that arrived in the same transport read
    (`bufio.Buffered()`, so lone packets add no latency), and batch-writes them
    to the TUN for the kernel to re-coalesce via GSO.
  - The on-wire framing is unchanged, so the format stays interoperable with
    peers running the older single-packet pump.

### Changed

- IP negotiation. The node side of `NegotiateIPs` now drains the client's
  negotiation message from the stream before handing the connection to the data
  pump. Previously the node sent its reply and returned without reading the
  client's message, leaving those bytes in the receive buffer. The drain is
  bounded by a 10-second read deadline so a client that opens a stream but never
  sends cannot wedge the handler goroutine, and the deadline is cleared before
  the pump starts. This is wire-compatible, since the client already sent the
  message.

- Logging. Removed emoji from the hot-path data-plane logs and dropped the
  per-packet "N bytes copied" lines that flooded output during transfers. Error
  logs now include the peer ID.

### Fixed

- Stream desync and `EOF` during IP negotiation. Because the node left the
  client's negotiation message unread, the new pump read its first bytes
  (`{"Lo`) as a packet length prefix, got a garbage length, and tore the stream
  down. The client saw this as `Error reading IP negotiation response: EOF`
  followed by a remote stream reset. Draining the message on the node keeps the
  stream aligned for the pump. The desync also existed under the old pump, which
  masked it as a tolerated `short buffer` and likely corrupted the first packets
  of each connection.

- `too many segments` log spam and packet loss. With GRO enabled, reading a GSO
  super-packet into a single buffer returned `ErrTooManySegments` and dropped
  all but the first segment, producing repeated `Error copying data: too many
  segments` lines and silent packet loss. The batched read path provides enough
  buffers to receive the whole super-packet.

### Packaging

- Releases are built and published automatically when a `v*.*.*` tag is pushed.
  Each release carries Debian packages and macOS disk images for amd64 and
  arm64, plus the notes for that version taken from this file.
- The Debian and macOS packaging scripts now cross-compile, so `ARCH` and
  `GOARCH` select the target architecture instead of only labelling the package.

## [0.1.0] - 2024-11-16

First Minimum Viable Product (MVP) of the libp2p-based decentralized VPN.
Released for Linux amd64, macOS amd64, and macOS arm64 (Apple M series).

> Note: the macOS dmg is not yet signed or notarized.

### Added

- **VPN node ranking by geolocation.** Find and connect to the best VPN nodes
  based on their geographical location.
- **Disconnection control.** Disconnect from the VPN in a single action.
- **Quit program control.** Exit the Skypier VPN application from the UI.
- **Node bookmarks.** Save favorite VPN nodes for quick access.
- **Geolocation test.** Verify that the client IP is hidden.
- **Wallet authentication and NFT subscription checking.** Authenticate with a
  wallet and check NFT subscription status.
- **Peer data cache.** Cache per-peer data such as peer ID, IP address, and
  status to reduce network load.
- **Node discovery.** Enable libp2p node discovery for improved DHT querying.
- **Resource and connection manager.** Bound resource usage and the number of
  connections instantiated on the P2P network.

### Changed

- **Reduced XHR requests.** Adopted Metamask Jazzicons to cut calls to a
  third-party API.

## [0.0.2] - 2024-11-03

Pre-release of the libp2p-based decentralized VPN MVP.
Released for Linux amd64, macOS amd64, and macOS arm64 (Apple M series).

> Note: the macOS dmg is not yet signed or notarized.

### Added

- **VPN node ranking by geolocation.** Find and connect to the best VPN nodes
  based on their geographical location.
- **Disconnection control.** Disconnect from the VPN in a single action.
- **Quit program control.** Exit the Skypier VPN application from the UI.
- **Node bookmarks.** Save favorite VPN nodes for quick access.
- **Geolocation test.** Verify that the client IP is hidden.
- **Wallet authentication and NFT subscription checking.** Authenticate with a
  wallet and check NFT subscription status.
- **Node discovery.** Enable libp2p node discovery for improved DHT querying.
- **Resource and connection manager.** Bound resource usage and the number of
  connections instantiated on the P2P network.

## [0.0.1] - 2024-05-14

Initial pre-release of Skypier VPN.

[Unreleased]: https://github.com/SkyPierIO/skypier-vpn/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/SkyPierIO/skypier-vpn/compare/0.1.0...v0.2.0
[0.1.0]: https://github.com/SkyPierIO/skypier-vpn/compare/0.0.2...0.1.0
[0.0.2]: https://github.com/SkyPierIO/skypier-vpn/compare/0.0.1...0.0.2
[0.0.1]: https://github.com/SkyPierIO/skypier-vpn/releases/tag/0.0.1
