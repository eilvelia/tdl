// @flow

const fs = require('fs')
const path = require('path')

const inputFile = path.join(__dirname, '..', 'index.js.flow')
const outputFile = path.join(__dirname, '..', 'index.d.ts')

const inputStr = fs.readFileSync(inputFile).toString()

// This is done via regexps because:
// (1) https://github.com/bcherny/flow-to-typescript doesn't work well
// (2) Maintaining both index.js.flow and index.d.ts is uncomfortable

const outputStr = inputStr
  .replace(/^\/\/ ?@flow\r?\n?\r?\n?/, '')
  .replace(/import type/g, 'import')
  .replace(/export type {/g, 'export {')
  .replace(/declare export/g, 'export')
  .replace(/{\|/g, '{')
  .replace(/\|}/g, '}')
  .replace(/\+err/g, 'readonly err')
  .replace(/(constructor\(.*?\)): this;/, '$1;')
  .replace(/\/\*::\r?\n?([\S\s]*?)\r?\n?\*\//g, '$1')
  .replace(/\$Rest<(.*?), ?{}>/g, 'Partial<$1>')

fs.writeFileSync(outputFile, outputStr)
