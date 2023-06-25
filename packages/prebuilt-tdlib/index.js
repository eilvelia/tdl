// @flow

const path = require('path')

// For now, the `Options` object is present for forward compatibility.
// TODO: Add an option like "fallback"?
/*::
export type Options = {
  // Can be 'glibc' | 'musl' in the future
  libc: 'glibc'
}
*/

function prebuild (pathcomps/*: string[] */) {
  return path.resolve(__dirname, 'prebuilds', ...pathcomps)
}

// eslint-disable-next-line no-unused-vars
function getTdjson (options/*:: ?: Options */)/*: string */ {
  const platform = process.platform + '-' + process.arch
  switch (platform) {
    case 'win32-x64': return prebuild(['tdlib-windows-x64', 'tdjson.dll'])
    case 'darwin-x64': return prebuild(['tdlib-macos', 'libtdjson.dylib'])
    case 'darwin-arm64': return prebuild(['tdlib-macos', 'libtdjson.dylib'])
    case 'linux-x64': return prebuild(['tdlib-linux-x64', 'libtdjson.so'])
    case 'android-x64': return prebuild(['tdlib-linux-x64', 'libtdjson.so'])
    default: throw new Error(`The ${platform} platform is not supported`)
  }
}

module.exports = { getTdjson }
