#!/usr/bin/env bash

# Requires gh, jq

version=$1
npm_patch="${2:-0}"

if [ -z "$version" ]; then
  echo "Expected version"
  exit 1
fi

td_major=$(echo $version | cut -d '.' -f 1)
td_minor=$(printf "%03d\n" $(echo $version | cut -d '.' -f 2))
td_patch=$(printf "%03d\n" $(echo $version | cut -d '.' -f 3))

npm_version="0.$td_major$td_minor$td_patch.$npm_patch"

commit=$(gh search commits "Update version to $version" -R tdlib/td --json sha --jq '.[0].sha')

if [ -z "$commit" ]; then
  echo "Cannot find version $version"
  exit 1
fi

command="gh workflow run prebuilt-tdlib.yml --ref develop -f tdlib=$commit -f npm-version=$npm_version"

echo "TDLib commit: https://github.com/tdlib/td/commit/$commit"
echo "Command: $command"
read -p "Run? (Ctrl-c or n to exit) " answer
case $answer in
  [nN] ) exit ;;
  * ) eval $command ;;
esac
