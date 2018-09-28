// @flow

const { Client, TDLib } = require('..')

const LIBRARY_PATH = process.env.TD_PATH || undefined
const API_ID = Number(process.env.TD_API_ID)
const API_HASH = process.env.TD_API_HASH

if (!API_ID)
  throw new TypeError('Valid api_id must be provided.')

if (!API_HASH)
  throw new TypeError('Valid api_hash must be provided.')

const createClient = (config/*: Object */ = {}) => new Client({
  apiId: API_ID,
  apiHash: API_HASH,
  binaryPath: LIBRARY_PATH,
  ...config
})

const createTDLibFFI = () => new TDLib(LIBRARY_PATH)

module.exports = {
  LIBRARY_PATH,
  API_ID,
  API_HASH,
  createClient,
  createTDLibFFI
}
