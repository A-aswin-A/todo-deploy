require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

let db;

async function connectDB() {
  if (db) return db;
  const client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
  console.log('Connected to MongoDB');
  return db;
}

module.exports = connectDB;