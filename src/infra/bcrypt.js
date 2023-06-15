const { pbkdf2Sync } = require('crypto')

function generateHash(text) {
  return pbkdf2Sync(text, process.env.SALT, 100000, 64, 'sha512').toString('hex')
}

module.exports = {
  generateHash
}
