const { getResultController } = require('../presentation/controllers/get-result-controller')
const { loginController } = require('../presentation/controllers/login-controller')
const { submitResultController } = require('../presentation/controllers/submit-result-controller')

const AWSLambdaAdapter = require('./adapters/aws-lambda-adapter')
const authMiddleware = require('./middlewares/auth-middleware')

module.exports.login = AWSLambdaAdapter(loginController)
module.exports.sendResponse = AWSLambdaAdapter(authMiddleware(submitResultController))
module.exports.getResult = AWSLambdaAdapter(authMiddleware(getResultController))
