// @flow
/* eslint-disable */

const charset   = '0123456789abcdef'.split('');
const randomset = new Uint8Array(16);

function uuid()/*: string */ {
  let rand = 0;
  for (let i = 0; i < 16; i++) {
    if (rand < 2) {
      rand += Math.random() * (1 << 24);
    }
    randomset[i] = rand & 0xFF;
    rand >>>= 8;
  }

  randomset[6] = (randomset[6] & 0x0F) | 0x40;
  randomset[8] = (randomset[8] & 0x3F) | 0x80;

  let output = '';
  for (let i = 0; i < 16; i++) {
    const rnd = randomset[i];
    output += charset[rnd & 15];
    output += charset[rnd >>> 4];
  }

  return output;
}

module.exports = uuid
