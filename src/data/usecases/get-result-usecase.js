const { findResultById } = require("../../infra/mongodb")

async function getResultById(resultId) {
  const result = await findResultById(resultId)
  return result
}

module.exports = getResultById
