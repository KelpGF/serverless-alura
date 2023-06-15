const { sign, verify } = require('jsonwebtoken')

function encode(body) {
  return sign(body, process.env.JWT_SECRET, {
    expiresIn: '24h',
    audience: 'alura-serverless'
  })
}

function validate(token) {
  return verify(token, process.env.JWT_SECRET, {
    audience: "alura-serverless"
  })
}

module.exports = {
  encode,
  validate
}
