// Why do we use callbacks ?

// Reusability & Asynchronous operations

const Francisfridge = {
  "🍕": {
    name: "Pizza",
    quantity: 1
  },
  "🍎": {
    name: "Apple",
    quantity: 5
  },
  "🐔": {
    name: "Chicken",
    quantity: 2
  },
  "🦜": {
    name: "Parrot",
    quantity: 2
  },
}


const Keithsfridge = {
  "🐈": {
    name: "Cat",
    quantity: 1
  },
  "🌔": {
    name: "Moon (It's cheese duh)",
    quantity: 5
  },
  "🍙": {
    name: "Onigiri",
    quantity: 2
  },
  "🦽": {
    name: "Wheel Chair",
    quantity: 2
  },
}

const fetchFridgeContent = (fridge) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (Math.round(Math.random())) {
      if (true) {
        resolve(fridge)
      } else {
        reject("Francis fell while walking to the fridge... No judgment.")
      }
    }, 1000)
  })
}

const consoleFridgeContent = (fridge) => console.log(fridge)

const consoleFridgeIcons = (fridge) => console.log(Object.keys(fridge))

const consoleTheFail = error => console.log(error)




// fetchFridgeContent(Francisfridge, consoleFridgeContent)
// const dotMyLife = () => console.log('.')

// const dotLife = setInterval(dotMyLife, 200);

// fetchFridgeContent(Francisfridge)
//   .then(fridge => consoleFridgeIcons(fridge))
//   .catch(error => consoleTheFail(error))
//   .finally(() => clearInterval(dotLife))




// // Promise hell ?
// fetchFridgeContent(Francisfridge)
//   .then(fridge => {
//     consoleFridgeContent(fridge)
//     consoleFridgeIcons(fridge)
//     delete fridge["🦜"]
//     fetchFridgeContent(Francisfridge)
//       .then(fridge => consoleFridgeIcons(fridge))
//   })
//   .catch(error => consoleTheFail(error))
//   .finally(() => clearInterval(dotLife))

// fetchFridgeContent(Francisfridge)
//   .then(fridge => {
//     consoleFridgeContent(fridge)
//     return fridge
//   })
//   .then(fridge => {
//     console.log(fridge)
//     return fridge
//   })
//   .then(fridge)
//   .catch(e => console.log(e))


// fetchImagesFromInstagram(url)
//   .then(imgList => {
//     return fetchWeather(imgList)
//   })
//   .then(imgListWithWeather => {
//     return fetchMaps(imgListWithWeather)
//   })
//   .then(output => console.log(output))


const listOfFetchFridges =
  [
    fetchFridgeContent(Francisfridge),
    fetchFridgeContent(Keithsfridge)
  ]

// Promise
//   .all(listOfFetchFridges)
//   .then(fridgeContent => {
//     console.log(`Francis has : ${consoleFridgeIcons(fridgeContent[0])}`)
//     console.log(`Keith has : ${consoleFridgeIcons(fridgeContent[1])}`)
//   })
//   .catch(e => console.log(e))

Promise
  .race(listOfFetchFridges)
  .then(fridge => console.log(fridge))
  .catch(e => console.log(e))


const fetchUsers = () => {
  return db
    .query('SELECT * FROM users')
    .then(dbRes => dbRes.rows)
}

fetchUsers().then(users => { return users })
fetchUsers().then(users => users)

fetchUsers().then(function (users) {
  return users
})