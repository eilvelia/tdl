// @flow

const fs = require('fs')
const path = require('path')
const { generate } = require('../dist/lib')

function gen (input/*: string*/)/*: string */ {
  return generate(input, 'flow', { version: '<ver>', commentFluture: false })
}

const schemeDir = path.join(__dirname, '..', 'scheme')

describe('the tdlib-types generator', () => {
  //test('should parse "may be null" comment', () => {
  //  const str = `
  //    //@class PollType @description Describes the type of a poll

  //    //@description Describes a photo
  //    //@minithumbnail Photo minithumbnail; may be null @sizes Available variants of the photo, in different sizes
  //    photo minithumbnail:minithumbnail sizes:vector<photoSize> = Photo;
  //  `
  //  expect(gen(str)).toMatchSnapshot()
  //})

  test('should generate typings for TDLib v1.8.0 correctly', () => {
    const scheme = fs.readFileSync(path.join(schemeDir, 'v1.8.0.tl'))
      .toString()
    expect(gen(scheme)).toMatchSnapshot()
  })
})
