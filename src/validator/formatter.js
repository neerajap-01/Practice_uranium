const word = " functionUp ";

const wordText = function(){
    return `The hardcoded string is ${word}`
};

const toTrim = function(){
    return `Trimmed the hardcoded string ${word.trim()}`; //trim() removes the white spaces from the beginning and end of the string
}

const upperCaseWord = function(){
    return `Upper case of the hardcoded string ${word.toUpperCase()}`;// toUpperCase() converts the string to upper case
}

const lowerCaseWord = function(){
    return `Lower case of the hardcoded string ${word.toLowerCase()}`;// toLowerCase() converts the string to lower case
}


//Below is how we can export the functions to be used in other files
module.exports.wordString = wordText;
module.exports.trim = toTrim;
module.exports.upperCaseWord = upperCaseWord;
module.exports.lowerCaseWord = lowerCaseWord;