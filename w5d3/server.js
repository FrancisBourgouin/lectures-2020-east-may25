const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
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
const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// const fetchAllBottlesFromDB = () => {
//   const query = `
//         SELECT 
//           bottles.*, 
//           spirit_types.name AS spirit_name, spirit_types.description, spirit_types.region  
//         FROM bottles JOIN spirit_types ON bottles.spirit_type_id = spirit_types.id 
//         ORDER BY bottles.id
//   `
//   return client.query(query)

// }

// const fetchSpecificBottleFromDB = name => {
//   const query = `
//       SELECT 
//         bottles.*, 
//         spirit_types.name AS spirit_name, spirit_types.description, spirit_types.region  
//       FROM bottles JOIN spirit_types ON bottles.spirit_type_id = spirit_types.id
//       WHERE bottles.name LIKE $1
//       ORDER BY bottles.id
//   `
//   return client.query(query, [name])
// }


app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get('/bottles', (req, res) => {
  fetchAllBottlesFromDB()
    .then(dbRes => {
      res.json(dbRes.rows)
    })
    .catch(err => {
      const stringifiedErr = JSON.stringify(err)
      res.send(stringifiedErr)
    })
})

app.get('/bottles/:bottle_name', (req, res) => {
  fetchSpecificBottleFromDB(req.params.bottle_name)
    .then(dbRes => {
      res.json(dbRes.rows)
    })
    .catch(err => {
      const stringifiedErr = JSON.stringify(err)
      res.send(stringifiedErr)
    })
})

client.connect()
app.listen(port, () => {
  console.log('server is ready')
})