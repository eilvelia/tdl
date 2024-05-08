#!/usr/bin/env/node
// @flow

const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')

const packageName = 'prebuilt-tdlib'

const tdlibCommit = process.env.TDLIB_COMMIT_HASH
let tdlibVersion = process.env.TDLIB_VERSION
const npmTag = process.env.NPM_TAG
const patchVersion = process.argv[2]

if (!tdlibCommit) throw new Error('Expected TDLIB_COMMIT_HASH')
if (!tdlibVersion) throw new Error('Expected TDLIB_VERSION')
if (!npmTag) throw new Error('Expected NPM_TAG')
if (!patchVersion) throw new Error('Expected the patch version')

if (Number.isNaN(Number(patchVersion)))
  throw new Error(`Incorrect patch version: ${patchVersion}`)

if (tdlibCommit.length < 40) throw new Error('Too short TDLib commit')

tdlibVersion = tdlibVersion.replace(/^v/, '')

let [tdlibMajor, tdlibMinor, tdlibPatch] = tdlibVersion.split('.')

if (tdlibMajor == null || tdlibMinor == null || tdlibPatch == null)
  throw new Error(`Incorrect TDLib version: ${tdlibVersion}`)

tdlibMinor = tdlibMinor.padStart(3, '0')
tdlibPatch = tdlibPatch.padStart(3, '0')

const npmVersion = `0.${tdlibMajor}${tdlibMinor}${tdlibPatch}.${patchVersion}`

console.log(`Preparing to publish ${npmVersion}`)

const packageJson = require('./package.json')

delete packageJson.private
packageJson.name = packageName
packageJson.version = npmVersion
packageJson.tdlib = {
  commit: tdlibCommit,
  version: tdlibVersion
}

const tdlibJson =
  { commit: tdlibCommit, version: tdlibVersion, ref: tdlibCommit }

fs.writeFileSync(
  path.join(__dirname, 'prebuilds', 'tdlib.json'),
  JSON.stringify(tdlibJson) + '\n'
)

fs.writeFileSync(
  path.join(__dirname, 'package.json'),
  JSON.stringify(packageJson, null, '  ') + '\n'
)

// Check

function checkExists (pathparts/*: string[] */) {
  const p = path.join(__dirname, 'prebuilds', ...pathparts)
  if (fs.existsSync(p)) return
  throw new Error(`'${p}' does not exist`)
}

checkExists(['tdlib-linux-x64', 'libtdjson.so'])
checkExists(['tdlib-macos', 'libtdjson.dylib'])
checkExists(['tdlib-windows-x64', 'tdjson.dll'])

checkExists(['tdlib.json'])

// Publish

const oldCwd = process.cwd()

process.chdir(__dirname)

const publishCommand =
  `npm publish --provenance --access public --tag ${npmTag}`

const addTagCommand =
  `npm dist-tag add ${packageName}@${npmVersion} td-${tdlibVersion}`

execSync(publishCommand, { stdio: 'inherit' })
execSync(addTagCommand, { stdio: 'inherit' })

try {
  process.chdir(oldCwd)
} catch (e) {
  console.error(`Note: failed to chdir to ${oldCwd}: ${e && e.message}`)
}
