const tdl = require('tdl')
const readline = require('node:readline/promises')

tdl.configure({ verbosityLevel: 1 })

const client = tdl.createClient({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

// One example

async function prompt (query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  try {
    const answer = await rl.question(query)
    return answer
  } finally {
    rl.close()
  }
}

async function login () {
  for await (const update of client.iterUpdates()) {
    if (update._ !== 'updateAuthorizationState') continue
    const authorizationState = update.authorization_state
    switch (authorizationState._) {
      case 'authorizationStateWaitPhoneNumber':
        await client.invoke({
          _: 'setAuthenticationPhoneNumber',
          phone_number: await prompt('phone number: ')
        })
        break
      case 'authorizationStateWaitCode':
        await client.invoke({
          _: 'checkAuthenticationCode',
          code: await prompt('code: ')
        })
        break
      case 'authorizationStateWaitPassword':
        await client.invoke({
          _: 'checkAuthenticationPassword',
          password: await prompt('password: ')
        })
        break
      case 'authorizationStateReady':
        return // Success
    }
  }
  throw new Error('Failed to log in')
}

(async function () {
  await login()
  console.log('Logged in')
  await client.close()
})()
