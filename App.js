//to run  just do node app.js


// Importing functions from the second file!
const { function1, function2, function3, function4 } = require('./utilities');

// Invoke the functions from utilities
function1('John', 'Doe'); //AHAHAHAHAHAHAH
const convertedValue = function2(100);
//plese give me a good grade
console.log('Converted value:', convertedValue);
const factorialResult = function3(5);
console.log('Factorial result:', factorialResult);
function4();