// Write a function that takes in a string and returns true if it’s a pangram or false otherwise.
// Pangram: a sentence that contains every letter in the alphabet.

// Ex:
// Input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
// Output: true

// Input: “Five hexing wizard bots jump quickly” 
// Output: true

// Input: “JavaScript is the best”
// Output: false


const pangram = (str) => {
    str = str.toLowerCase();
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    
    for (let i = 0; i < alpha.length; i++) {
        if (!str.includes(alpha[i])) {
            return false;
        }
    }
    return true;
}

console.log("Watch Jeopardy, Alex Trebek’s fun TV quiz game");
console.log(pangram("Five hexing wizard bots jump quickly"));
console.log(pangram("JavaScript is the best"))
