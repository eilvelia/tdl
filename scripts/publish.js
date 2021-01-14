#!/usr/bin/env node
// @flow

const path = require('path')
const { spawn } = require('child_process')

const toPublish = process.argv.slice(2)

if (toPublish.length === 0) {
  console.error('No packages to publish')
  process.exit(1)
}

const packagesDir = path.resolve(__dirname, '..', 'packages')

function getPackageInfo (pkgStr)/*: [string, string] */ {
  // $FlowIgnore[unsupported-syntax]
  const packageJson = require(path.join(packagesDir, pkgStr, 'package.json'))
  return [packageJson.name, packageJson.version]
}

function createCommit (pkgs) {
  const strings = pkgs.map(([name, v]) => `- ${name}@${v}`)
  const commitMessage = `Publish\n\n${strings.join('\n')}`

  return new Promise((resolve, reject) => {
    const child = spawn('git', ['commit', '-m', commitMessage])
    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)
    child.on('close', code => {
      if (code !== 0)
        return reject(Error(`'git commit' exited with code ${code}`))
      resolve()
    })
  })
}

function createTag ([name, v]) {
  return new Promise((resolve, reject) => {
    const child = spawn('git', ['tag', '-a', '-m', '', `${name}@${v}`])
    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)
    child.on('close', code => {
      if (code !== 0)
        return reject(Error(`'git tag' exited with code ${code}`))
      console.log(`+ ${name}@${v}`)
      resolve()
    })
  })
}

async function main () {
  const packages = toPublish.map(getPackageInfo)
  await createCommit(packages)
  for (const pkg of packages)
    await createTag(pkg)
  console.log("Run 'npm publish' now.")
}

main()
  .catch(e => {
    console.error(String(e))
    process.exit(1)
  })
