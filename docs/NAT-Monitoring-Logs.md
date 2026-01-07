# NAT Traversal and Hole Punching Monitoring

## Overview

Skypier VPN now includes comprehensive logging for NAT traversal, AutoNAT detection, and hole punching events. This helps diagnose connection issues and understand how peers are connecting to your node.

## New Log Components

Two new log components have been added:

- `[NAT]` - AutoNAT status and reachability monitoring
- `[HOLEPUNCH]` - Connection establishment methods and hole punching monitoring

## Log Examples

### Node Startup

When your node starts, you'll see:

```
[INF] [NAT      ] AutoNAT monitoring started
[INF] [HOLEPUNCH] Connection monitoring started
```

### If Your Node is Publicly Reachable

After ~5 seconds, you'll see one of these:

```
[INF] [NAT      ] ✓ Node appears PUBLICLY reachable (has public addresses)
[DBG] [NAT      ] Public address detected: /ip4/203.0.113.45/udp/4002/quic-v1
```

### If Your Node is Behind NAT

```
[WRN] [NAT      ] ⚠ Node appears behind NAT/firewall (only private addresses)
[INF] [NAT      ] Hole punching or relay will be used for incoming connections
```

### Connection Methods

When peers connect, you'll see different messages based on the connection method:

#### Direct QUIC Connection (Outbound)

```
[INF] [HOLEPUNCH] ✓ DIRECT outbound QUIC connection to peer 16Uiu2HAm...
[DBG] [HOLEPUNCH]   └─ Local: /ip4/192.168.1.100/udp/4002/quic-v1
[DBG] [HOLEPUNCH]   └─ Remote: /ip4/203.0.113.45/udp/4002/quic-v1
```

#### Direct QUIC Connection (Inbound - Hole Punch Success!)

```
[INF] [HOLEPUNCH] ✓ DIRECT inbound QUIC connection from peer 16Uiu2HAm...
[DBG] [HOLEPUNCH]   └─ Peer successfully connected to us (hole punch or public)
[DBG] [HOLEPUNCH]   └─ Local: /ip4/192.168.1.100/udp/4002/quic-v1
[DBG] [HOLEPUNCH]   └─ Remote: /ip4/198.51.100.23/udp/54321/quic-v1
```

This indicates successful hole punching or that your node is publicly reachable!

#### Relayed Connection (Hole Punch Failed)

```
[INF] [HOLEPUNCH] 🔄 RELAYED connection established with peer 16Uiu2HAm...
[DBG] [HOLEPUNCH]   └─ via circuit relay: /ip4/147.75.77.187/tcp/4001/p2p/QmNnoo.../p2p-circuit
```

This means direct connection failed and traffic is going through a relay server.

#### TCP Connection

```
[INF] [HOLEPUNCH] ✓ DIRECT outbound TCP connection to peer 16Uiu2HAm...
[DBG] [HOLEPUNCH]   └─ Local: /ip4/192.168.1.100/tcp/4001
[DBG] [HOLEPUNCH]   └─ Remote: /ip4/203.0.113.45/tcp/4001
```

#### Resource-Limited Connection

```
[INF] [HOLEPUNCH] ✓ DIRECT outbound QUIC connection to peer 16Uiu2HAm...
[WRN] [HOLEPUNCH]   └─ ⚠ Connection is RATE LIMITED by resource manager
```

This means the connection is being throttled due to resource constraints.

### Peer Disconnection

```
[DBG] [HOLEPUNCH] Peer disconnected: 16Uiu2HAm...
```

## Interpreting the Logs

### What Success Looks Like

**Best Case: Public Node**
```
[INF] [NAT      ] ✓ Node appears PUBLICLY reachable
[INF] [HOLEPUNCH] ✓ DIRECT inbound QUIC connection from peer 16Uiu2H...
```

**Good Case: NAT with Working Hole Punching**
```
[WRN] [NAT      ] ⚠ Node appears behind NAT/firewall
[INF] [HOLEPUNCH] ✓ DIRECT inbound QUIC connection from peer 16Uiu2H...
[DBG] [HOLEPUNCH]   └─ Peer successfully connected to us (hole punch or public)
```

### What Problems Look Like

**All Connections are Relayed**
```
[WRN] [NAT      ] ⚠ Node appears behind NAT/firewall
[INF] [HOLEPUNCH] 🔄 RELAYED connection established with peer 16Uiu2H...
[INF] [HOLEPUNCH] 🔄 RELAYED connection established with peer 16Uiu2H...
```

This indicates:
- Hole punching is not working
- You're behind a strict/symmetric NAT
- All traffic is routed through relay servers (slower)

**Solutions:**
1. Enable UPnP on your router
2. Set up port forwarding (UDP port 4002)
3. Check firewall settings

## Log Levels

Use different log levels to control verbosity:

- `LogLevel: "error"` - Only errors
- `LogLevel: "warn"` - Errors and warnings (NAT warnings, relay usage)
- `LogLevel: "info"` - Normal operation (connection established messages) **[Recommended]**
- `LogLevel: "debug"` - Detailed information (addresses, periodic checks)

Set in `/etc/skypier/config.json`:

```json
{
  "LogLevel": "info"
}
```

## Monitoring in Real-Time

To see only NAT and connection logs:

```bash
sudo /usr/local/bin/skypier-vpn | grep -E '\[NAT|HOLEPUNCH\]'
```

Or to see all connection-related logs:

```bash
sudo /usr/local/bin/skypier-vpn | grep -E '\[NAT|HOLEPUNCH|WATCHER\]'
```

## Troubleshooting NAT Issues

### Check Current Status

1. Start your node
2. Wait 5-10 seconds
3. Look for the NAT status message

### If You See "Behind NAT" but Want Direct Connections

1. **Enable UPnP on your router** (easiest)
2. **Set up port forwarding:**
   - Forward UDP port 4002 to your node's internal IP
   - Some nodes may also use TCP port 4001
3. **Check your node's addresses:**
   ```bash
   # Look for public IP addresses in the node startup logs
   grep "Listening on addresses" /var/log/skypier.log
   ```

### If All Connections are Relayed

This means hole punching isn't working. Check:

1. Your NAT type (use online NAT type detection tools)
2. Whether UPnP is enabled on your router
3. Firewall rules blocking UDP traffic
4. If you're behind multiple layers of NAT (e.g., ISP + home router)

Symmetric NAT is the most restrictive and often requires relay connections.

## Performance Impact

**Direct Connections (Best):**
- Lowest latency
- Highest throughput
- No relay overhead

**Relayed Connections (Fallback):**
- Higher latency (+50-200ms)
- Lower throughput (bandwidth shared with relay)
- Depends on relay server performance

The logs will help you identify which peers are using relays so you can optimize your network setup.
