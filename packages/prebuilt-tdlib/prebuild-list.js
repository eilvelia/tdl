// @flow

/*::
export type PrebuildInfo = {
  packageName: string,
  prebuildDir: string,
  libfile: string,
  descr: string,
  requirements: { os?: string[], cpu?: string[] },
  libc?: 'glibc' | 'musl'
}
*/

const SHARED_LINUX = 'libtdjson.so'
const SHARED_MACOS = 'libtdjson.dylib'
const SHARED_WINDOWS = 'tdjson.dll'

const prebuilds/*: PrebuildInfo[] */ = [
  {
    packageName: 'win32-x64',
    prebuildDir: 'tdlib-windows-x86_64',
    libfile: SHARED_WINDOWS,
    descr: 'Windows x86_64',
    requirements: {
      os: ['win32'],
      cpu: ['x64']
    }
  },
  {
    packageName: 'darwin-x64',
    prebuildDir: 'tdlib-macos-x86_64',
    libfile: SHARED_MACOS,
    descr: 'macOS x86_64',
    requirements: {
      os: ['darwin'],
      cpu: ['x64']
    }
  },
  {
    packageName: 'darwin-arm64',
    prebuildDir: 'tdlib-macos-arm64',
    libfile: SHARED_MACOS,
    descr: 'macOS arm64',
    requirements: {
      os: ['darwin'],
      cpu: ['arm64']
    }
  },
  {
    packageName: 'linux-x64-glibc',
    prebuildDir: 'tdlib-linux-x86_64-glibc',
    libfile: SHARED_LINUX,
    descr: 'Linux x86_64 (glibc)',
    requirements: {
      os: ['linux'],
      cpu: ['x64']
    },
    libc: 'glibc'
  },
  {
    packageName: 'linux-arm64-glibc',
    prebuildDir: 'tdlib-linux-arm64-glibc',
    libfile: SHARED_LINUX,
    descr: 'Linux arm64 (glibc)',
    requirements: {
      os: ['linux'],
      cpu: ['arm64']
    },
    libc: 'glibc'
  }
]

exports.prebuilds = prebuilds
