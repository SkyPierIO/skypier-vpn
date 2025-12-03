package utils

import (
	"fmt"
	"log"
	"os"
	"sync"
)

// ANSI color codes for terminal output
const (
	ColorReset   = "\033[0m"
	ColorRed     = "\033[31m"
	ColorGreen   = "\033[32m"
	ColorYellow  = "\033[33m"
	ColorBlue    = "\033[34m"
	ColorMagenta = "\033[35m"
	ColorCyan    = "\033[36m"
	ColorWhite   = "\033[37m"
	ColorGray    = "\033[90m"

	// Bold variants
	ColorBoldRed     = "\033[1;31m"
	ColorBoldGreen   = "\033[1;32m"
	ColorBoldYellow  = "\033[1;33m"
	ColorBoldBlue    = "\033[1;34m"
	ColorBoldMagenta = "\033[1;35m"
	ColorBoldCyan    = "\033[1;36m"
	ColorBoldWhite   = "\033[1;37m"

	// Background colors
	ColorBgRed    = "\033[41m"
	ColorBgGreen  = "\033[42m"
	ColorBgYellow = "\033[43m"
	ColorBgBlue   = "\033[44m"
)

// LogLevel represents the severity of a log message
type LogLevel int

const (
	LogLevelDebug LogLevel = iota
	LogLevelInfo
	LogLevelWarn
	LogLevelError
)

// Component represents different parts of the application
type Component string

const (
	ComponentP2P       Component = "P2P"
	ComponentStream    Component = "STREAM"
	ComponentConnMgr   Component = "CONNMGR"
	ComponentTUN       Component = "TUN"
	ComponentRoute     Component = "ROUTE"
	ComponentDHT       Component = "DHT"
	ComponentAPI       Component = "API"
	ComponentVPN       Component = "VPN"
	ComponentDiscovery Component = "DISCOVER"
	ComponentNegotiate Component = "NEGOTIATE"
	ComponentCrypto    Component = "CRYPTO"
	ComponentWatcher   Component = "WATCHER"
)

// componentColors maps components to their display colors
var componentColors = map[Component]string{
	ComponentP2P:       ColorBoldCyan,
	ComponentStream:    ColorBoldGreen,
	ComponentConnMgr:   ColorBoldMagenta,
	ComponentTUN:       ColorBoldBlue,
	ComponentRoute:     ColorYellow,
	ComponentDHT:       ColorCyan,
	ComponentAPI:       ColorBoldWhite,
	ComponentVPN:       ColorBoldGreen,
	ComponentDiscovery: ColorMagenta,
	ComponentNegotiate: ColorBlue,
	ComponentCrypto:    ColorGray,
	ComponentWatcher:   ColorBoldYellow,
}

// levelColors maps log levels to their display colors
var levelColors = map[LogLevel]string{
	LogLevelDebug: ColorGray,
	LogLevelInfo:  ColorWhite,
	LogLevelWarn:  ColorYellow,
	LogLevelError: ColorBoldRed,
}

// levelLabels maps log levels to their display labels
var levelLabels = map[LogLevel]string{
	LogLevelDebug: "DBG",
	LogLevelInfo:  "INF",
	LogLevelWarn:  "WRN",
	LogLevelError: "ERR",
}

// Logger provides component-based colored logging
type Logger struct {
	component Component
	minLevel  LogLevel
}

var (
	// Global minimum log level
	globalMinLevel LogLevel = LogLevelDebug
	globalMutex    sync.RWMutex

	// Cached loggers for each component
	loggerCache = make(map[Component]*Logger)
	cacheMutex  sync.RWMutex

	// Whether to use colors (can be disabled for file output)
	useColors = true
)

func init() {
	// Disable colors if not a terminal
	if fileInfo, _ := os.Stdout.Stat(); (fileInfo.Mode() & os.ModeCharDevice) == 0 {
		useColors = false
	}
	// Check for NO_COLOR environment variable
	if os.Getenv("NO_COLOR") != "" {
		useColors = false
	}
}

// SetGlobalLogLevel sets the minimum log level for all loggers
func SetGlobalLogLevel(level LogLevel) {
	globalMutex.Lock()
	defer globalMutex.Unlock()
	globalMinLevel = level
}

// SetUseColors enables or disables colored output
func SetUseColors(enabled bool) {
	useColors = enabled
}

// NewLogger creates a new logger for a specific component
func NewLogger(component Component) *Logger {
	cacheMutex.Lock()
	defer cacheMutex.Unlock()

	if logger, exists := loggerCache[component]; exists {
		return logger
	}

	logger := &Logger{
		component: component,
		minLevel:  LogLevelDebug,
	}
	loggerCache[component] = logger
	return logger
}

