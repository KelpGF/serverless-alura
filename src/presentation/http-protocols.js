module.exports = {
  ok: (body = {}) => ({ code: 200, body }),
  unauthorizedError: (message) => ({ code: 401, body: { message }, }),
  notFoundError: (message) => ({ code: 404, body: { message }, }),
  internalError: (body = {}) => ({ code: 500, body: { message: "Ops! Internal server error!", ...body } }),
}