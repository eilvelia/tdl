// @flow

const path = require('path')

// For now, the `Options` object is present for forward compatibility.
/*::
export type Options = {
  // Can be 'glibc' | 'musl' in the future
  libc: 'glibc'
} */

function prebuild (pathcomps/*: string[] */) {
  return path.resolve(__dirname, 'prebuilds', ...pathcomps)
}

// eslint-disable-next-line no-unused-vars
function getTdjson (options/*:: ?: Options */)/*: string */ {
  if (process.arch !== 'x64')
    throw new Error(`The ${process.arch} architecture is not supported`)
  switch (process.platform) {
    case 'win32': return prebuild(['tdlib-windows-x64', 'tdjson.dll'])
    case 'darwin': return prebuild(['tdlib-macos-x64', 'libtdjson.dylib'])
    case 'linux': return prebuild(['tdlib-linux-x64', 'libtdjson.so'])
    case 'android': return prebuild(['tdlib-linux-x64', 'libtdjson.so'])
    default: throw new Error(`The ${process.platform} OS is not supported`)
  }
}

module.exports = { getTdjson }
