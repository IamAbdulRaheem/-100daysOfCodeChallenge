// Task 76: Function parameters and return values
function addNumbers(num1, num2) {
    // Adding and Returning the result
    return num1 + num2;
}
// calling the function
var result = addNumbers(5, 10);
// logging the result
console.log(result);
// Task 77: Default Parameters
// Defining the function with parameters that have been assigned a default value
function greet(name, greetMessage) {
    if (name === void 0) { name = "anonymous"; }
    if (greetMessage === void 0) { greetMessage = "Hello"; }
    return ("".concat(greetMessage, "! ").concat(name));
}
// Calling the function and logging the result with the name provided
console.log(greet("Abdul Raheem"));
// Calling the function and logging the result with the default parameters values
console.log(greet());
// Task 78: Function expression and Function declaration
// Function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// Function Expression for squaring a number
var squareExpression = function (number) {
    return number * number;
};
// using both the function to square a number
console.log(squareDeclaration(4));
console.log(squareExpression(4));
// Both will give the same output