// formatPrefix creates the colored prefix for log messages
func (l *Logger) formatPrefix(level LogLevel) string {
	globalMutex.RLock()
	minLevel := globalMinLevel
	globalMutex.RUnlock()

	if level < minLevel {
		return ""
	}

	componentColor := componentColors[l.component]
	if componentColor == "" {
		componentColor = ColorWhite
	}

	levelColor := levelColors[level]
	levelLabel := levelLabels[level]

	if useColors {
		// Format: [LEVEL] [COMPONENT] message
		return fmt.Sprintf("%s[%s]%s %s[%-8s]%s ",
			levelColor, levelLabel, ColorReset,
			componentColor, l.component, ColorReset)
	}
	return fmt.Sprintf("[%s] [%-8s] ", levelLabel, l.component)
}

// shouldLog checks if the message should be logged based on level
func (l *Logger) shouldLog(level LogLevel) bool {
	globalMutex.RLock()
	defer globalMutex.RUnlock()
	return level >= globalMinLevel
}

// Debug logs a debug message
func (l *Logger) Debug(format string, args ...interface{}) {
	if !l.shouldLog(LogLevelDebug) {
		return
	}
	prefix := l.formatPrefix(LogLevelDebug)
	log.Printf("%s%s", prefix, fmt.Sprintf(format, args...))
}

// Info logs an info message
func (l *Logger) Info(format string, args ...interface{}) {
	if !l.shouldLog(LogLevelInfo) {
		return
	}
	prefix := l.formatPrefix(LogLevelInfo)
	log.Printf("%s%s", prefix, fmt.Sprintf(format, args...))
}

// Warn logs a warning message
func (l *Logger) Warn(format string, args ...interface{}) {
	if !l.shouldLog(LogLevelWarn) {
		return
	}
	prefix := l.formatPrefix(LogLevelWarn)
	log.Printf("%s%s", prefix, fmt.Sprintf(format, args...))
}

// Error logs an error message
func (l *Logger) Error(format string, args ...interface{}) {
	if !l.shouldLog(LogLevelError) {
		return
	}
	prefix := l.formatPrefix(LogLevelError)
	log.Printf("%s%s", prefix, fmt.Sprintf(format, args...))
}

// Println logs a message at Info level (for compatibility with log.Println)
func (l *Logger) Println(args ...interface{}) {
	if !l.shouldLog(LogLevelInfo) {
		return
	}
	prefix := l.formatPrefix(LogLevelInfo)
	log.Printf("%s%s", prefix, fmt.Sprint(args...))
}

// Printf logs a formatted message at Info level (for compatibility with log.Printf)
func (l *Logger) Printf(format string, args ...interface{}) {
	l.Info(format, args...)
}

// Success logs a success message with a green checkmark
func (l *Logger) Success(format string, args ...interface{}) {
	if !l.shouldLog(LogLevelInfo) {
		return
	}
	prefix := l.formatPrefix(LogLevelInfo)
	if useColors {
		log.Printf("%s%s✓ %s%s", prefix, ColorGreen, fmt.Sprintf(format, args...), ColorReset)
	} else {
		log.Printf("%s✓ %s", prefix, fmt.Sprintf(format, args...))
	}
}

// Data logs data transfer information (for the frequent copy logs)
func (l *Logger) Data(direction string, bytes int64, format string, args ...interface{}) {
	if !l.shouldLog(LogLevelDebug) {
		return
	}
	prefix := l.formatPrefix(LogLevelDebug)
	msg := fmt.Sprintf(format, args...)
	if useColors {
		log.Printf("%s%s%s %d bytes%s %s", prefix, ColorGray, direction, bytes, ColorReset, msg)
	} else {
		log.Printf("%s%s %d bytes %s", prefix, direction, bytes, msg)
	}
}

// Separator prints a visual separator line
func (l *Logger) Separator() {
	if useColors {
		log.Println(ColorGray + "───────────────────────────────────────────────────" + ColorReset)
	} else {
		log.Println("───────────────────────────────────────────────────")
	}
}

// Pre-initialized loggers for common components (for convenience)
var (
	P2PLog       = NewLogger(ComponentP2P)
	StreamLog    = NewLogger(ComponentStream)
	ConnMgrLog   = NewLogger(ComponentConnMgr)
	TUNLog       = NewLogger(ComponentTUN)
	RouteLog     = NewLogger(ComponentRoute)
	DHTLog       = NewLogger(ComponentDHT)
	APILog       = NewLogger(ComponentAPI)
	VPNLog       = NewLogger(ComponentVPN)
	DiscoverLog  = NewLogger(ComponentDiscovery)
	NegotiateLog = NewLogger(ComponentNegotiate)
	CryptoLog    = NewLogger(ComponentCrypto)
	WatcherLog   = NewLogger(ComponentWatcher)
)
