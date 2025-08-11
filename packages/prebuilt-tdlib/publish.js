#!/usr/bin/env/node
// @flow

const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')
const { prebuilds } = require('./prebuild-list')
/*:: import type { PrebuildInfo } from './prebuild-list' */

const MAIN_PACKAGE_NAME = 'prebuilt-tdlib'
const SCOPE = '@prebuilt-tdlib'

const tdlibCommit = process.env.TDLIB_COMMIT_HASH
let tdlibVersion = process.env.TDLIB_VERSION
const npmTag = process.env.NPM_TAG
const patchVersion = process.argv[2]

if (!tdlibCommit) throw new Error('Expected TDLIB_COMMIT_HASH')
if (!tdlibVersion) throw new Error('Expected TDLIB_VERSION')
if (!npmTag) throw new Error('Expected NPM_TAG')
if (!patchVersion) throw new Error('Expected the patch version argument')

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

const prebuildPackageJson = require('./prebuild-template/package.json')

delete prebuildPackageJson.private
prebuildPackageJson.version = npmVersion
prebuildPackageJson.tdlib = {
  commit: tdlibCommit,
  version: tdlibVersion
}

const prebuildTemplateDir = path.join(__dirname, 'prebuild-template')

const prebuildCount = fs.readdirSync(path.join(__dirname, 'prebuilds'))
  .filter(name => name.startsWith('tdlib-'))
  .length

if (prebuildCount < prebuilds.length)
  throw new Error(`Expected ${prebuilds.length} prebuilds, found ${prebuildCount}`)

const typesTemplateDir = path.join(__dirname, 'types-template')
const typesPackageJson = require('./types-template/package.json')

delete typesPackageJson.private
typesPackageJson.name = `${SCOPE}/types`
typesPackageJson.version = npmVersion
typesPackageJson.tdlib = {
  commit: tdlibCommit,
  version: tdlibVersion
}

function publishPrebuild (info/*: PrebuildInfo */) {
  console.log(`Preparing to publish ${SCOPE}/${info.packageName}@${npmVersion}`)

  // Writing package.json
  const pkg = { ...prebuildPackageJson }
  pkg.name = SCOPE + '/' + info.packageName
  pkg.description += ' for ' + info.descr
  pkg.files = [info.libfile, 'LICENSE.md', 'README.md']
  for (const [k, v] of Object.entries(info.requirements))
    pkg[k] = v
  fs.writeFileSync(
    path.join(prebuildTemplateDir, 'package.json'),
    JSON.stringify(pkg, null, '  ') + '\n'
  )

  const lib = path.join(__dirname, 'prebuilds', info.prebuildDir, info.libfile)

  if (!fs.existsSync(lib))
    throw new Error(`'${lib}' does not exist`)

  fs.copyFileSync(lib, path.join('.', info.libfile))

  const files = fs.readdirSync(prebuildTemplateDir)

  if (files.length < 4 || !files.includes(info.libfile))
    throw new Error(`No shared library found (files: ${files.join()})`)

  execSync('npm publish --provenance --access public', { stdio: 'inherit' })

  fs.rmSync(info.libfile)
}

const oldCwd = process.cwd()

// Publish the types package

console.log(`Preparing to publish ${SCOPE}/types@${npmVersion}`)
process.chdir(typesTemplateDir)
fs.writeFileSync(
  path.join(typesTemplateDir, 'package.json'),
  JSON.stringify(typesPackageJson, null, '  ') + '\n'
)
execSync(
  `npx tdl-install-types -o tdlib-types.d.ts --override-version ${tdlibVersion} --git-ref ${tdlibCommit}`,
  { stdio: 'inherit' }
)
execSync('npm publish --provenance --access public', { stdio: 'inherit' })

// Publish prebuilds

process.chdir(prebuildTemplateDir)

for (const prebuild of prebuilds)
  publishPrebuild(prebuild)

// Publish the main package

console.log(`Preparing to publish ${MAIN_PACKAGE_NAME}@${npmVersion}`)

const mainPackageJson = require('./package.json')

delete mainPackageJson.private
mainPackageJson.name = MAIN_PACKAGE_NAME
mainPackageJson.version = npmVersion
mainPackageJson.tdlib = {
  commit: tdlibCommit,
  version: tdlibVersion
}
mainPackageJson.optionalDependencies = prebuilds.reduce((obj, info) => {
  return { ...obj, [SCOPE + '/' + info.packageName]: npmVersion }
}, {
  [`${SCOPE}/types`]: npmVersion
})

fs.writeFileSync(
  path.join(__dirname, 'package.json'),
  JSON.stringify(mainPackageJson, null, '  ') + '\n'
)

process.chdir(__dirname)

const publishCommand =
  `npm publish --provenance --access public --tag ${npmTag}`

const addTagCommand =
  `npm dist-tag add ${MAIN_PACKAGE_NAME}@${npmVersion} td-${tdlibVersion}`

execSync(publishCommand, { stdio: 'inherit' })
execSync(addTagCommand, { stdio: 'inherit' })

// Restore cwd
try {
  process.chdir(oldCwd)
} catch (e) {
  console.error(`Note: failed to chdir to ${oldCwd}: ${e?.message}`)
}
