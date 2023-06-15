const { insertResult } = require("../../infra/mongodb")

async function submitResult(userId, answers) {
  const correctQuestions = [3, 1, 0, 2]
  const totalCorrectAnswers = answers.reduce((acc, answer, index) => {
    acc += Number(answer === correctQuestions[index])
    return acc
  }, 0)

  const result = {
    userId,
    answers,
    totalCorrectAnswers,
    totalAnswers: answers.length
  }

  const resultId = await insertResult(result)
  return resultId
}

module.exports = submitResult
