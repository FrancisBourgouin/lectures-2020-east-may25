const { Client } = require('pg')

const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'cellar',
  password: 'francis',
  port: 5432,
})

client.connect()


client.query('SELECT * FROM bottles', (err, res) => {
  const { rowCount, rows } = res
  console.log(err, rows, rowCount)
  client.end()
})

console.log('AM I ASYNC ????')