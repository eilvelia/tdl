// @flow

import fs from 'fs'
import { EOL } from 'os'
import { tldoc, type Parameter, type TdClass } from 'tldoc'

const arg = process.argv[2]
const filepath = (arg !== '--ts' && arg !== '--no-fl' && arg) || 'td_api.tl'
const TS = process.argv.includes('--ts')
const commentFluture = process.argv.includes('--no-fl')
const usage = process.argv.includes('--usage')
const help = process.argv.includes('--help')

if (usage || help) {
  console.log(`$ ./bin [filename] [--ts] [--no-fl]`)
  console.log('Options:')
  console.log('  --ts: Emit TypeScript instead of Flow')
  console.log('  --no-fl: Comment \'InvokeFuture\' function type')
  process.exit()
}

const VERSION = '1.4.0'

const INPUT_SUFFIX = '$Input'
const ARRAY_TYPE = 'Array'
const INPUT_ARRAY_TYPE = TS ? 'ReadonlyArray' : '$ReadOnlyArray'

const readOnly = TS ? 'readonly ' : '+'
const exact = TS ? '' : '|'

const source = fs.readFileSync(filepath).toString()
  .replace(/^ *vector.+$/mg, '') // XXX

// console.log(JSON.stringify(tldoc(source), null, '  '))

const { baseClasses, classes } = tldoc(source)

const baseClassesDesc = baseClasses
  .reduce((acc, { name, description }) =>
    acc.set(name, description), (new Map(): Map<string, string>))

type JSType =
  | {| type: 'Plain', str: string |} // Plain type
  | {| type: 'UnaryConstr', constr: string, arg: JSType |} // Unary type constructor
  | {| type: 'Union', types: JSType[] |} // Union type

const PlainType = (str: string): JSType =>
  ({ type: 'Plain', str })
const UnaryConstr = (constr: string, arg: JSType): JSType =>
  ({ type: 'UnaryConstr', constr, arg })
const UnionType = (types: JSType[]): JSType =>
  ({ type: 'Union', types })

const showType = (jstype: JSType): string => {
  switch (jstype.type) {
    case 'Plain': return jstype.str
    case 'UnaryConstr': return `${jstype.constr}<${showType(jstype.arg)}>`
    case 'Union': return jstype.types.map(showType).join(' | ')
    default: return (jstype: empty)
  }
}

type JSParameter = {
  name: string,
  type: JSType,
  description: string
}

type JSObject = {
  name: string,
  params: JSParameter[],
  description: string
}

function parameterTypeToJS ({ vector, type }: Parameter): JSType {
  const aux = (jstype, n) => n <= 0
    ? jstype
    : aux(UnaryConstr(ARRAY_TYPE, jstype), n - 1)
  const f = str => aux(PlainType(str), vector)
  const fu = strs => aux(UnionType(strs.map(PlainType)), vector)
  switch (type) {
    case 'double': return f('number')
    case 'string': return f('string')
    case 'int32': return f('number')
    case 'int53': return f('number')
    case 'int64': return fu(['number', 'string'])
    case 'Bool': return f('boolean')
    case 'bytes': return f('string')
    default: return f(type)
  }
}

const primitiveTypes = ['string', 'number', 'boolean']

const outputToInputType = (jstype: JSType): JSType => {
  switch (jstype.type) {
    case 'Plain':
      const { str } = jstype
      const newStr = primitiveTypes.includes(str) ? str : str + INPUT_SUFFIX
      return PlainType(newStr)
    case 'UnaryConstr':
      const { constr, arg } = jstype
      const newConstr = constr === ARRAY_TYPE ? INPUT_ARRAY_TYPE : constr
      const newArg = outputToInputType(arg)
      return UnaryConstr(newConstr, newArg)
    case 'Union':
      const { types } = jstype
      const newTypes = types.map(outputToInputType)
      return UnionType(newTypes)
    default: return (jstype: empty)
  }
}

const parameterToJS = (param: Parameter): JSParameter => ({
  name: param.name,
  type: parameterTypeToJS(param),
  description: param.description
})

const last = arr => arr[arr.length - 1]
const concatLast = (el, arr) => { arr[arr.length - 1] = last(arr) + el; return arr }

function formatDesc (desc: string): string {
  let length = 0

  const strings = desc
    .split('')
    .reduce((acc, e, i) => {
      length++
      if (length > 80 && e === ' ')
        { acc.push(e); length = 0; return acc }
      else
        { concatLast(e, acc); return acc }
    }, [''])

  if (strings.length > 1) {
    const str = strings
      .map(e => ' * ' + e.trim())
      .join(EOL)
    return `/**${EOL}${str}${EOL} */`
  }

  return `/** ${strings.join(EOL)} */`
}

