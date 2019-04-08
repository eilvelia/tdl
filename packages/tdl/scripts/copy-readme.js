const fs = require('fs')
const path = require('path')

fs.copyFileSync(
  path.join(__dirname, '..', '..', '..', 'README.md'),
  path.join(__dirname, '..', 'README.md'))
