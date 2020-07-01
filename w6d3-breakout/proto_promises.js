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

const fetchFridgeContent = (fridge, actionWhenSuccesful, actionWhenFail) => {
  setTimeout(() => {
    if (Math.round(Math.random())) {
      actionWhenSuccesful(fridge)
    } else {
      actionWhenFail("Francis fell while walking to the fridge... No judgment.")
    }
  }, 1000)
}

const consoleFridgeContent = (fridge) => console.log(fridge)

const consoleFridgeIcons = (fridge) => console.log(Object.keys(fridge))

const consoleTheFail = error => console.log(error)




// fetchFridgeContent(Francisfridge, consoleFridgeContent)
fetchFridgeContent(Francisfridge,
  consoleFridgeIcons,
  consoleTheFail
)