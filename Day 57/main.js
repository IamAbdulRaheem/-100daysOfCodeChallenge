"use strict";
// Comparisons Operators in JavaScript and Type Script: In TypeScript, strict type checking is enforced by default, which means certain comparisons that may work in JS but invlove different types in TypeScript will result in errors.
Object.defineProperty(exports, "__esModule", { value: true });
// All comparison operators retrun a boolean value
console.log(2 > 1); // true
console.log(5 < 2); // false
console.log(2 != 2); // false
// It can also be assigned to a variable
let result = 5 > 4;
console.log(result); // true
// String Comparison
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true
// Comparison of different types
// Showing error in TS but will work fine in JS and give the output if we run the command node main.js after we have compiled the code
console.log('5' > 2); // true
console.log('01' == 1); // true
console.log(true == 1); // true
console.log(true == 0); // false
console.log(0 == false); // true
console.log('' == false); // true
// Strict equality
console.log(0 === false); // false 
console.log(0 !== false); // true
// Comparisons with null and undefined
console.log(null === undefined); //false
console.log(null == undefined); // true
// Strange Results: null vs 0
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// An In CompareAble undefine
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
// Conditional Operators if; Ternary Operators in JS
// The if statement
let year = 2015;
if (year === 2015) {
    console.log("Year is 2015!");
}
// Boolean conversion
if (year) {
    console.log(Boolean(year));
}
// The else clause
if (year === 2015) {
    console.log("Year is 2015!");
}
else {
    console.log("Please guess right");
}
// The if-else chain
if (year === 2015) {
    console.log("Year is 2015");
}
else if (year > 2015) {
    console.log("Year is greater than 2015");
}
else {
    console.log("Please guess right");
}
// Assigining variable depending upon condition
let accessAllowed;
let Age = 20;
if (Age > 18) {
    accessAllowed = true;
}
else {
    accessAllowed = false;
}
// Conditional Ternary Operator
let accessGranted = Age > 18 ? true : false;
console.log(accessGranted);
// Multiple '?'
let age = 18;
let message = age < 3 ? "Hi baby" : // it is like if
    age > 100 ? "Hi Elder" : // it is like else if
        age > 3 ? "Hi adult" : // it is like else if
            "Hi what is your age"; // it is like else
console.log(message);
