#!/usr/bin/env node
// @flow

const https = require('https')
const fs = require('fs')
const path = require('path')

const tag = process.argv[2]

if (!tag) {
  console.error('The tag is not set.')
  process.exit(1)
}

const filepath = path.join(__dirname, 'scheme', `${tag}.tl`)

const url = `https://raw.githubusercontent.com/tdlib/td/${tag}/td/generate/scheme/td_api.tl`

https.get(url, res => {
  const ostream = fs.createWriteStream(filepath)
  res.pipe(ostream)
})
