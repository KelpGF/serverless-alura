const authorizeMiddleware = require("../../presentation/middlewares/auth-middleware");

function authMiddleware(func) {
  return async (request) => {
    const authResult = await authorizeMiddleware(request)
    if (authResult.code === 401) return authResult

    request.body.userId = authResult.id

    return func(request)
  }
}

module.exports = authMiddleware
