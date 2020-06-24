const generateHelpers = client => {
  const fetchAllBottlesFromDB = () => {
    const query = `
          SELECT 
            bottles.*, 
            spirit_types.name AS spirit_name, spirit_types.description, spirit_types.region  
          FROM bottles JOIN spirit_types ON bottles.spirit_type_id = spirit_types.id 
          ORDER BY bottles.id
    `
    return client.query(query)

  }

  const fetchSpecificBottleFromDB = name => {
    const query = `
        SELECT 
          bottles.*, 
          spirit_types.name AS spirit_name, spirit_types.description, spirit_types.region  
        FROM bottles JOIN spirit_types ON bottles.spirit_type_id = spirit_types.id
        WHERE bottles.name LIKE $1
        ORDER BY bottles.id
    `
    return client.query(query, [name])
  }

  return { fetchAllBottlesFromDB, fetchSpecificBottleFromDB }
}


module.exports = generateHelpers