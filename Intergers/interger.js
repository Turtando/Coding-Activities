// Write a function that takes in an input and returns true if it’s an integer and false otherwise.

// Ex:
// Input: "7"
// Output: false

// Input: 7
// Output: true

// Input: 4.3
// Output: false

const isAnInterger = input => {
    if (Math.floor(input) === input && input === "number" ) {
        return true
    }
        return false
}

const isInt = input => {
   return Math.floor(input) === input
}

const isAnInterger = (input) => {
    return parseInt(input) === input;
}

const is