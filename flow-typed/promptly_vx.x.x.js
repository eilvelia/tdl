declare module 'promptly' {
  declare export type Validator = (value: string) => string

  declare export type Options = {
    /** The default value to use if the user provided an empty input */
    default?: string,
    /** Trims the user input */
    trim?: boolean,
    /** A validator or an array of validators */
    validator?: Validator | Validator[],
    /** Retry if any of the validators fail */
    retry?: boolean,
    /** Do not print what the user types */
    silent?: boolean,
    /** Replace each character with the specified string when silent is true */
    replace?: string,
    /** Input stream to read from */
    input?: stream$Readable | tty$ReadStream,
    /** Output stream to write to */
    output?: stream$Writable | tty$WriteStream,
    /** Timeout in ms */
    timeout?: number,
    /** Return default value if timed out */
    useDefaultOnTimeout?: boolean
  }

  declare export function prompt(message: string, options?: Options): Promise<string>
  declare export function confirm(message: string, options?: Options): Promise<boolean>
  declare export function choose(message: string, choices: string[], options?: Options): Promise<string>
  declare export function password(message: string, options?: Options): Promise<string>
}
