const { validate } = require("../../infra/jwt")
const { unauthorizedError } = require("../http-protocols")

async function authorizeMiddleware({ headers }) {
  try {
    const { authorization } = headers
    if (!authorization) return unauthorizedError('Missing authorization')

    const [type, token] = authorization.split(' ')
    if (type !== 'Bearer' || !token) return unauthorizedError('Invalid authorization')

    const decodedToken = validate(token, process.env.JWT_SECRET, {
      audience: "alura-serverless"
    })
    if (!decodedToken) return unauthorizedError('Invalid Token')

    return decodedToken
  } catch (err) {
    return unauthorizedError('Error on validation token')
  }
}

module.exports = authorizeMiddleware
