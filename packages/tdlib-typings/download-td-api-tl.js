#!/usr/bin/env node
// @flow

const https = require('https')
const fs = require('fs')
const path = require('path')

const FILENAME = 'td_api.tl'

const filepath = path.join(__dirname, FILENAME)

const tag = process.argv[2]

if (!tag) {
  console.error('The tag is not set.')
  process.exit(1)
}

const url = `https://raw.githubusercontent.com/tdlib/td/${tag}/td/generate/scheme/td_api.tl`

https.get(url, res => {
  const ostream = fs.createWriteStream(filepath)
  res.pipe(ostream)
})
