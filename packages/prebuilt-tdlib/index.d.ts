/** Currently present for forward compatibility only. */
export type Options = {
  readonly forceLibc?: 'glibc' | 'musl'
}

export declare function getTdjson(options?: Options): string
