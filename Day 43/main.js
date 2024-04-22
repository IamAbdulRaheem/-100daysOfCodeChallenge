// Task 127: Converting function expression into arrow function
var _this = this;
// First we will write a traditional function expression
var traditionalFunctionalExpression = function (a, b) {
    // This is syntax of a traditional function expression
    return a + b;
};
// Now we will convert it into an arrow function
var convertToArrowFunction = function (a, b) { return a + b; }; // It is a short hand property to write a function
// Logging the result will give the same output of both
console.log(traditionalFunctionalExpression(5, 3));
console.log(convertToArrowFunction(5, 3));
// Task 128: Arrow function with multiple parameters
var multipleParameters = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (total, number) { return total * number; }, 1);
}; // it will return the product of all parameters
console.log(multipleParameters(2, 3, 4, 5));
// Task 129: Behaviour of this is arrow function and traditional function
var traditionalVsArrow = {
    property: "traditionalVsArrow",
    traditionalFunction: function () {
        console.log("Traditional Function:", this.property);
    },
    arrowFunction: function () {
        console.log("Arrow Function:", _this.property);
    }
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
