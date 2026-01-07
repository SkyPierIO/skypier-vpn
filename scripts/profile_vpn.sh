#!/bin/bash
# Skypier VPN Performance Profiling Script
# This script runs a complete performance test with profiling

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROFILING_PORT=${PROFILING_PORT:-6060}
API_PORT=${API_PORT:-8081}
VPN_IP=${VPN_IP:-10.1.1.1}
IPERF_DURATION=${IPERF_DURATION:-60}
PROFILE_DURATION=${PROFILE_DURATION:-30}
OUTPUT_DIR=${OUTPUT_DIR:-./profiling_results}

echo -e "${BLUE}=== Skypier VPN Performance Profiling ===${NC}"
echo ""

# Create output directory
mkdir -p "$OUTPUT_DIR"
cd "$OUTPUT_DIR"

# 1. Check profiling is enabled
echo -e "${YELLOW}1. Checking profiling endpoint...${NC}"
if curl -s http://localhost:$PROFILING_PORT/debug/pprof/ > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Profiling server is running on port $PROFILING_PORT${NC}"
else
    echo -e "${RED}✗ Profiling server not available${NC}"
    echo "  Please enable profiling in /etc/skypier/config.json:"
    echo '  {"enableProfiling": true, "profilingPort": 6060}'
    exit 1
fi

