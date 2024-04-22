"use strict";
// Task 130: importing a function
Object.defineProperty(exports, "__esModule", { value: true });
var export_1 = require("./export");
console.log((0, export_1.add)(5, 3)); // We import this function from exportFunction.ts and log the result here
// Task 131: Importing a class
var export_2 = require("./export");
var name = new export_2.person("Abdul Raheem");
name.greet(); // output: Hello! My name is Abdul Raheem.
