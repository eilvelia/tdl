// @flow
const fs = require('fs')
const path = require('path')

const FL = path.join(__dirname, 'tdlib.js.flow.sample')
const TS = path.join(__dirname, 'tdlib.d.ts.sample')

const copy = p => {
  fs.copyFileSync(FL, path.join(__dirname, ...p, 'index.js.flow'))
  fs.copyFileSync(TS, path.join(__dirname, ...p, 'index.d.ts'))
}

copy(['packages', 'tdl-tdlib-ffi'])
copy(['packages', 'tdl-tdlib-wasm'])
