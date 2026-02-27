//@flow

const fs = require('node:fs')
const path = require('node:path')

fs.copyFileSync(
  path.join(__dirname, '..', '..', '..', 'README.md'),
  path.join(__dirname, '..', 'README.md'))
