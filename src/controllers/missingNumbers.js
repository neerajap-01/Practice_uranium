// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing

//Ans:-
//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
const missingNums = function (req, res) {
    let arr = [1,2,3,5,6,7];
    let sumOfArray = 0;
    for(let i = 0; i < arr.length; i++){
        sumOfArray += arr[i];        
    }
    let n = arr.pop();
    let result = ((n * (n+1)/2) - sumOfArray); // n*(n+1)/2 - sumOfArray = missing number ; This is how to find missing number between 1 to 10;
    console.log(result);
    // res.send( { data: `The missing number from the given array is ${result}` } )
}


// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing

//Ans:-
//logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
const missingNumbers = function (req, res) {
    let arr = [33,34,35,37,39];
    let sumOfArray = 0;
    for(let i = 0; i < arr.length; i++){
        sumOfArray += arr[i];        
    }
    let n = arr.length;
    let firstElement = arr[0];
    let lastElement = arr.pop();
    let result = ((((n+1) * (firstElement + lastElement))/2) - sumOfArray)//
    console.log(result);
    // res.send( { data: `The missing number from the given array is ${result}` } )
}

module.exports.nums1toN = missingNumbers;
module.exports.nums1to10 = missingNums;