const additionFunction = function(number1, number2) {
    return number1 + number2;
}

const subtractionFunction = function(number1, number2) {
    return number1 - number2;
}

// Create a calculator where the user specifies which action to be taken

var firstNumber = prompt("Enter the first number");
var secondNumber = prompt("Enter the second number");
var arithmeticOperation = prompt("Enter either (+, -)");

// Convert our strings to numbers
var firstNumberConverted = parseInt(firstNumber);
var secondNumberConverted = parseInt(secondNumber);

if (arithmeticOperation == "+") {
    let result = additionFunction(firstNumberConverted, secondNumberConverted);
    alert(result);
} else if (arithmeticOperation == "-") {
    let result = subtractionFunction(firstNumberConverted, secondNumberConverted);
    alert(result);
} else {
    alert("Please enter a valid operation");
}