// @flow

/*:: import type { Parameter, TdClass, BaseClass } from 'ti-el' */
const { tldoc } = require('ti-el')

const EOL = '\n'
const INPUT_SUFFIX = '$Input'

const addIndent = (n/*: number */, str/*: string */) => str
  .split(EOL)
  .map(l => l.length > 0 ? ' '.repeat(n) + l : l)
  .join(EOL)

function formatDesc (desc/*: string */, indent = 0) {
  const space = ' '.repeat(indent)
  let length = 0
  const lines = ['']

  for (const ch of desc.split('')) {
    length++
    if (length > 75 && ch === ' ') {
      lines.push('')
      length = 0
    }
    lines[lines.length - 1] += ch
  }

  if (lines.length > 1) {
    const str = lines
      .map(line => space + ' * ' + line.trim())
      .join(EOL)
    return `${space}/**${EOL}${str}${EOL}${space} */`
  }

  return `${space}/** ${lines.join(EOL)} */`
}

function generate (
  source/*: string */,
  lang/*: 'typescript' | 'flow' */,
  header/*: string */
)/*: string */ {
  const TS = lang !== 'flow'

  const READONLY_ARRAY = TS ? 'ReadonlyArray' : '$ReadOnlyArray'
  const READONLY = TS ? 'readonly ' : '+'
  const EXACT = TS ? '' : '|'
  const EXPORT = TS ? 'export' : 'declare export'
  // const EMPTY_OBJ = TS ? '{}' : '{...}'

  // console.log(JSON.stringify(tldoc(source), null, '  '))

  function genParameter (p/*: Parameter */, input = false) {
    let typ = (() => {
      switch (p.type) {
        case 'double': return 'number'
        case 'string': return 'string'
        case 'int32': return 'number'
        case 'int53': return 'number'
        case 'int64': return 'number | string'
        case 'Bool': return 'boolean'
        case 'bytes': return 'string' // base64 string
        default: return input ? p.type + INPUT_SUFFIX : p.type
      }
    })()
    // Ad-hoc parsing of 'may be null'
    // https://github.com/tdlib/td/issues/1087
    const mayBeNull = p.description.includes('may be null')
    if (mayBeNull && p.vector > 0)
      typ += ' | null'
    for (let i = 0; i < p.vector; i++)
      typ = input ? `${READONLY_ARRAY}<${typ}>` : `Array<${typ}>`
    const optional = input || (mayBeNull && p.vector <= 0) ? '?' : ''
    const readonly = input ? READONLY : ''
    return [
      formatDesc(p.description, 2),
      `  ${readonly}${p.name}${optional}: ${typ},`
    ].join(EOL)
  }

  function genTdClass (c/*: TdClass */, input = false, preserveName = false) {
    const typeName = input && !preserveName ? c.name + INPUT_SUFFIX : c.name
    const readonly = input ? READONLY : ''
    return [
      `${EXPORT} type ${typeName} = {${EXACT}`,
      formatDesc(c.description, 2),
      `  ${readonly}_: '${c.name}',`,
      ...c.parameters.map(p => genParameter(p, input)),
      `${EXACT}}`
    ].filter(x => x.length > 0).join(EOL)
  }

  function genTdBaseClass (name/*: string */, children/*: TdClass[] */, description/*: ?string */, input = false) {
    const typeName = input ? name + INPUT_SUFFIX : name
    const childSuffix = input ? INPUT_SUFFIX : ''
    if (children.length === 1) {
      const c = children[0]
      return [
        description && formatDesc(description),
        `${EXPORT} type ${typeName} = ${c.name}${childSuffix}`
      ].filter(Boolean).join(EOL)
    }
    return [
      description && formatDesc(description),
      `${EXPORT} type ${typeName} =`,
      ...children.map(c => `  | ${c.name}${childSuffix}`)
    ].filter(Boolean).join(EOL)
  }

  const { baseClasses, classes } = tldoc(source)

  const baseClassesNameLookup = new Map()
  for (const c of baseClasses) baseClassesNameLookup.set(c.name, c)

  const classesNameLookup = new Map()
  for (const c of classes) classesNameLookup.set(c.name, c)

  const baseClassChildren = new Map()
  for (const c of classes) {
    if (c.kind !== 'constructor') continue
    const arr = baseClassChildren.get(c.result)
    if (arr)
      arr.push(c)
    else
      baseClassChildren.set(c.result, [c])
  }

  function getAllDeps (stack/*: string[] */)/*: Set<string> */ {
    const set = new Set()
    while (stack.length > 0) {
      const typ = stack.pop()
      if (set.has(typ)) continue
      set.add(typ)
      const children = baseClassChildren.get(typ)
      if (!children) {
        const c = classesNameLookup.get(typ)
        if (c != null && c.kind === 'constructor')
          for (const p of c.parameters) stack.push(p.type)
        continue
      }
      for (const c of children) {
        stack.push(c.name)
        for (const p of c.parameters) stack.push(p.type)
      }
    }
    return set
  }

  const funcs = classes.filter(e => e.kind === 'function')

  const inputTypes = getAllDeps(funcs.flatMap(f => f.parameters.map(p => p.type)))
  const outputTypes = getAllDeps(['Update', 'Error', ...funcs.map(f => f.result)])

  const objectTypes = classes
    .map(c => {
      if (c.kind === 'function')
        return genTdClass(c, true, true)
      if (inputTypes.has(c.name) && outputTypes.has(c.name))
        return [genTdClass(c), '', genTdClass(c, true)].join(EOL)
      if (inputTypes.has(c.name))
        return genTdClass(c, true)
      if (outputTypes.has(c.name))
        return genTdClass(c)
      console.error(`WARN ${c.name} is neither an input or output type`)
      return null
    })
    .filter(x => x != null)
    .join(EOL + EOL)

  const unionTypes = [...baseClassChildren.entries()]
    .map(([name, children]) => {
      const description = baseClassesNameLookup.get(name)?.description
      if (inputTypes.has(name) && outputTypes.has(name)) {
        const input = genTdBaseClass(name, children, description, true)
        const output = genTdBaseClass(name, children, description)
        return [output, '', input].join(EOL)
      }
      if (inputTypes.has(name))
        return genTdBaseClass(name, children, description, true)
      if (outputTypes.has(name))
        return genTdBaseClass(name, children, description)
      return null
    })
    .filter(x => x != null)
    .join(EOL + EOL)

  function genFunctionIntersection (
    name/*: string */,
    getReturnType/*: (name: string) => string */,
    classes/*: TdClass[] */
  ) {
    return [
      `${EXPORT} type ${name} =`,
      ...classes
        .map(c => `  & ((query: ${c.name}) => ${getReturnType(c.result)})`)
    ].join(EOL)
  }

  // function genApiObjectFunction (c/*: TdClass */) {
  //   const param = c.parameters.length < 1
  //     ? `params?: ${EMPTY_OBJ}`
  //     : `params: ${c.name}`
  //   return [
  //     formatDesc(c.description, 2),
  //     `  ${c.name}(${param}): Promise<${c.result}>,`
  //   ].join(EOL)
  // }

  // const apiObject = [
  //   `${EXPORT} type ApiObject = {${EXACT}`,
  //   ...funcs.map(genApiObjectFunction),
  //   `${EXACT}}`
  // ].join(EOL)

  let invoke
  let execute

  if (TS) {
    invoke = [
      `${EXPORT} type Invoke = <T>(query: { readonly _: T } & (`,
      '  ' + funcs.map(c => c.name).join(`${EOL}  | `),
      ')) => Promise<',
      ...funcs.map(c => `  T extends '${c.name}' ? ${c.result} :`),
      'never>'
    ].join(EOL)
    execute = [
      `${EXPORT} type Execute = <T>(query: { readonly _: T } & (`,
      '  ' + funcs.map(c => c.name).join(`${EOL}  | `),
      ')) => null | error | (',
      ...funcs.map(c => `  T extends '${c.name}' ? ${c.result} :`),
      'never)'
    ].join(EOL)
  } else {
    invoke = genFunctionIntersection('Invoke', t => `Promise<${t}>`, funcs)
    execute = genFunctionIntersection('Execute', t => `${t} | error | null`, funcs)
  }

  return [
    TS ? null : '// @flow',
    header,
    'declare module \'tdlib-types\' {',
    addIndent(2, [
      objectTypes,
      '',
      '// ----',
      '',
      unionTypes,
      '',
      '// ----',
      '',
      invoke,
      '',
      execute
    ].join(EOL)),
    '}',
    ''
  ].filter(x => x != null).join(EOL)
}

module.exports = { generate }
