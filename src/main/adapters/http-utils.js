
function buildResponse(statusCode, body = {}, headers = {}) {
  return {
    statusCode,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  }
}

function extractRequest(event) {
  return {
    body: JSON.parse(event?.body) || {},
    headers: event?.headers || {},
    params: event?.pathParameters || {}
  }
}

module.exports = {
  buildResponse,
  extractRequest
}
