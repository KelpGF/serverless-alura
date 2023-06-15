const getResultById = require("../../data/usecases/get-result-usecase")
const { ok, internalError, notFoundError } = require("../http-protocols")

module.exports.getResultController = async ({ params }) => {
  try {
    const result = await getResultById(params.id)

    return result ? ok(result) : notFoundError('Result not found')
  } catch (err) {
    return internalError({ error: err })
  }
}
