// <!-- Write a function that takes a string as a parameter and determines if it is a valid password with the following constraints:

// 1. It must be at least 8 characters long
// 2. It must contain at least 1 capital letter
// 3. It must contain at least 1 lower case letter

// Output true if the string is a valid password or false otherwise.

// Ex:
// Input: RexTheDog
// Output: true

// Input: rexthedog
// Output: false

// Input: REXTHEDOG
// Output: false

// Input: Dog
// Output: false -->


const isValidPass = str => {
    if (str.length >= 8 &&  str !== str.toUpperCase() && str !== str.toLowerCase()) {
        return true
    }
    return false;
}

//Condensed Version
const isValidPass2 = str => str.length >= 8 &&  str !== str.toUpperCase() && str !== str.toLowerCase();


console.log(isValidPass("REXTHEDOG"))
console.log(isValidPass("rexthedog"))
console.log(isValidPass("RexTheDog"))
console.log(isValidPass("Dog"))

console.log(isValidPass2("REXTHEDOG"))
console.log(isValidPass2("rexthedog"))
console.log(isValidPass2("RexTheDog"))
console.log(isValidPass2("Dog"))