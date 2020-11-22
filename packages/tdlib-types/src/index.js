// @flow

import fs from 'fs'
import { generate } from './lib'

const version = process.argv[2] || '<version>'
const arg: ?string = process.argv[3]
const filepath = (!arg || /^--/.test(arg)) ? 'td_api.tl' : arg
const ts = process.argv.includes('--ts')
const commentFluture = process.argv.includes('--no-fl')
const usage = process.argv.includes('--usage')
const help = process.argv.includes('--help')

if (usage || help) {
  console.log('$ ./bin <version> [filename] [--ts] [--no-fl]')
  console.log('Options:')
  console.log('  --ts: Emit TypeScript instead of Flow')
  console.log('  --no-fl: Comment \'InvokeFuture\' function type')
  process.exit()
}

const source = fs.readFileSync(filepath).toString()

const outputType = ts ? 'typescript' : 'flow'

const output = generate(source, outputType, { version, commentFluture })

console.log(output)
