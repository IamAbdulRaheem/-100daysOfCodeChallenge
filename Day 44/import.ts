// Task 130: importing a function

import { add } from "./export";
console.log(add(5,3));  // We import this function from exportFunction.ts and log the result here

// Task 131: Importing a class

import { person } from "./export";
const name= new person("Abdul Raheem");
name.greet();  // output: Hello! My name is Abdul Raheem.


// Task 132: importing default and named export

// Importing default export

import student from "./export";

// Importing Named export

import { one,two } from "./export";