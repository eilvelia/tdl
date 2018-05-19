// @flow

import * as promptly from 'promptly'

export const getAuthCode = (retry?: boolean): Promise<string> =>
  promptly.prompt(retry
    ? 'Wrong auth code, please re-enter: '
    : 'Please enter auth code: ')

export const getPassword = (passwordHint: string, retry?: boolean): Promise<string> =>
  promptly.password(retry
    ? 'Wrong password, please re-enter: '
    : `Please enter password (${passwordHint}): `,
  { replace: '*' })
