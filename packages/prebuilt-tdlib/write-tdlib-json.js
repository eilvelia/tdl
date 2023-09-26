#!/usr/bin/env node
// @flow

const path = require('path')
const fs = require('fs')

const ref = process.argv[2]
let version = process.argv[3]

if (!ref) throw new Error('Expected ref')
if (!version) throw new Error('Expected version')

version = version.replace(/^v/, '')

const json = JSON.stringify({ ref, version }) + '\n'

fs.writeFileSync(path.join(__dirname, 'prebuilds', 'tdlib.json'), json)
