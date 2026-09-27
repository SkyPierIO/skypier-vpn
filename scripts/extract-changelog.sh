#!/usr/bin/env bash
#
# Prints the body of a single version section from CHANGELOG.md, e.g.:
#   scripts/extract-changelog.sh 0.2.0
# matches a heading of "## [0.2.0]" or "## [v0.2.0]" (with or without the
# leading "v", so it works for both the old and new tag naming conventions),
# stopping at the next "## [" heading or the link-reference footer.
#
# Pre-release versions fall back to the base version's section, so tagging
# v0.2.0-rc1 reuses the "## [0.2.0]" notes and release candidates do not each
# need their own changelog entry.

set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <version>" >&2
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CHANGELOG="${CHANGELOG:-${ROOT_DIR}/CHANGELOG.md}"
VERSION="${1#v}"
BASE_VERSION="${VERSION%%-*}"

if [[ ! -f "${CHANGELOG}" ]]; then
  echo "error: changelog file not found: ${CHANGELOG}" >&2
  exit 1
fi

extract_section() {
  awk -v ver="$1" '
    BEGIN { found = 0 }
    /^## \[/ {
      if (found) exit
      heading = $0
      gsub(/^## \[v?/, "", heading)
      sub(/\].*/, "", heading)
      if (heading == ver) { found = 1 }
      next
    }
    found && /^\[[^]]+\]:/ { exit }
    found { print }
  ' "${CHANGELOG}" |
    # Trim leading and trailing blank lines.
    sed -e '/./,$!d' -e ':a' -e '/^\n*$/{$d;N;ba' -e '}'
}

SECTION="$(extract_section "${VERSION}")"

if [[ -z "${SECTION}" && "${BASE_VERSION}" != "${VERSION}" ]]; then
  SECTION="$(extract_section "${BASE_VERSION}")"
  if [[ -n "${SECTION}" ]]; then
    echo "note: no section for '${VERSION}', using '${BASE_VERSION}' notes." >&2
  fi
fi

if [[ -z "${SECTION}" ]]; then
  echo "error: no changelog section found for version '${VERSION}' in ${CHANGELOG}" >&2
  echo "Add a '## [${BASE_VERSION}]' heading before tagging." >&2
  exit 1
fi

printf '%s\n' "${SECTION}"
