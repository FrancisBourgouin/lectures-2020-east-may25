// Show all bottles with their respective spirit info
// Build a proper sentence containing the bottle info
// Populate sentence with result of database query
// Iterate over the array to show all of the bottles


// Command line argument should be able to filter bottle by name

const { Client } = require('pg')

const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'cellar',
  password: 'francis',
  port: 5432,
})

const nameOfBottle = process.argv[2]


client.connect()

const badQuery = "SELECT * FROM bottles JOIN spirit_types ON bottles.spirit_type_id = spirit_types.id ORDER BY bottles.id"
const generalQuery = `
      SELECT 
        bottles.*, 
        spirit_types.name AS spirit_name, spirit_types.description, spirit_types.region  
      FROM bottles JOIN spirit_types ON bottles.spirit_type_id = spirit_types.id 
      ORDER BY bottles.id
`
const oldSpecificQuery = `
      SELECT 
        bottles.*, 
        spirit_types.name AS spirit_name, spirit_types.description, spirit_types.region  
      FROM bottles JOIN spirit_types ON bottles.spirit_type_id = spirit_types.id
      WHERE bottles.name LIKE '${nameOfBottle}' 
      ORDER BY bottles.id
`
const specificQuery = `
      SELECT 
        bottles.*, 
        spirit_types.name AS spirit_name, spirit_types.description, spirit_types.region  
      FROM bottles JOIN spirit_types ON bottles.spirit_type_id = spirit_types.id
      WHERE bottles.name LIKE $1
      ORDER BY bottles.id
`

const query = nameOfBottle ? specificQuery : generalQuery

let otherQuery = ""
if (nameOfBottle) {
  otherQuery = specificQuery
} else {
  otherQuery = generalQuery
}

client.query(query, [`%${nameOfBottle}%`, "second thing"], (err, res) => {
  if (err) {
    console.log(err)
    return err
  }

  for (const row of res.rows) {
    const { name, age, brand, volume, spirit_name, region, description } = row
    const coolSentence = `We have a bottle of ${name}, aged ${age}, ${brand}, the volume is ${volume}, it is considered a ${spirit_name}, a ${description} from ${region}`
    console.log(coolSentence)
  }
  client.end()
})

console.log('AM I ASYNC ????')