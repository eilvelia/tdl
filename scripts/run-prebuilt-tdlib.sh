#!/usr/bin/env bash
# Requires gh, jq

set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Too few arguments: expected TDLib version"
  exit 1
fi

version=$1
npm_patch="${2:-0}"

if [ "$version" = "latest" ]; then
  commit=$(gh api repos/tdlib/td/commits)
else
  commit=$(gh search commits "Update version to $version" -R tdlib/td --json commit,sha)
fi

if [ "$commit" = "[]" ]; then
  echo "Cannot find version $version"
  exit 1
fi

message=$(echo $commit | jq -r '.[0].commit.message')
sha=$(echo $commit | jq -r '.[0].sha')

command="gh workflow run prebuilt-tdlib.yml --ref develop -f tdlib=$sha -f npm-patch=$npm_patch"

echo "TDLib commit: https://github.com/tdlib/td/commit/$sha"
echo "Message: \"$message\""
echo "Command: $command"
read -p "Run? (Ctrl-c or n to exit) " answer
case $answer in
  [nN] ) exit ;;
  * ) eval $command ;;
esac
