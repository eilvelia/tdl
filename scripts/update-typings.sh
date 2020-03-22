#!/bin/bash
set -e
_gen=packages/tdlib-typings
_types=packages/tdl/types
node $_gen/download-td-api-tl.js $1
node $_gen/dist $_gen/td_api.tl > $_types/tdlib.js
node $_gen/dist $_gen/td_api.tl --ts > $_types/tdlib.d.ts
