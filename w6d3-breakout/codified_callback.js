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

const fetchFridgeContent = (fridge, action) => {
  setTimeout(() => {
    if (Math.round(Math.random())) {
      action(null, fridge)
    } else {
      action("Francis fell while walking to the fridge... No judgment.", null)
    }
  }, 1000)
}

const consoleFridgeContent = (error, fridge) => {
  if (!error) {
    console.log(fridge)
  } else {
    console.log(error)
  }
}

const consoleFridgeIcons = (error, fridge) => {
  if (!error) {
    console.log(Object.keys(fridge))
  } else {
    console.log(error)
  }

}




// fetchFridgeContent(Francisfridge, consoleFridgeContent)
fetchFridgeContent(Francisfridge, consoleFridgeIcons)