#!/usr/bin/env node
// @flow

const https = require('https')
const fs = require('fs')
const path = require('path')

const ref = process.argv[2]
const saveAs = process.argv[3]

if (!ref) {
  console.error('Usage: ./download-scheme.js <tdlib-git-ref> [save-as]')
  process.exit(1)
}

const filename = saveAs || ref

const filepath = path.join(__dirname, 'scheme', `${filename}.tl`)

const url = `https://raw.githubusercontent.com/tdlib/td/${ref}/td/generate/scheme/td_api.tl`

https.get(url, res => {
  const ostream = fs.createWriteStream(filepath)
  res.pipe(ostream)
})
