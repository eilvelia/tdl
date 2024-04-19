const fs = require('node:fs')
const path = require('node:path')
const { createRequire } = require('node:module')
const fetch = (...args) => import('node-fetch')
  .then(({ default: fetch }) => fetch(...args))
const { generate } = require('./gen')

const packageVersion = require('../package.json').version

const argv = [...process.argv].slice(2)

const help = `\
  Usage: tdl-install-types [<options>] [<target>]

  Generate TypeScript (and optionally Flow) types for TDLib,
  potentially fetching the needed schema from the TDLib's GitHub repository.
  These types can be used with the tdl library.

  By default, a tdlib-types.d.ts file is created that you can git-commit.

  <target> can be a path to a .so/.dylib/.dll library, a git ref in the TDLib
  repository (e.g. v1.8.0 or a commit hash), or a path to the td_api.tl file.

  Examples:
    tdl-install-types  # tries to use tdlib from prebult-tdlib
    tdl-install-types ./libtdjson.so  # generate types for this shared library
    tdl-install-types 0ada45c3618108a62806ce7d9ab435a18dac1aab  # commit hash
    tdl-install-types v1.8.0  # git tag in the TDLib repository
    tdl-install-types td_api.tl  # generate directly from the tl file
    npx tdl-install-types  # can be called via npx without installing

  Options:
    --lib
      Interpret <target> as a file path to the tdjson shared library. This is
      the default behavior if <target> ends with .so, .dylib, or .dll.
      Can fail if the heuristics cannot find the version inside the shared
      library, especially for older TDLib versions.

    --tl
      Interpret <target> as a file path to a td_api.tl file describing the TDLib
      schema in the TL language. This is the default behavior if <target> ends
      with .tl.

    --git-ref
      Interpret <target> as a git ref (e.g., a commit hash or a git tag or a
      branch name) in the TDLib repository. This is the default behavior if
      neither of the above conditions is met.

    --prebuilt-tdlib
      Try to use require('prebuilt-tdlib').getTdjson() as the <target> for
      --lib. Implies --lib. If this option is set, <target> is ignored.
      This is the default behavior if <target> is omitted.

    -o <path>
      Output generated TypeScript types to <path>.
      Defaults to tdlib-types.d.ts in the current working directory.

    --flow
      Also generate Flow types besides the TypeScript types.

    --flow-output <path>
      Output generated Flow types to <path>.
      Defaults to flow-typed/tdlib-types_vx.x.x.js.

    --github-repo <username>/<repository>
      Set the TDLib GitHub repository.
      Can be set, for example, to the tdlight's repository.
      Defaults to tdlib/td.

    -h, --help            Print this text and exit.
    -v, --version         Print version and exit.`

const LIB = 'lib'
const GIT_REF = 'git-ref'
const TL = 'tl'
const PREBUILT_TDLIB_TARGET = '<prebuilt-tdlib>'

let target
let type
let tsOutput = 'tdlib-types.d.ts'
let flow = false
let flowOutput = 'flow-typed/tdlib-types_vx.x.x.js'
let githubRepo = 'tdlib/td'
let defaultTarget = false

function parseArgs () {
  if (argv.includes('--help') || argv.includes('-h')) {
    console.log(help)
    return false
  }
  if (argv.includes('--version') || argv.includes('-v')) {
    console.log(packageVersion)
    return false
  }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    switch (arg) {
      case '--lib':
        type = LIB
        break
      case '--tl':
        type = TL
        break
      case '--git-ref':
        type = GIT_REF
        break
      case '--prebuilt-tdlib':
        type = LIB
        target = PREBUILT_TDLIB_TARGET
        break
      case '-o':
        if (!argv[i + 1]) {
          console.error(`${arg} expects a file path`)
          process.exitCode = 1
          return false
        }
        tsOutput = argv[i + 1]
        i++
        break
      case '--flow':
        flow = true
        break
      case '--flow-output':
        if (!argv[i + 1]) {
          console.error(`${arg} expects a file path`)
          process.exitCode = 1
          return false
        }
        flowOutput = argv[i + 1]
        i++
        break
      case '--github-repo':
        if (!argv[i + 1] || argv[i + 1].startsWith('-')) {
          console.error(`${arg} expects a value`)
          process.exitCode = 1
          return false
        }
        githubRepo = argv[i + 1]
        i++
        break
      default:
        if (arg.startsWith('-')) {
          console.error(`WARN Unrecognized option ${arg}`)
          break
        }
        if (target === PREBUILT_TDLIB_TARGET) break
        target = arg
        if (type != null) break
        if (target.endsWith('.so') || target.endsWith('.dylib') || target.endsWith('.dll'))
          type = LIB
        else if (target.endsWith('.tl'))
          type = TL
        else
          type = GIT_REF
    }
  }
  if (!target) {
    type = LIB
    target = PREBUILT_TDLIB_TARGET
    defaultTarget = true
  }
  return true
}

