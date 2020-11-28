#!/usr/bin/env node
// @flow

const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')
const fsp = fs.promises
const readline = require('readline')

const PKG_NAME = 'tdlib-types'

const LATEST_VERSION = 'v1.7.0'
const REV = '1'

/* eslint-disable comma-dangle */
const MINOR_REVS = {
  'v1.5.0': '5',
  'v1.6.0': '5',
}

function getMinorRev (ver/*: string */)/*: string */ {
  return MINOR_REVS[ver] || '1'
}

const inputVersion = process.argv[2]
const help = process.argv.includes('--help')
const toPublish = process.argv.includes('--publish')

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

async function replacePackageJsonVersion (ver) {
  const packageJson = path.join(__dirname, 'package.json')
  const packageLockJson = path.join(__dirname, 'package-lock.json')

  async function replaceInFile (file, newVer) {
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

function waitForClose (subprocess) {
  return new Promise((resolve, reject) => {
    subprocess.on('close', code => {
      if (code !== 0) reject(new Error(`Exited with code ${code}`))
      resolve()
    })
  })
}

function question (string) {
  return new Promise(resolve => rl.question(string, answer => resolve(answer)))
}

const schemeDir = path.join(__dirname, 'scheme')

async function forVersion (ver) {
  const flowOutputFile = path.join(__dirname, 'index.js')
  const tsOutputFile = path.join(__dirname, 'index.d.ts')

  const schemeFile = path.join(schemeDir, `${ver}.tl`)

  const options = { stdio: ['ignore', 'pipe', 'inherit'] }
  const flowArgs = ['./dist/index.js', ver, schemeFile]
  const tsArgs = [...flowArgs, '--ts']

  const genFlow = spawn('node', flowArgs, options)
  const flowStream = fs.createWriteStream(flowOutputFile)
  genFlow.stdout.pipe(flowStream)
  console.log(`${ver} > index.js`)

  const genTs = spawn('node', tsArgs, options)
  const tsStream = fs.createWriteStream(tsOutputFile)
  genTs.stdout.pipe(tsStream)
  console.log(`${ver} > index.d.ts`)

  await Promise.all([ waitForClose(genFlow), waitForClose(genTs) ])

  const pkgVer = await replacePackageJsonVersion(ver)

  if (!toPublish) {
    console.log(`package.json: ${pkgVer}`)
    return
  }

  const answer = await question(`Publish ${PKG_NAME}@${pkgVer}? [Y/n] `)
  if (!/^y/i.test(answer) && answer !== '') return

  const npmOptions = { stdio: ['ignore', 'inherit', 'inherit'] }
  const rawVer = ver.replace(/^v/, '')
  const distTag = `td-${rawVer}`
  const publish = spawn('npm', ['publish', '--tag', distTag], npmOptions)
  await waitForClose(publish)

  if (ver !== LATEST_VERSION) return

  const distTagAdd =
    spawn('npm', ['dist-tag', 'add', `${PKG_NAME}@${pkgVer}`, 'latest'])
  await waitForClose(distTagAdd)
  console.log(`tag: latest -> ${pkgVer}`)
}

async function forAllVersions () {
  const files = fs.readdirSync(schemeDir)
    .filter(x => /^v.+\.tl$/.test(x))
  const versions = files.map(x => x.replace(/^(v?.+)\.tl$/, '$1'))
  for (const ver of versions)
    await forVersion(ver)
}

function start () {
  switch (inputVersion) {
    case 'latest':
      return forVersion(LATEST_VERSION)
    case 'all':
      return forAllVersions()
    default:
      return forVersion(inputVersion)
  }
}

start()
  .catch(console.error)
  .then(() => rl.close())
