// @flow

const path = require('path')
const fs = require('fs')
const { prebuilds } = require('./prebuild-list')

const SCOPE = '@prebuilt-tdlib'

/*::
export type Options = {
  +forceLibc?: 'glibc' | 'musl'
}
*/

let libcNameCache = null

function detectLibc ()/*: 'glibc' | 'musl' */ {
  // This function can return false results: it currently only checks for
  // Alpine Linux as a heuristic (the same approach is used by node-gyp-build).
  if (libcNameCache != null) return libcNameCache
  let result = 'glibc'
  try {
    if (fs.existsSync('/etc/alpine-release'))
      result = 'musl'
  } catch (e) {
    // Intentionally empty (defaults to 'glibc')
  }
  libcNameCache = result
  return result
}

exports.getTdjson = function getTdjson (options/*:: ?: Options */)/*: string */ {
  let { platform, arch } = process
  if (platform === 'android') platform = 'linux'
  const libc = options?.forceLibc || (platform === 'linux' ? detectLibc() : null)
  for (const prebuild of prebuilds) {
    if (prebuild.requirements.os != null)
      if (!prebuild.requirements.os.includes(platform)) continue
    if (prebuild.requirements.cpu != null)
      if (!prebuild.requirements.cpu.includes(arch)) continue
    if (prebuild.libc != null && prebuild.libc !== libc) continue
    // Found a prebuild for the current platform
    const pkg = `${SCOPE}/${prebuild.packageName}/${prebuild.libfile}`
    try {
      return require.resolve(pkg)
    } catch (e) {
      throw new Error(`Could not load ${pkg} (are optionalDependencies installed?): ${e?.message}`)
    }
  }
  let entirePlatform = `${platform}-${arch}`
  if (libc != null) entirePlatform += '-' + libc
  throw new Error(`The ${entirePlatform} platform is not supported`)
}
