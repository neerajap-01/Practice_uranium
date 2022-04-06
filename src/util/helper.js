const data = new Date(); //new Date() is a function that returns the current date and time and provided by JS.

const printDate =  function(){
    return data.getDay() + "-" + (data.getMonth()+1) + "-" + data.getFullYear(); //getDay() returns the day of the week as a number (0-6) and getMonth() returns the month as a number (0-11) so we add 1 to get the correct month. and getFullYear() returns the year as a 4 digit number.
}    

const printMonth = function(){
    return data.toLocaleString('default', { month: 'long' }); //toLocaleString() returns the date and time in a localized format, just copy the code and paste it from web.
}

const printInfo = function(){
    return "Uranium, W2D3, the topic for today is Nodejs module system"
}


//Below is how we can export the functions to be used in other files
module.exports.date = printDate;
module.exports.month = printMonth;
module.exports.info = printInfo;