#!/usr/bin/env bash

# Should be executed with project root as the cwd

if [ -z "$1" ]; then
  echo "Expected an argument"
  exit 1
fi

npx tdl-install-types -o typings/tdlib-types.d.ts --flow $1
