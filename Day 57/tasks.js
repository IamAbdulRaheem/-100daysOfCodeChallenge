"use strict";
// Task 1: Comparisons
Object.defineProperty(exports, "__esModule", { value: true });
console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === "\n0\n"); // false
// Task 2: if(a string with zero)
if ("0") {
    console.log("Hello!"); // it will be shown becasue string is non empty
}
// Task 3: The Name of JavaScript
let name = "EcmaScript";
if (name) {
    console.log("Right!");
}
else {
    console.log("Don't you know it is EcmaScript!");
}
// Task 4: Show the sign
let number = 1;
if (number > 0) {
    console.log(1);
}
else if (number < 0) {
    console.log(-1);
}
else {
    console.log(0);
}
// Task 5: Rewrite if inot '?'
// using task 2 to rewrite into '?'
let num = "0" ? "Hello" : "Hellow!";
console.log(num);
// Task 6: Rewrite if-else in '?'
// using the task 4 to rewrite into '?'
let result = number > 0 ? 1 : // if
    number < 0 ? -1 : // else if
        0; // else
console.log(result);
