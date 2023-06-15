const { extractRequest, buildResponse } = require("./http-utils")

module.exports = (func) => {
  return async (event) => {
    const request = extractRequest(event)

    const result = await func(request)

    return buildResponse(result.code, result.body)
  }
}