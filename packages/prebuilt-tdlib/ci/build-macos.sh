#!/usr/bin/env bash

set -eo pipefail

tdlib=$1

if [ -z "$tdlib" ]; then
  echo "Not enough arguments: expected TDLib rev"
  exit 1
fi

set -x

nix-build -v -E "(import <nixpkgs> { }).callPackage ./tdlib.nix { rev = \"$tdlib\"; }"

mkdir to-upload
cp -L ./result/lib/libtdjson.dylib to-upload/libtdjson.dylib
cd to-upload

install_name_tool -id @rpath/libtdjson.dylib libtdjson.dylib
install_name_tool -change \
  "$(otool -L libtdjson.dylib | grep -o '/nix/store.*libc++.*.dylib')" \
  '/usr/lib/libc++.1.dylib' \
  libtdjson.dylib

codesign -s - --force libtdjson.dylib

# Info
otool -L libtdjson.dylib
otool -l libtdjson.dylib

if [ -z "$GITHUB_ENV" ]; then
  echo "Note: GITHUB_ENV not found"
  exit
fi

# Resulting directory
echo "TO_UPLOAD=$(pwd)" >> $GITHUB_ENV
