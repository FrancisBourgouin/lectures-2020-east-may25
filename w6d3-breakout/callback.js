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
      action(fridge)
    } else {
      action("Francis fell while walking to the fridge... No judgment.")
    }
  }, 1000)
}

const consoleFridgeContent = fridge => console.log(fridge)

const consoleFridgeIcons = fridge => {
  console.log(Object.keys(fridge))
}




// fetchFridgeContent(Francisfridge, consoleFridgeContent)
fetchFridgeContent(Francisfridge, consoleFridgeIcons)