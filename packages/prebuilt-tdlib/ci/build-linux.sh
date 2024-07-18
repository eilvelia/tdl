#!/usr/bin/env bash

_tdlib=$1
_target="${2:-x86_64-linux-gnu.2.22}"

if [ -z "$_tdlib" ]; then
  echo "Not enough arguments: expected TDLib rev"
  exit 1
fi

set -ex

nix-build tdlib-linux.nix -v --argstr rev "$_tdlib" --argstr target "$_target"

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
