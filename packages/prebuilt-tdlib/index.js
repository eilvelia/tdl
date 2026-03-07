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

let cachedLibc/*: null | 'glibc' | 'musl' */ = null

function readBinaryHead (filePath/*: string */)/*: Buffer | null */ {
  let fd
  try {
    fd = fs.openSync(filePath, 'r')
    const buf = Buffer.alloc(2048)
    const n = fs.readSync(fd, buf, 0, 2048, 0)
    return buf.subarray(0, n)
  } catch (e) {
    return null
  } finally {
    if (fd !== undefined) try { fs.closeSync(fd) } catch (e) { /* empty */ }
  }
}

// Extracted from https://github.com/lovell/detect-libc/blob/98928b7d26bd5c50dee12af0e433b47825d84df0/lib/elf.js
// (Apache-2.0 License, 2017 Lovell Fuller and others)
// Works for 64-bit LE ELF binaries.
function elfInterpreterPath (elf/*: Buffer */)/*: string | null */ {
  if (elf.length < 64) {
    return null
  }
  if (elf.readUInt32BE(0) !== 0x7F454C46) {
    // Unexpected magic bytes
    return null
  }
  if (elf.readUInt8(4) !== 2) {
    // Not a 64-bit ELF
    return null
  }
  if (elf.readUInt8(5) !== 1) {
    // Not little-endian
    return null
  }
  const offset = elf.readUInt32LE(32)
  const size = elf.readUInt16LE(54)
  const count = elf.readUInt16LE(56)
  for (let i = 0; i < count; i++) {
    const headerOffset = offset + (i * size)
    const type = elf.readUInt32LE(headerOffset)
    if (type === 3) {
      const fileOffset = elf.readUInt32LE(headerOffset + 8)
      const fileSize = elf.readUInt32LE(headerOffset + 32)
      return elf.subarray(fileOffset, fileOffset + fileSize).toString().replace(/\0.*$/g, '')
    }
  }
  return null
}

function detectLibc ()/*: 'glibc' | 'musl' */ {
  if (cachedLibc != null) return cachedLibc
  let result/*: 'glibc' | 'musl' */ = 'glibc' // using glibc as the default
  // Parse the ELF interpreter from the running binary
  const elf = readBinaryHead('/proc/self/exe')
  if (elf != null) {
    const interp = elfInterpreterPath(elf)
    if (interp != null) {
      if (interp.includes('ld-musl-')) result = 'musl'
      cachedLibc = result
      return result
    }
  }
  // Fallback: check /usr/bin/ldd content (doesn't work on e.g. NixOS)
  const ldd = readBinaryHead('/usr/bin/ldd')
  if (ldd != null) {
    const content = ldd.toString()
    if (content.includes('musl')) result = 'musl'
  }
  cachedLibc = result
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
    if (prebuild.requirements.libc != null && libc != null)
      if (!prebuild.requirements.libc.includes(libc)) continue
    // Found a prebuild for the current platform
    const pkg = `${SCOPE}/${prebuild.packageName}/${prebuild.libfile}`
    try {
      return require.resolve(pkg)
    } catch (e) {
      throw new Error(`Could not load ${pkg} (are optionalDependencies installed?): ${e?.message}`)
    }
  }
  // No prebuild found
  let entirePlatform = `${platform}-${arch}`
  if (libc != null) entirePlatform += '-' + libc
  throw new Error(`The ${entirePlatform} platform is not supported`)
}

let cachedTdlibInfo/*: { commit: string, version: string } | null */ = null

exports.getTdlibInfo = function getTdlibInfo ()/*: { commit: string, version: string } */ {
  if (cachedTdlibInfo != null) return cachedTdlibInfo
  const pkg = require('./package.json')
  cachedTdlibInfo = pkg.tdlib
  return pkg.tdlib
}
