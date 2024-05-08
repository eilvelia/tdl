#!/usr/bin/env bash

# Requires gh, jq

version=$1
npm_patch="${2:-0}"

if [ -z "$version" ]; then
  echo "Not enough arguments: expected TDLib version"
  exit 1
fi

commit=$(gh search commits "Update version to $version" -R tdlib/td --json sha --jq '.[0].sha')

if [ -z "$commit" ]; then
  echo "Cannot find version $version"
  exit 1
fi

command="gh workflow run prebuilt-tdlib.yml --ref develop -f tdlib=$commit -f npm-patch=$npm_patch"

echo "TDLib commit: https://github.com/tdlib/td/commit/$commit"
echo "Command: $command"
read -p "Run? (Ctrl-c or n to exit) " answer
case $answer in
  [nN] ) exit ;;
  * ) eval $command ;;
esac
