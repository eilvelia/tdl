#!/usr/bin/env node

const fetch = require('node-fetch').default
const { createWriteStream } = require('fs')
const { join } = require('path')
const { pipeline } = require('stream/promises')

async function main() {

  let tag = process.argv.slice[2] || 'latest'

  const url = tag === 'latest' ?
    'https://github.com/tdlib/td/raw/master/td/generate/scheme/td_api.tl' :
    `https://raw.githubusercontent.com/tdlib/td/${tag}/td/generate/scheme/td_api.tl`

  if (tag === 'latest') {

    const cppHeader = await (await fetch('https://raw.githubusercontent.com/tdlib/td/master/td/telegram/Td.h')).text()

    tag = cppHeader.match(/TDLIB_VERSION\s*=\s"(?<ver>[^"]+)"/)?.groups?.ver || '';

    if (!tag) {
      throw 'The tag is not set.'
    }

    tag = 'v' + tag;
  }

  await pipeline((await fetch(url)).body, createWriteStream(join(__dirname, 'scheme', `${tag}.tl`)))

}

main().catch(e => {
  console.error(e);
  process.exit(1);
})