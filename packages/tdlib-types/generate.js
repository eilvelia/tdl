#!/usr/bin/env node
// @flow

const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')
const fsp = fs.promises
const readline = require('readline')
const { extractVersion, findLatestTl, parseBinaryArgv } = require('./src/utils')

const PKG_NAME = 'tdlib-types'

const LATEST_TL = findLatestTl()
const LATEST_VERSION = 'v' + extractVersion(LATEST_TL)
const REV = '1'

/* eslint-disable comma-dangle */
const MINOR_REVS = {
  'v1.5.0': '5',
  'v1.6.0': '5',
}

function getMinorRev(ver/*: string */)/*: string */ {
  //todo get info from npm registry
  return MINOR_REVS[ver] || '1'
}

const { help, toPublish, argv: [inputVersion] } = parseBinaryArgv({
  '--help': 'help',
  '--publish': 'toPublish'
});

if (!inputVersion || help) {
  console.error('Usage: ./generate.js <tdlib-version> [--publish]')
  console.error('Example: $ ./generate.js v1.6.0')
  console.error('<tdlib-version> also can be "latest" or "all"')
  process.exit(1)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function replacePackageJsonVersion(ver) {
  const packageJson = path.join(__dirname, 'package.json')
  const packageLockJson = path.join(__dirname, 'package-lock.json')

  async function replaceInFile(file, newVer) {
    const contents = await fsp.readFile(file)
    const replaced = contents
      .toString()
      .replace(/"version":\s*".*?"/, `"version": "${newVer}"`)
    return fsp.writeFile(file, replaced)
  }

  const [major, minor, patch] = ver.replace(/^v/, '').split('.')
  const packageMinor = major.padStart(3, '0') + minor.padStart(3, '0')
  const packagePatch = patch === '0'
    ? getMinorRev(ver)
    : patch + getMinorRev(ver).padStart(3, '0')
  const packageVer = `0.${REV}${packageMinor}.${packagePatch}`
  await Promise.all([
    replaceInFile(packageJson, packageVer),
    replaceInFile(packageLockJson, packageVer)
  ])
  return packageVer
}

function waitForClose(subprocess) {
  return new Promise((resolve, reject) => {
    subprocess.on('close', code => {
      if (code !== 0) reject(new Error(`Exited with code ${code}`))
      resolve()
    })
  })
}

function question(string) {
  return new Promise(resolve => rl.question(string, answer => resolve(answer)))
}

const schemeDir = path.join(__dirname, 'scheme')

async function forVersion(schemeFile) {
  const rawVer = extractVersion(schemeFile)
  const ver = 'v' + rawVer;
  schemeFile = path.join(schemeDir, schemeFile)

  const flowOutputFile = path.join(__dirname, 'index.js')
  const tsOutputFile = path.join(__dirname, 'index.d.ts')

  const flowArgs = ['./dist/index.js', ver, schemeFile]
  const tsArgs = [...flowArgs, '--ts']

  const genFlow = spawn('node', flowArgs, { stdio: ['ignore', 'pipe', 'inherit'] })
  const flowStream = fs.createWriteStream(flowOutputFile)
  genFlow.stdout.pipe(flowStream)
  console.log(`${ver} > index.js`)

  const genTs = spawn('node', tsArgs, { stdio: ['ignore', 'pipe', 'inherit'] })
  const tsStream = fs.createWriteStream(tsOutputFile)
  genTs.stdout.pipe(tsStream)
  console.log(`${ver} > index.d.ts`)

  await Promise.all([waitForClose(genFlow), waitForClose(genTs)])

  const pkgVer = await replacePackageJsonVersion(ver)

  if (!toPublish) {
    console.log(`package.json: ${pkgVer}`)
    return
  }

  const answer = await question(`Publish ${PKG_NAME}@${pkgVer}? [Y/n] `)
  if (!/^y/i.test(answer) && answer !== '') return


  const distTag = `td-${rawVer}`
  const publish = spawn('npm', ['publish', '--tag', distTag], { stdio: ['ignore', 'inherit', 'inherit'] })
  await waitForClose(publish)

  if (ver !== LATEST_VERSION) return

  const distTagAdd =
    spawn('npm', ['dist-tag', 'add', `${PKG_NAME}@${pkgVer}`, 'latest'])
  await waitForClose(distTagAdd)
  console.log(`tag: latest -> ${pkgVer}`)
}

async function forAllVersions() {
  const files = fs.readdirSync(schemeDir).filter(x => /^v.+\.tl$/i.test(x))
  for (const file of files) {
    await forVersion(file)
  }
}

function start() {
  switch (inputVersion) {
    case 'latest':
      return forVersion(LATEST_TL)
    case 'all':
      return forAllVersions()
    default:
      return forVersion(fs.readdirSync(schemeDir).find(x => x.includes(inputVersion)))
  }
}

start()
  .catch(console.error)
  .then(() => rl.close())
