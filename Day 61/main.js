"use strict";
// Arrow Functions basics in JavaScript: Its a short hand property of functions expression
Object.defineProperty(exports, "__esModule", { value: true });
// Its simple syntax is 
let arrowFunction = () => { };
arrowFunction();
// Example
let sum = (a, b) => a + b; // it returns a+b
console.log(sum(1, 4)); // output 5
let double = (n) => n * 2;
console.log(double(3)); // output 6
// can also be used to dynamically create a function
let age = 20;
let welcome = (age < 18) ?
    () => console.log("Hello") :
    () => console.log("Bye");
welcome();
// Multiline Arrow Function
let add = (a, b) => {
    let result = a + b;
    return result; // We have to write return if we have {} bracs
};
console.log(add(2, 3)); // output 5
// JavaScript Specials in JavaScript
// In this Topic we have recalled all our previous topics that we learnt
