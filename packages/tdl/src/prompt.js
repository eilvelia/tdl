// @flow

import * as readline from 'readline'

function prompt (query: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.on('SIGINT', () => {
      rl.close()
      reject(new Error('Cancelled'))
    })

    rl.on('error', reject)

    rl.question(query, answer => {
      rl.close()
      resolve(answer.replace(/[\r\n]*$/, ''))
    })
  })
}

export const getPhoneNumber = (retry?: boolean): Promise<string> =>
  prompt(retry
    ? 'Invalid phone number, please re-enter: '
    : 'Please enter your phone number: ')

export const getEmailAddress = (): Promise<string> =>
  prompt('Please enter your email address: ')

export const getEmailCode = (): Promise<string> =>
  prompt('Please enter the email auth code you received: ')

export const confirmOnAnotherDevice = (link: string): void =>
  console.log(`Please confirm on another device: ${link}`)

export const getAuthCode = (retry?: boolean): Promise<string> =>
  prompt(retry
    ? 'Wrong auth code, please re-enter: '
    : 'Please enter the auth code you received: ')

export const getPassword = (passwordHint: string, retry?: boolean): Promise<string> => {
  const hint = passwordHint ? ` (hint: "${passwordHint}")` : ''
  const query = retry
    ? `Wrong password, please re-enter${hint}: `
    : `Please enter your 2FA password${hint}: `
  return prompt(query)
}

type GetName = () => Promise<{ firstName: string, lastName?: string }>
export const getName: GetName = async () => ({
  firstName: await prompt('Please enter your first name: '),
  lastName: await prompt('Please enter your last name (optional): ') || undefined
})
