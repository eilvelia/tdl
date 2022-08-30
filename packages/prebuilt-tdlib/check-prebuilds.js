#!/usr/bin/env node
// @flow

const path = require('path')
const fs = require('fs')

function checkExists (pathparts) {
  const p = path.join(__dirname, 'prebuilds', ...pathparts)
  if (fs.existsSync(p)) return
  console.error(`'${p}' does not exist`)
  process.exit(1)
}

checkExists(['tdlib-linux-x64', 'libtdjson.so'])
checkExists(['tdlib-macos-x64', 'libtdjson.dylib'])
checkExists(['tdlib-windows-x64', 'tdjson.dll'])
