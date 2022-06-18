const { readdirSync } = require('fs')
const natsort = require('natsort').default
const { basename, join } = require('path')

module.exports = {

    parseBinaryArgv(scheme) {
        const result = { argv: ''.split('') }
        for (let p in scheme) {
            result[scheme[p]] = false
        }
        for (let p of process.argv.slice(2)) {
            if (scheme[p]) {
                result[scheme[p]] = true
            } else {
                //@ts-ignore
                result.argv.push(p)
            }
        }
        return result
    },

    findLatestTl() {
        return readdirSync(join(__dirname, '..', 'scheme'))
            .sort(natsort({ desc: true, insensitive: true }))
            .find(f => /^v.+\.tl$/i.test(f))
    },

    extractVersion(filename) {
        return basename(filename).match(/^v?(?<ver>.+)\.tl$/i)?.groups?.ver
    }

}