const { internalError, ok } = require("../http-protocols")
const submitResult = require("../../data/usecases/submit-result-usecase")

module.exports.submitResultController = async ({ body }) => {
  try {
    const { userId, answers } = body

    const resultId = await submitResult(userId, answers)

    return ok({ resultId })
  } catch (err) {
    return internalError({ error: err })
  }
}
