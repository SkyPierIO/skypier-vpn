#!/usr/bin/env bash
#
# Prints the body of a single version section from CHANGELOG.md, e.g.:
#   scripts/extract-changelog.sh 0.1.1
# matches a heading of "## [0.1.1]" or "## [v0.1.1]" (with or without the
# leading "v", so it works for both the old and new tag naming conventions),
# stopping at the next "## [" heading.

set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <version>" >&2
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CHANGELOG="${CHANGELOG:-${ROOT_DIR}/CHANGELOG.md}"
VERSION="${1#v}"

if [[ ! -f "${CHANGELOG}" ]]; then
  echo "error: changelog file not found: ${CHANGELOG}" >&2
  exit 1
fi

SECTION="$(awk -v ver="${VERSION}" '
  BEGIN { found = 0 }
  /^## \[/ {
    if (found) exit
    heading = $0
    gsub(/^## \[v?/, "", heading)
    sub(/\].*/, "", heading)
    if (heading == ver) { found = 1; next }
    next
  }
  found && /^\[[^]]+\]:/ { exit }
  found { print }
' "${CHANGELOG}")"

# Trim leading/trailing blank lines.
SECTION="$(printf '%s\n' "${SECTION}" | sed -e '/./,$!d' -e ':a' -e '/^\n*$/{$d;N;ba' -e '}')"

if [[ -z "${SECTION}" ]]; then
  echo "error: no changelog section found for version '${VERSION}' in ${CHANGELOG}" >&2
  echo "Add a '## [${VERSION}]' (or '## [v${VERSION}]') heading before tagging." >&2
  exit 1
fi

printf '%s\n' "${SECTION}"
