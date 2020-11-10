// Write a function that takes in a number and reverses the order of the digits.

// Ex:
// Input: 1234
// Output: 4321

// Input: 1201
// Output: 1021

// Input: 4
// Output: 4

const reverseDigits = (num) => {
    return parseInt(num.toString().split("").reverse().join("")); 
}

console.log(reverseDigits(4321));
console.log(reverseDigits(1201));
console.log(reverseDigits(4));
console.log(reverseDigits(2344324));
