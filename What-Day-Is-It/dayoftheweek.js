// Write a function that takes in a number and returns the corresponding day of the week.

// Ex:
// Input: 1
// Output: 'Monday'

// Input: 5
// Output: 'Friday'

// Input: 8
// Output: undefined

const dayOfTheWeek = (num) => {
    switch (num) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
        default:
            day = "You need a day, son!"
    }
}