function writeFile (file, contents) {
  const dir = path.dirname(file)
  if (dir !== '.' && dir !== '..')
    fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(file, contents)
}

function fromSchema (schema, { ver, hash } = {}) {
  let line1 = '// Types for TDLib'
  if (ver) line1 += ` v${ver}`
  if (hash) line1 += ` (${hash})`
  const line2 = `// Generated using tdl-install-types v${packageVersion}`
  const header = [line1, line2]
  const tsGenerated = generate(schema, 'typescript', header)
  writeFile(tsOutput, tsGenerated)
  if (flow) {
    const flowGenerated = generate(schema, 'flow', header)
    writeFile(flowOutput, flowGenerated)
  }
}

async function fetchTdVersion (ref) {
  try {
    const res = await fetch(`https://raw.githubusercontent.com/${githubRepo}/${ref}/CMakeLists.txt`)
    const text = await res.text()
    if (text.includes('404: Not Found')) throw Error('Not found')
    const version = text.match(/TDLib VERSION ([\w.]+) /)?.[1]
    if (!version) throw Error('Could not find version')
    return version
  } catch (e) {
    console.error(`WARN Failed to fetch TDLib version: ${e?.message || String(e)}`)
    return '<unknown>'
  }
}

async function fromGitRef (ref, ver) {
  const res = await fetch(`https://raw.githubusercontent.com/${githubRepo}/${ref}/td/generate/scheme/td_api.tl`)
  const schema = await res.text()
  if (schema.length < 2000)
    throw Error(`Failed to fetch schema: ${schema}`)
  ver ||= await fetchTdVersion(ref)
  const hash = ref.length >= 30 && ref !== ver ? ref : null
  fromSchema(schema, { ver, hash })
}

// > $ strings libtdjson.dylib | grep -iE '^[0123456789abcdef]{40}$'
// > 66234ae2537a99ec0eaf7b0857245a6e5c2d2bc9

function fromDynamicLib (lib) {
  // Try to parse the hash/version from the so file itself
  const data = fs.readFileSync(lib).toString('binary')
  const hash = data.match(/[^\dabcdef]([\dabcdef]{40})[^\dabcdef]/)?.[1]
  const version = data.match(/\W([1234]\.\d{1,2}\.\d{1,3})\W/)?.[1]
  // console.log('hash', hash)
  // console.log('version', version)
  if (version?.endsWith('.0')) {
    const parsed = version.split('.').map(Number)
    const useVersionRef = (parsed?.[0] === 1 && parsed?.[1] < 8)
      || (!hash && parsed.every(x => !Number.isNaN(x)))
    if (useVersionRef)
      return fromGitRef('v' + version, version)
  }
  if (hash) {
    console.log(`INFO Using TDLib ${hash}`)
    return fromGitRef(hash)
  }
  throw Error('Could not determine TDLib commit hash')
}

async function getPrebuiltLibPath () {
  // return new Promise((resolve, reject) => {
  //   const node = spawn('node', ['-e', 'console.log(require("prebuilt-tdlib").getTdjson())'])
  //   if (!defaultTarget) node.stderr.pipe(process.stderr)
  //   let output = ''
  //   node.stdout.on('data', data => {
  //     output += data.toString()
  //   })
  //   node.on('close', code => {
  //     if (code !== 0)
  //       return reject(Error(`node exited with code ${code}`))
  //     resolve(output)
  //   })
  // })
  const cwdRequire = createRequire(path.resolve('index.js'))
  return cwdRequire('prebuilt-tdlib').getTdjson()
}

async function fromPrebuiltTdlib () {
  try {
    const lib = await getPrebuiltLibPath()
    fromDynamicLib(lib)
  } catch (e) {
    if (defaultTarget) {
      console.error('Could not generate types for prebuilt-tdlib:')
      console.error(e?.message || String(e))
      console.error('Help:')
      console.error(help)
    } else {
      console.error(String(e))
    }
    process.exitCode = 1
  }
}

const shouldContinue = parseArgs()

if (!shouldContinue) {
  // Nothing, exit
} else if (type === TL) {
  const schema = fs.readFileSync(target).toString()
  fromSchema(schema)
} else if (type === GIT_REF) {
  fromGitRef(target)
    .catch(console.error)
} else if (type === LIB && target === PREBUILT_TDLIB_TARGET) {
  fromPrebuiltTdlib()
} else if (type === LIB) {
  fromDynamicLib(target)
}
