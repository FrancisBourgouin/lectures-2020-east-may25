// closures!


const countdown = (time, action) => {
  for (let current = time; current >= 0; current--) {
    action(`${current}...`)
  }
  return 'Completed'
}

countdown(5, console.log)

const countdownFromFive = () => countdown(5)

countdownFromFive()

// Countdownfactory will take in a time argument, an integer
const countdownFactory = time => {
  const generatedCountdown = () => {
    for (let current = time; current >= 0; current--) {
      console.log(`${current}...`)
    }
  }

  return generatedCountdown
}
// countdown factory should return a function definition, 
// where time is set to the time given

const countdownFromTen = countdownFactory(10)

// countdownFromTen = () => {
// "time is 10"
//   for (let current = time; current >= 0; current--) {
//     console.log(`${current}...`)
//   }
// }

countdownFromTen()