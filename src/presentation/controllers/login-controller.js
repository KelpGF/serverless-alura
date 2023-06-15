const { internalError, ok, unauthorizedError } = require("../http-protocols")
const generateAccessTokenByCredential = require("../../data/usecases/login-usecase")

module.exports.loginController = async ({ body }) => {
  try {
    const { username, password } = body
    if (!username, !password) return unauthorizedError("Email or password is empty!")

    const accessToken = await generateAccessTokenByCredential({ username, password })
    if (!accessToken) return unauthorizedError("Invalid credential provided!")

    return ok({ accessToken })
  } catch (err) {
    return internalError({ error: err })
  }
}
