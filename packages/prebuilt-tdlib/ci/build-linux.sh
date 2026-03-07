#!/usr/bin/env bash

set -euo pipefail

tdlib=${1:?not enough arguments: expected TDLib rev}
arch=${2:?not enough arguments: expected arch}
abi="${3:-gnu}"

if [ "$abi" = "gnu" ]; then
  libc_version="2.22"
else
  libc_version=""
fi

set -x

nix-build tdlib-zig-wrapper.nix -v \
  --argstr rev "$tdlib" \
  --argstr arch "$arch" \
  --argstr abi "$abi" \
  --argstr libcVersion "$libc_version"

mkdir to-upload
cp -L ./result/lib/libtdjson.so to-upload/libtdjson.so
cd to-upload

# Info
ldd libtdjson.so || true

if [ -z "${GITHUB_ENV:-}" ]; then
  echo "note: GITHUB_ENV not found"
  exit
fi

# Resulting directory
echo "TO_UPLOAD=$(pwd)" >> $GITHUB_ENV
