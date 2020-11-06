// Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should run the function parameter on every element in the array parameter and, if it returns true, add the element to a new array. Return the new array. 

// Ex:

// Input: [1, 2, 3]  function(num) { return num === 2 }
// Output: [2]

// Input: [1, 2, 3, 4, 5, 6]  function(num) { return num % 2 === 0 }
// Output: [2, 4, 6]

// Input: [1, 2, 3, 4, 5, 6]  function(num) { return num > 3 }
// Output: [4, 5, 6]



// filter method
const filter1 = (arr, cb) => arr.filter(num => cb(num)) 


// forEach method
const filter2 = (arr, cb) => {
    let newArray = []
    arr.forEach(num =>{
        if (cb(num)) {
            newArray.push(num)
        }
    }) 
    return newArray;
}

// for Loop method
const filter3 = (arr, cb) => {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        let num = cb(arr[i]);
        if (num){
            newArray.push((arr[i]))
        } 
    }
    return newArray;
}


console.log(filter1([1, 2, 3],  function(num) { return num === 2 }))
console.log(filter2([1, 2, 3, 4, 5, 6],  function(num) { return num % 2 === 0 }))
console.log(filter3([1, 2, 3, 4, 5, 6] ,  function(num) { return num > 3 }))
