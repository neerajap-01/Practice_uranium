const _ = require('lodash'); //this is how we can use lodash different functions by importing it

/* Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays. */

const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"];

const printArray = function(){
    const test = _.chunk(monthsOfYear, 3);

    return test;
}

/* Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.*/

const oddNumbers = [1,3,5,7,9,11,13,15,17,19]

const printOddNumbers = function(){
    const test = _.tail(oddNumbers)

    return test;
}

/*Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them. */

const num1 = [1,2,3,4,5,6,7,8,9]
const num2 = [1,2,3,4,5,33,42,56,8,9]
const num3 = [1,2,3,4,52,73,93,6,7,8,9]
const num4 = [1,2,63,83,36,74,6,7,8,9]
const num5 = [1,2,3,4,52,26,37,73,84]

const printUniqueArray = function(){
    const test = _.union(num1,num2,num3,num4,num5);

    return test;
}

/*Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]*/

const printObjects = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];

const printObj = function(){
    const test = _.fromPairs(printObjects);

    return test;
}


//Below is how we can export the functions to be used in other files

module.exports.oddNums = printOddNumbers;
module.exports.uniqueArr = printUniqueArray;
module.exports.Array = printArray;
module.exports.Object = printObj;


console.log(printArray());
console.log(printOddNumbers());
console.log(printUniqueArray());
console.log(printObj());