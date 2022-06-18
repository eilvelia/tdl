// @flow

import fs from 'fs'
import { join, resolve } from 'path'
import { generate } from './lib'
import { extractVersion, findLatestTl, parseBinaryArgv } from './utils'

let { help, usage, commentFluture, ts, argv: [version, filepath] } = parseBinaryArgv({
  '--usage': 'usage',
  '--help': 'help',
  '--no-fl': 'commentFluture',
  '--ts': 'ts'
})

version ||= 'latest'
filepath ||= join(__dirname, '..', 'scheme', findLatestTl() || 'td_api.tl')

if (version === 'latest') {
  const v = extractVersion(filepath);
  version = v ? 'v' + v : '<version>'
}

if (usage || help) {
  console.log('$ ./bin <version> [filename] [--ts] [--no-fl]')
  console.log('Options:')
  console.log('  --ts: Emit TypeScript instead of Flow')
  console.log('  --no-fl: Comment \'InvokeFuture\' function type')
  process.exit()
}

const source = fs.readFileSync(resolve(filepath), 'utf-8')

const outputType = ts ? 'typescript' : 'flow'

const output = generate(source, outputType, { version, commentFluture })

console.log(output)
