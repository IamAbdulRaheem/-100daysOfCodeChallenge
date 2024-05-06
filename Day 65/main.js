/***********************************
 * TYPE ANNOTATIONS WITH FUNCTIONS *
 ***********************************/
// Function to calculate the area of rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}
var area = calculateRectangleArea(5, 3);
console.log("The area of Rectangle is: ", area);
/***********************************
 * OPTIONAL AND DEFAULT PARAMETERS *
 ***********************************/
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log("Hello ".concat(name, ", You are ").concat(age, " years old."));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
greetOptional("Abdul Raheem"); // output: Hello Abdul Raheem
greetOptional("Abdul Raheem", 21); // output: Hello Abdul Raheem, You are 21 years old.
// Default Parameters
function greetDefault(name, age) {
    if (age === void 0) { age = 21; }
    console.log("Hello ".concat(name, ", You are ").concat(age, " years old."));
}
greetDefault("Abdul Raheem"); // output: Hello Abdul Raheem, You are 21 years old.
greetDefault("Abdul Raheem", 30); // output: Hello Abdul Raheem, You are 30 years old.
/****************************
 * FUNCTION REST PARAMETERS *
 ****************************/
// Function with a rest parameters
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
// Calling the function with various numbers
console.log(addAll(10, 20, 30, 40, 100, 10.5, +true)); // output: 211.5
/******************
 * ARROW FUNCTION *
 ******************/
var addWithArrow = function (num1, num2) { return num1 + num2; };
console.log(addWithArrow(10, 20)); // output: 30
/**********************
 * ANONYMOUS FUNCTION *
 **********************/
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20)); // output: 30
/******************
 * VOID AND NEVER *
 ******************/
function greet(name) {
    console.log("Hello ".concat(name));
}
greet("Abdul Raheem");
function noReturnValue() {
    // This function never return a value(implicity returns undefined)
}
noReturnValue();
// never
function throwError(message) {
    throw new Error(message);
}
throwError("Something went Wrong!");
function infiniteLoop() {
    while (true) {
        // This function never exit (infinite Loop)
    }
}
