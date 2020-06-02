// Declaring a function

const whatever = function () {
  console.log('Yeah yeah whatever')
}

const whenever = () => {
  console.log("NANANANANA 🎵")
}

function wherever() {
  console.log("We'll be together")
}

// Calling a referenced function

whatever()

// Calling a function that you just created (Don't do that)
// const something = () => {
//   console.log('MWAHAHA')
// }

const apple = "🍎"
const pomme = apple

// pomme = apple = "🍎"

console.log(pomme)


const randomFunction = () => {
  return console.log("I AM RANDOM")
}

const anotherRandomFunction = randomFunction

console.log(anotherRandomFunction)

// anotherRandomFunction = randomFunction = () => {
//   console.log("I AM RANDOM")
// }

const yetAnotherRandomFunction = randomFunction()
const yarf = yetAnotherRandomFunction
// undefined
// I AM RANDOM

console.log(yarf)


// Function that shows something from the args

const showMeTheConsole = (whatToShow) => {
  console.log(whatToShow)
}

showMeTheConsole("Bob")

const showBobInTheConsole = showMeTheConsole("Bob") //Aint gonna fly

const showBobInTheConsole = () => {
  showMeTheConsole("Bob")
}

showBobInTheConsole()

// Covulatedation - Past WTF land


// Part 1 commenting life

// Declaration of function taking in a callback function
const higherOrderFunc = function (callback) {
  const data = {
    initials: "YV"
  };

  console.log('BEFORE TIMEOUT CALL');
  setTimeout(() => {
    data.initials = "YAV";
    callback();
  });

  console.log('AFTER TIMEOUT CALL');
}
// Commenting before calling the fct
console.log('BEFORE MAIN CALL');

// Storing the result of the higher order function in result
const result = higherOrderFunc(() => {
  console.log('INSIDE CALLBACK');
})

// Commenting after calling the fct
console.log('AFTER MAIN CALL');

// Part 2 simplyfing what's happening

// Declaration of function taking in a callback function
const higherOrderFunc = function (callback) {
  // Object containing initial
  const data = {
    initials: "YV"
  };
  // Console.log before starting a setTimeout
  console.log('BEFORE TIMEOUT CALL');
  // Starting the setTimeout

  setTimeout(() => {
    // Changing the property initials of the data object to YAV
    data.initials = "YAV";
    // Execute the callback function
    callback();
  }, 1000);

  console.log('AFTER TIMEOUT CALL');

  return data
}
// Commenting before calling the fct
console.log('BEFORE MAIN CALL'); //1

// Storing the result of the higher order function in result
const callbackFct = () => {
  console.log('INSIDE CALLBACK');
}
const result = higherOrderFunc(callbackFct)

const hofWithCallback = () => {
  higherOrderFunc(callbackFct)
}
// Commenting after calling the fct
console.log('AFTER MAIN CALL');


// Part 3
// Definitions
const higherOrderFunc = function (callback) {

  const data = {
    initials: "YV"
  };
  console.log('BEFORE TIMEOUT CALL');
  setTimeout(() => {
    data.initials = "YAV";
    callback();
  }, 1000);

  console.log('AFTER TIMEOUT CALL');

  return data
}
const callbackFct = () => {
  console.log('INSIDE CALLBACK');
}

// Actions
console.log('BEFORE MAIN CALL'); //1
const data = {
  initials: "YV"
};
console.log('BEFORE TIMEOUT CALL'); //2
setTimeout(() => {
  //  *THE STUFF
}, 1000);


// AFTER EVERYTHING IS DONE THEN DO TIMEOUT STUFF
data.initials = "YAV";
console.log('INSIDE CALLBACK'); //5


// Callbacks


const fctWithCallbacks = (a, b, c, d) => {

  d()
}

const addition = (a, b) => a + b

const anotherAdd = (a, b, action) => action(a + b)

anotherAdd(2, 5, () => console(result))


const names = ['Bobby', 'Kevin', 'Keith']

const sayHi = (names) => {
  for (const name of names) {
    console.log(`Hi ${name}`)
  }
}

const yellHi = (names) => {
  for (const name of names) {
    console.log(`HI ${name.toUpperCase()}`)
  }
}

const singHi = (names) => {
  for (const name of names) {
    console.log(`🎶🎵 Hi ${name} 🎶🎵`)
  }
}

const doSomethingName = (names, action) => {
  for (const name of names) {
    action(name)
  }
}

const sing = (word) => {
  console.log(`🎶🎵 Hi ${word} 🎶🎵`)
}

const singHi = names => doSomethingName(names, sing)

const singHi = function (name) {
  doSomethingName(names, sing)
}


singHi(names)