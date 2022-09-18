// @flow

export const getPhoneNumber = (): Promise<string> => {
  throw new Error('Default getPhoneNumber is not supported')
}

export const getEmailAddress = (): Promise<string> => {
  throw new Error('Default getEmailAddress is not supported')
}

export const getEmailCode = (): Promise<string> => {
  throw new Error('Default getEmailCode is not supported')
}

export const confirmOnAnotherDevice = (): void => {
  throw new Error('Default confirmOnAnotherDevice is not supported')
}

export const getAuthCode = (): Promise<string> => {
  throw new Error('Default getAuthCode is not supported')
}

export const getPassword = (): Promise<string> => {
  throw new Error('Default getPassword is not supported')
}

type GetName = () => Promise<{ firstName: string, lastName?: string }>
export const getName: GetName = () => {
  throw new Error('Default getName is not supported')
}