# 2. Check VPN status
echo ""
echo -e "${YELLOW}2. Checking VPN status...${NC}"
VPN_STATUS=$(curl -s http://localhost:$API_PORT/api/v0/status 2>/dev/null || echo "{}")
if echo "$VPN_STATUS" | grep -q "connected\|interface"; then
    echo -e "${GREEN}✓ VPN appears to be active${NC}"
    echo "$VPN_STATUS" | head -5
else
    echo -e "${RED}✗ VPN may not be connected${NC}"
    echo "  Connect via: curl http://localhost:$API_PORT/api/v0/connect/<PEER_ID>"
fi

# 3. Check if iperf3 is available
echo ""
echo -e "${YELLOW}3. Checking iperf3 availability...${NC}"
if ! command -v iperf3 &> /dev/null; then
    echo -e "${RED}✗ iperf3 not found${NC}"
    echo "  Install with: sudo apt-get install -y iperf3"
    exit 1
fi
echo -e "${GREEN}✓ iperf3 is installed${NC}"

# 4. Check if VPN peer is reachable
echo ""
echo -e "${YELLOW}4. Testing VPN connectivity to $VPN_IP...${NC}"
if ping -c 3 -W 2 $VPN_IP > /dev/null 2>&1; then
    echo -e "${GREEN}✓ VPN peer $VPN_IP is reachable${NC}"
else
    echo -e "${RED}✗ Cannot reach VPN peer at $VPN_IP${NC}"
    echo "  Make sure:"
    echo "    1. VPN is connected"
    echo "    2. Peer IP is correct (check with 'ip addr show tun0' or 'utun0')"
    echo "    3. Peer is running iperf3 server: iperf3 -s"
    exit 1
fi

# 5. Take baseline profiles
echo ""
echo -e "${YELLOW}5. Taking baseline profiles...${NC}"
echo "   - Heap snapshot..."
curl -s http://localhost:$PROFILING_PORT/debug/pprof/heap > heap_before.prof
echo -e "${GREEN}   ✓ Saved heap_before.prof${NC}"

echo "   - Goroutine snapshot..."
curl -s http://localhost:$PROFILING_PORT/debug/pprof/goroutine > goroutine_before.prof
echo -e "${GREEN}   ✓ Saved goroutine_before.prof${NC}"

# 6. Start iperf3 test in background
echo ""
echo -e "${YELLOW}6. Starting iperf3 bandwidth test (${IPERF_DURATION}s)...${NC}"
echo "   Target: $VPN_IP"
iperf3 -c $VPN_IP -t $IPERF_DURATION -J > iperf_results.json 2>&1 &
IPERF_PID=$!

# Wait for test to stabilize (warmup)
echo "   Warming up (10 seconds)..."
sleep 10

# 7. Capture CPU profile during traffic
echo ""
echo -e "${YELLOW}7. Capturing CPU profile (${PROFILE_DURATION}s during peak traffic)...${NC}"
echo "   This will take $PROFILE_DURATION seconds..."

# Save raw CPU profile
curl -s "http://localhost:$PROFILING_PORT/debug/pprof/profile?seconds=$PROFILE_DURATION" > cpu.prof
echo -e "${GREEN}   ✓ Saved cpu.prof${NC}"

# Generate text reports
echo "   Generating text reports..."
go tool pprof -text cpu.prof > cpu_profile_full.txt 2>/dev/null || echo "   (pprof text generation skipped)"
go tool pprof -top cpu.prof 2>/dev/null | head -30 > cpu_profile_top30.txt || echo "   (pprof top generation skipped)"

# 8. Wait for iperf to complete
echo ""
echo -e "${YELLOW}8. Waiting for iperf3 to complete...${NC}"
wait $IPERF_PID 2>/dev/null || true
echo -e "${GREEN}✓ Bandwidth test completed${NC}"

# 9. Take post-test profiles
echo ""
echo -e "${YELLOW}9. Taking post-test profiles...${NC}"
echo "   - Heap snapshot..."
curl -s http://localhost:$PROFILING_PORT/debug/pprof/heap > heap_after.prof
echo -e "${GREEN}   ✓ Saved heap_after.prof${NC}"

echo "   - Goroutine snapshot..."
curl -s http://localhost:$PROFILING_PORT/debug/pprof/goroutine > goroutine_after.prof
echo -e "${GREEN}   ✓ Saved goroutine_after.prof${NC}"

echo "   - Block profile..."
curl -s http://localhost:$PROFILING_PORT/debug/pprof/block > block.prof
echo -e "${GREEN}   ✓ Saved block.prof${NC}"

echo "   - Mutex profile..."
curl -s http://localhost:$PROFILING_PORT/debug/pprof/mutex > mutex.prof
echo -e "${GREEN}   ✓ Saved mutex.prof${NC}"

# 10. Generate analysis report
echo ""
echo -e "${YELLOW}10. Generating analysis report...${NC}"

REPORT_FILE="analysis_report.txt"

cat > "$REPORT_FILE" << 'EOF'
================================================================================
                    SKYPIER VPN PERFORMANCE ANALYSIS REPORT
================================================================================

EOF

echo "Generated: $(date)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Extract iperf3 results
echo "=== BANDWIDTH TEST RESULTS ===" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

if [ -f iperf_results.json ]; then
    # Parse JSON results
    SENT_BYTES=$(cat iperf_results.json | grep -o '"bytes":[0-9]*' | head -1 | cut -d: -f2)
    BPS=$(cat iperf_results.json | grep -o '"bits_per_second":[0-9.]*' | head -1 | cut -d: -f2)
    
    if [ ! -z "$BPS" ]; then
        MBPS=$(echo "scale=2; $BPS / 1000000" | bc)
        echo "Throughput: $MBPS Mbps" >> "$REPORT_FILE"
        echo "Bytes Transferred: $SENT_BYTES bytes" >> "$REPORT_FILE"
    else
        echo "Could not parse bandwidth results" >> "$REPORT_FILE"
    fi
    
    # Include full iperf output
    echo "" >> "$REPORT_FILE"
    echo "Full iperf3 output:" >> "$REPORT_FILE"
    cat iperf_results.json >> "$REPORT_FILE"
else
    echo "No iperf3 results found" >> "$REPORT_FILE"
fi

echo "" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# CPU Profile Analysis
echo "=== CPU PROFILE ANALYSIS ===" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Top CPU consumers:" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

if [ -f cpu_profile_top30.txt ]; then
    cat cpu_profile_top30.txt >> "$REPORT_FILE"
else
    echo "(CPU profile analysis not available)" >> "$REPORT_FILE"
fi

echo "" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Memory Analysis
echo "=== MEMORY ANALYSIS ===" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

if [ -f heap_after.prof ]; then
    echo "Top memory allocators:" >> "$REPORT_FILE"
    go tool pprof -top heap_after.prof 2>/dev/null | head -20 >> "$REPORT_FILE" || echo "(Memory analysis not available)" >> "$REPORT_FILE"
fi

echo "" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Goroutine Analysis
echo "=== GOROUTINE ANALYSIS ===" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

if [ -f goroutine_before.prof ] && [ -f goroutine_after.prof ]; then
    GOROUTINES_BEFORE=$(go tool pprof -raw goroutine_before.prof 2>/dev/null | grep -c "goroutine" || echo "?")
    GOROUTINES_AFTER=$(go tool pprof -raw goroutine_after.prof 2>/dev/null | grep -c "goroutine" || echo "?")
    
    echo "Goroutines before test: $GOROUTINES_BEFORE" >> "$REPORT_FILE"
    echo "Goroutines after test: $GOROUTINES_AFTER" >> "$REPORT_FILE"
    
    if [ "$GOROUTINES_AFTER" -gt "$GOROUTINES_BEFORE" ]; then
        LEAKED=$((GOROUTINES_AFTER - GOROUTINES_BEFORE))
        echo "⚠ Potential goroutine leak: +$LEAKED goroutines" >> "$REPORT_FILE"
    fi
fi

echo "" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Recommendations
echo "=== RECOMMENDATIONS ===" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Analyze CPU profile for common bottlenecks
if [ -f cpu_profile_full.txt ]; then
    if grep -qi "syscall" cpu_profile_full.txt; then
        echo "🔴 HIGH SYSCALL OVERHEAD DETECTED" >> "$REPORT_FILE"
        echo "   → Implement US-2.1: Batched Read/Write Operations" >> "$REPORT_FILE"
        echo "   → Expected improvement: 20-40% throughput increase" >> "$REPORT_FILE"
        echo "" >> "$REPORT_FILE"
    fi
    
    if grep -qi "crypto\|aes\|gcm" cpu_profile_full.txt; then
        echo "🟡 CRYPTO OVERHEAD DETECTED" >> "$REPORT_FILE"
        echo "   → Check CPU has AES-NI hardware acceleration" >> "$REPORT_FILE"
        echo "   → Consider US-3.2: Optimize Encryption" >> "$REPORT_FILE"
        echo "" >> "$REPORT_FILE"
    fi
    
    if grep -qi "mallocgc\|makeslice" cpu_profile_full.txt; then
        echo "🟡 MEMORY ALLOCATION OVERHEAD DETECTED" >> "$REPORT_FILE"
        echo "   → Implement US-2.2: Adaptive Buffer Sizing" >> "$REPORT_FILE"
        echo "   → Use sync.Pool for buffer reuse" >> "$REPORT_FILE"
        echo "" >> "$REPORT_FILE"
    fi
fi

echo "=== NEXT STEPS ===" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "1. Review this report and identify top bottlenecks" >> "$REPORT_FILE"
echo "2. Consult docs/UserStoriesOptimization.md for optimization tasks" >> "$REPORT_FILE"
echo "3. Implement highest-priority optimizations (US-2.1, US-2.3, US-3.1)" >> "$REPORT_FILE"
echo "4. Re-run this script to measure improvements" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "================================================================================

" >> "$REPORT_FILE"

echo -e "${GREEN}✓ Analysis report generated: $REPORT_FILE${NC}"

# 11. Summary
echo ""
echo -e "${BLUE}=== PROFILING COMPLETE ===${NC}"
echo ""
echo -e "${GREEN}Results saved in: $(pwd)${NC}"
echo ""
echo "Files created:"
echo "  📊 $REPORT_FILE           - Summary and recommendations"
echo "  📈 cpu.prof                        - Raw CPU profile"
echo "  📈 cpu_profile_top30.txt           - Top 30 CPU consumers"
echo "  🧠 heap_before.prof                - Memory before test"
echo "  🧠 heap_after.prof                 - Memory after test"
echo "  🔀 goroutine_before.prof           - Goroutines before test"
echo "  🔀 goroutine_after.prof            - Goroutines after test"
echo "  🔒 block.prof                      - Blocking operations"
echo "  🔐 mutex.prof                      - Mutex contention"
echo "  📶 iperf_results.json              - Bandwidth test results"
echo ""
echo -e "${YELLOW}Quick analysis:${NC}"
cat "$REPORT_FILE" | head -50
echo ""
echo -e "${YELLOW}Full report:${NC} cat $OUTPUT_DIR/$REPORT_FILE"
echo ""
echo -e "${YELLOW}Interactive analysis:${NC}"
echo "  CPU:  go tool pprof $OUTPUT_DIR/cpu.prof"
echo "  Heap: go tool pprof $OUTPUT_DIR/heap_after.prof"
echo ""
echo -e "${GREEN}✨ Happy profiling!${NC}"
