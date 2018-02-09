const ref = require('ref')
const inquirer = require('inquirer')

const utils = {
  buildQuery(query) {
    const buffer = Buffer.from(JSON.stringify(query) + '\0', 'utf-8')
    buffer.type = ref.types.CString
    return buffer
  },
  async getInput(type, message) {
    let input = ''
    while (!input.length) {
      const result = await inquirer.prompt([
        { type, name: 'input', message },
      ])
      input = result.input
    }
    return input
  },
}

module.exports = utils
