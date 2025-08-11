#!/bin/sh
# Should be executed with project root as the cwd
exec npx tdl-install-types -o typings/tdlib-types.d.ts --flow prebuilt-tdlib
