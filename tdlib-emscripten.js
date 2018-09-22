// @flow

// EXPERIMENTAL

// import Debug from 'debug'

// const debug = Debug('tdl:tdlib-emscripten')

type Pointer = number

export opaque type TDLibClient = Pointer

type Module = {
  _malloc: Pointer => Pointer;
  _free: Pointer => void;

  HEAPU8: Uint8Array;

  // Exported functions
  _td_create(): Pointer;
  _td_send(client: Pointer, query: Pointer): void;
  _td_receive(client: Pointer): Pointer;
  _td_execute(client: Pointer, query: Pointer): Pointer;
  _td_destroy(client: Pointer): void;
  _td_set_verbosity(verbosity: number): void;
}

function sliceTo0 (uarr: Uint8Array) {
  let i = 0
  for (; i < uarr.length; i++) {
    if (uarr[i] === 0)
      return uarr.slice(0, i)
  }
  throw new Error('\\0 not found')
}

export class TDLib {
  +_encoder = new TextEncoder();
  +_decoder = new TextDecoder();
  +_module: Module;

  constructor (module: Module) {
    this._module = module
  }

  _buildQuery (query: Object): Pointer {
    const { _encoder: encoder, _module: m } = this
    const data = encoder.encode(JSON.stringify(query) + '\0')
    //                             $FlowFixMe
    const len = data.length * data.BYTES_PER_ELEMENT
    const ptr = m._malloc(len)

    const dataHeap = new Uint8Array(m.HEAPU8.buffer, ptr, len)
    dataHeap.set(new Uint8Array(data.buffer))

    return dataHeap.byteOffset
  }

  _getResponse (ptr: Pointer): Object | null {
    const { _decoder: decoder, _module: m } = this

    const uarr = new Uint8Array(m.HEAPU8.buffer, ptr)

    const str = decoder.decode(sliceTo0(uarr))
    if (!str) return null
    const json: mixed = JSON.parse(str)

    if (typeof json === 'object')
      return Promise.resolve(json)

    throw new Error(`Invalid "receive" return value: ${String(json)}`)
  }

  create (): Promise<TDLibClient> {
    // debug('create')
    return Promise.resolve(this._module._td_create())
  }

  send (client: TDLibClient, query: Object): Promise<void> {
    const { _module: m } = this

    const ptr = this._buildQuery(query)

    m._td_send(client, ptr)
    m._free(ptr)

    return Promise.resolve()
  }

  receive (client: TDLibClient): Promise<Object | null> {
    // note: timeout is 0
    const ptr = this._module._td_receive(client)

    if (ptr === 0) return Promise.resolve(null)

    const response = this._getResponse(ptr)
    // this._module._free(ptr)
    return Promise.resolve(response)
  }

  execute (client: TDLibClient, query: Object): Object | null {
    const { _module: m } = this

    const queryPtr = this._buildQuery(query)

    const responsePtr = m._td_execute(client, queryPtr)
    m._free(queryPtr)

    const response = this._getResponse(responsePtr)
    // m._free(responsePtr)

    return response
  }

  destroy (client: TDLibClient): void {
    // debug('destroy', client)
    this._module._td_destroy(client)
  }

  setLogFilePath (/*:: path: string */): number {
    throw new Error('setLogFilePath doesn\'t supported')
  }

  setLogMaxFileSize (/*:: maxFileSize: number | string */): void {
    throw new Error('setLogMaxFileSize doesn\'t supported')
  }

  setLogVerbosityLevel (verbosity: number): void {
    // debug('setLogVerbosityLevel', verbosity)
    this._module._td_set_verbosity(verbosity)
  }

  setLogFatalErrorCallback (/*:: fn: (errorMessage: string) => void */): void {
    throw new Error('setLogFatalErrorCallback doesn\'t supported')
  }
}
