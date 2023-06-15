const { generateHash } = require("../../infra/bcrypt")
const { encode } = require("../../infra/jwt")
const { getUserByCredentials } = require("../../infra/mongodb")

async function generateAccessTokenByCredential(userData) {
  const { username, password } = userData
  const hashedPass = generateHash(password)

  const user = await getUserByCredentials(username, hashedPass)
  if (!user) return null

  const accessToken = encode({id: user.id, username})
  return accessToken
}

module.exports = generateAccessTokenByCredential
