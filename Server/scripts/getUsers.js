const mongodb = require("mongodb")
const dotenv = require("dotenv")

dotenv.config({path:'../config.env'})
const DB = process.env.DATABASE;

const getAll = async () => {
const client = new mongodb.MongoClient(DB)

await client.connect()

const database = client.db("merndatabase")

const docs = await database.collection("users").find().toArray()

console.log(docs)


process.exit(0)
}

getAll()