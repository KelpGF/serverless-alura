const { MongoClient, Db, ObjectId } = require('mongodb')

/** @type { Db } */
let connectionInstance = null

/**
 * @returns { Promise<Db> }
 */
async function connectToDB() {
  if (connectionInstance) return connectionInstance

  const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING)

  const connection = await client.connect()

  return connectionInstance = connection.db(process.env.MONGODB_DB_NAME)
}

async function insertResult(result) {
  const client = await connectToDB()
  const collection = client.collection('results')
  const { insertedId } = await collection.insertOne({ ...result, userId: new ObjectId(result.userId) })

  return String(insertedId)
}

async function findResultById(id) {
  const client = await connectToDB()
  const collection = client.collection('results')
  const result = await collection.findOne({ _id: new ObjectId(id) })

  return result && { ...result, id: String(result._id) }
}

async function getUserByCredentials(username, password) {
  const client = await connectToDB()
  const collection = client.collection('users')
  const user = await collection.findOne({ username, password })

  return user && { ...user, id: String(user._id) }
}

module.exports = {
  insertResult,
  findResultById,
  getUserByCredentials
}
