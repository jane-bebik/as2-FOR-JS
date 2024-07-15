// utilities.js

// Function 1: Concatenating text with labels
function function1(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to ILAC GeorgianCollege, your teacher Anmar Jarjees is waiting for you on room 113`);
}

//Unit conversion
function function2(celsius) { 
    // Celsius to Fahrenheit
    return celsius * 9 / 5 + 32;
}

//Math
function function3(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

//Advanced function
function function4() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    console.log(`Today is ${dayOfWeek}!`);
}

// Exporting functions
module.exports = {
    function1,
    function2,
    function3,
    function4
};
