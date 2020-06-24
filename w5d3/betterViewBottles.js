const { Client } = require('pg')
const generateHelpers = require('./helpers')

const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'cellar',
  password: 'francis',
  port: 5432,
})
const { fetchSpecificBottleFromDB, fetchAllBottlesFromDB } = generateHelpers(client)

client.connect()

fetchAllBottlesFromDB.then(res => console.log(res.rows))