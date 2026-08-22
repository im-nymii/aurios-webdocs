#!/usr/bin/env bash
# Pull the documentation markdown from the Auri-OS/docs repository into _docs/
# so the site can be previewed locally. The content itself lives in:
#   https://github.com/Auri-OS/docs
set -euo pipefail

REPO="https://github.com/Auri-OS/docs.git"
BRANCH="main"
DEST="_docs"

cd "$(dirname "$0")/.."

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

echo "Fetching docs content from $REPO ($BRANCH)…"
git clone --depth 1 --branch "$BRANCH" "$REPO" "$tmp"

mkdir -p "$DEST"
rm -f "$DEST"/*.md
cp "$tmp"/*.md "$DEST"/

echo "Done. $(ls "$DEST"/*.md | wc -l | tr -d ' ') markdown files synced into $DEST/."
