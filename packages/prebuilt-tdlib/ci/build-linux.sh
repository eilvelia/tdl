#!/usr/bin/env bash

set -eo pipefail

tdlib=$1
arch=$2
abi="${3:-gnu}"

if [ -z "$tdlib" ]; then
  echo "Not enough arguments: expected TDLib rev"
  exit 1
fi

if [ -z "$arch" ]; then
  echo "Not enough arguments: expected arch"
  exit 1
fi

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

if [ -z "$GITHUB_ENV" ]; then
  echo "Note: GITHUB_ENV not found"
  exit
fi

# Resulting directory
echo "TO_UPLOAD=$(pwd)" >> $GITHUB_ENV
