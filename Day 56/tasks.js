"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Task 1: The post fix and prefix forms
let $a = 1, $b = 1;
let $c = ++$a;
let d = $b++;
console.log($c); // 2
console.log(d); // 1
// Task 2: Assignment result
let $x = 2;
let y = 1 + ($x *= 2);
console.log(y); // 5
// Task 3: Type Conversions
// Some Showing error in TS but will work fine in JS and give the output if we run the command node main.js after we have compiled the code
console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -10
console.log(true + false); // true
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // output 9px
console.log("$" + 4 + 5); // output $45
console.log("4" - 2); // 2 
console.log("4px" - 2); // 4px-2 
console.log(" -9 " + 5); // output  -9 5
console.log(" -9 " - 5); //  -9 -5
console.log(null + 1); // 1
console.log(undefined + 1); // 0
console.log("\t \n" - 2); // -2  
