const { createClient } = require('./fixtures')

describe('client', async () => {
  const client = createClient()

  beforeAll(async () => {
    await client.connect()
    client.setLogVerbosityLevel(1)
    client.on('error', err => console.log('ERROR', err))
  })

  test('setLogFatalErrorCallback', () => {
    client.setLogFatalErrorCallback(err => console.error('FATAL ERROR', err))
  })

  test('execute', () => {
    const payload = { _: 'getTextEntities', text: '@telegram' }
    const expected = {
      '_': 'textEntities',
      'entities': [
        {
          '_': 'textEntity',
          'offset': 0,
          'length': 9,
          'type': {
            '_': 'textEntityTypeMention'
          }
        }
      ]
    }
    const response = client.execute(payload)
    expect(response).toEqual(expected)
  })

  test('invoke', async () => {
    const payload = { _: 'testSquareInt', x: 2 }
    const expected = { _: 'testInt', value: 4 }
    const response = await client.invoke(payload)
    expect(response).toEqual(expected)
  })

  afterAll(() => {
    client.destroy()
  })
})
