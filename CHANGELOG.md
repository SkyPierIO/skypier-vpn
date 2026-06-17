# Changelog

All notable changes to Skypier VPN are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Highlights

This release reworks the VPN data plane around wireguard-go's batched TUN API
and a new batched data pump, delivering roughly a **6x throughput improvement**
over the previous per-packet path. It also fixes a stream desynchronisation in
the IP negotiation handshake that the new pump exposed.

> **Upgrade note:** both the node and the client binaries must run this version.
> The negotiation fix lives on the server (node) side, and the data plane only
> realises its full gains when both ends speak the batched path.

### Added

- **wireguard-go TUN backend (`wg-tun`).** TUN interfaces are now created and
  driven through `golang.zx2c4.com/wireguard/tun` on both the node and the
  client binaries, replacing the previous single-packet read/write interface.
  The wireguard-go device exposes a *batched* `[][]byte` API and enables the
  kernel's segmentation offloads (`IFF_VNET_HDR` / GSO / GRO):
  - **GRO on read** — the kernel coalesces many consecutive TCP/UDP segments
    into one large "super-packet" that we pull up in a *single* `read()`
    syscall instead of one syscall per ~1400-byte packet.
  - **GSO on write** — packets handed back to the kernel in a batch are
    re-coalesced (`handleGRO`) into a single GSO super-packet, which the NIC
    re-segments via TSO. One `write()` syscall replaces dozens.
  - Net effect: far fewer syscalls and far less per-packet stack traversal on a
    bulk transfer, which is where the ~6x end-to-end throughput gain comes from.
  - New `WGTunDevice.ReadBatch` / `WriteBatch` wrap the device's batch API and
    handle the benign `ErrTooManySegments` case, plus the 10-byte
    `virtio_net_hdr` headroom required by the offload path.

- **Batched data pump (`datapump.go`).** The two copy loops that move packets
  between the TUN and the libp2p stream were replaced by
  `pumpTunToStream` / `pumpStreamToTun`:
  - **TUN → stream:** batch-reads up to 128 packets in one syscall, frames them
    all (4-byte length prefix + payload) into a *single* buffer, and writes that
    buffer to the stream in **one** call. Previously a GSO super-packet was
    exploded into dozens of individual segments, each sent as its own stream
    write.
  - **stream → TUN:** reads length-prefixed packets through a 256 KB buffered
    reader, accumulates everything that arrived in the same transport read
    (using `bufio.Buffered()` so lone packets add no latency), and **batch-writes**
    them to the TUN — letting the kernel re-coalesce them via GSO.
  - The on-wire framing is unchanged (4-byte big-endian length prefix per
    packet), so the format stays interoperable; we simply stop fragmenting one
    kernel batch into many tiny socket frames.

### Changed

- **IP negotiation protocol.** The server side of `NegotiateIPs` now **drains
  the client's negotiation message** from the stream before handing the
  connection to the data pump. Previously the server sent its reply and returned
  without ever reading the client's message, leaving those bytes in the receive
  buffer.
  - The drain is bounded by a 10-second read deadline so a client that opens a
    stream but never sends cannot wedge the handler goroutine; the deadline is
    cleared before the data pump starts.
  - This is wire-compatible: the client already sent the message; the server
    just consumes it now.

- **Logging.** Removed emoji from the hot-path data-plane logs and dropped the
  per-packet "N bytes copied" lines that flooded the output during transfers;
  error logs now include the peer ID for correlation.

### Fixed

- **Stream desync / `EOF` during IP negotiation.** Because the server left the
  client's negotiation message unread (see above), the new pump read its first
  bytes (`{"Lo`...) as a packet length prefix, got a garbage length, and tore
  the stream down — which the client observed as an `EOF` mid-negotiation
  (`Error reading IP negotiation response: EOF`, then `stream reset (remote)`).
  Draining the message on the server keeps the stream aligned for the pump. This
  latent desync also existed under the old pump, which silently masked it as a
  tolerated `short buffer` (likely corrupting the first packets of each
  connection).

- **`too many segments` log spam / packet loss.** With wireguard-go's GRO
  enabled, reading a GSO super-packet into a single buffer returned
  `ErrTooManySegments` and dropped all but the first segment, producing a flood
  of `Error copying data: too many segments` lines and silent packet loss. The
  batched read path provides enough buffers to receive the whole super-packet.

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

[Unreleased]: https://github.com/SkyPierIO/skypier-vpn/compare/0.1.0...HEAD
[0.1.0]: https://github.com/SkyPierIO/skypier-vpn/compare/0.0.2...0.1.0
[0.0.2]: https://github.com/SkyPierIO/skypier-vpn/compare/0.0.1...0.0.2
[0.0.1]: https://github.com/SkyPierIO/skypier-vpn/releases/tag/0.0.1
