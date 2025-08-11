/// <reference types="@prebuilt-tdlib/types" />

export type Options = {
  readonly forceLibc?: 'glibc' | 'musl'
}

export declare function getTdjson(options?: Options): string

export declare function getTdlibInfo(): { commit: string, version: string }