const addIdent = (n: number, str: string) => str
  .split(EOL)
  .map(e => ' '.repeat(n) + e)
  .join(EOL)

const o = (x: boolean, str = INPUT_SUFFIX) => x ? str : ''

const createObjectType = ({ name, description, params }: JSObject) =>
  [
    description && formatDesc(description),
    `export type ${name} = {${exact}`,
    `  _: '${name}',`,
    params
      .map(({ description, name, type }) =>
        addIdent(2, formatDesc(description)) + EOL
        + `  ${name}: ${showType(type)},`)
      .join(EOL),
    exact + '}'
  ]
  .filter(Boolean)
  .join(EOL)

const createInputObjectType = ({ name, description, params }, inpName = false) =>
  [
    description && formatDesc(description),
    `export type ${name}${o(inpName)} = {${exact}`,
    `  ${readOnly}_: '${name}',`,
    params
      .map(({ description, name, type }) =>
        addIdent(2, formatDesc(description)) + EOL
        + `  ${readOnly}${name}?: ${showType(outputToInputType(type))},`)
      .join(EOL),
    exact + '}'
  ]
  .filter(Boolean)
  .join(EOL)

const createUnion = (
  typename: string,
  types: string[],
  description?: string,
  input: boolean = false
): string =>
  [
    description && formatDesc(description),
    `export type ${typename}${o(input)} =`,
    types
      .map(name => `  | ${name}${o(input)}`)
      .join(EOL)
  ]
  .filter(Boolean)
  .join(EOL)

const createFunctionType = (
  name: string,
  getReturnType: (typestr: string) => string,
  classes: TdClass[]
): string =>
  `export type ${name} =\n` +
  classes
    .map(({ name, result }) =>
      `  & ((query: ${name}) => ${getReturnType(result)})`)
    .join(EOL)

const createUnions = classes => {
  const map = classes
    .filter(e => e.kind === 'constructor')
    .reduce((acc, { name, result }) => {
      const arr = acc.get(result)
      if (arr) { arr.push(name); return acc }
      else { return acc.set(result, [name]) }
    }, (new Map(): Map<string, string[]>))

  const strings = Array.from(map.entries())
    .map(([key, value]) =>
      [
        createUnion(key, value, baseClassesDesc.get(key)),
        '',
        createUnion(key, value, baseClassesDesc.get(key), true)
      ]
      .join(EOL))

  return strings
    .join(EOL + EOL)
}

const uniq = list => {
  const output = []
  const set = new Set()
  list.forEach(e => {
    if (set.has(e)) return
    set.add(e)
    output.push(e)
  })
  return output
}

const objects = classes
  .map(cl => {
    const params = cl.parameters.map(parameterToJS)
    const jsobj: JSObject = { name: cl.name, description: cl.description, params }
    if (cl.kind === 'function')
      return createInputObjectType(jsobj)
    const str = createObjectType(jsobj)
    const strInput = createInputObjectType(jsobj, true)
    return [str, '', strInput].join(EOL)
  })
  .join(EOL + EOL)

const unions = createUnions(classes)

const funcs = classes.filter(e => e.kind === 'function')

const baseClassNames = uniq(classes.map(e => e.result))

const functionUnion = createUnion('TDFunction', funcs.map(e => e.name))
const objectUnion = createUnion('TDObject', baseClassNames)
const objectInputUnion = createUnion('TDObject', baseClassNames, '', true)

const invoke =
  createFunctionType('Invoke', t => `Promise<${t}>`, funcs)
const execute =
  createFunctionType('Execute', t => `${t} | error | null`, funcs)
const invokeFuture =
  createFunctionType('InvokeFuture', t => `Future<error, ${t}>`, funcs)

const { log } = console

if (!TS) {
  log('// @flow')
  log()
}
log(`// TDLib ${VERSION}`)
log()
log(objects)
log()
log('// ----')
log()
log(unions)
log()
log(functionUnion)
log()
log(objectUnion)
log()
log(objectInputUnion)
log()
log('// ----')
log()
log(invoke)
log()
log(execute)
log()
if (commentFluture)
  log('/*')
log('// Future<Left, Right>')
log(!TS
  ? 'import type { Future } from \'fluture\''
  : 'import { Future } from \'fluture\'')
log()
log(invokeFuture)
if (commentFluture)
  log('*/')

// console.log(`
// type $DeepShape<T: Object> = $Shape<
//   $ObjMap<T,
//     & (<X: Object>(X) => $DeepShape<X>)
//     & (<X: any[]>(X) => $TupleMap<X, <Y>(Y) => $DeepShape<Y>>)
//     & (<X>(X) => X)
//   >
// >;
// `)
