"use strict";
// Functions: Funcitons are building block of programme
Object.defineProperty(exports, "__esModule", { value: true });
// Function Declaration
function showMessage() {
    console.log("Hello World!");
}
showMessage(); // It executes the code of the function
// Local Variables
function show_message() {
    let message = "Hello I am JavaScript!";
    console.log(message);
}
show_message();
// console.log(message)   // show error outside
// Outer Variables
let userName = "Abdul Raheem"; // Its value can also be changed but if we redeclare it inside function than this one is ignored
function ShowMessage() {
    let userName = "Abdul Rehman"; // outer one is ignored
    let message = `Hello ${userName}!`;
    console.log(message);
}
ShowMessage();
// Parameters
function parameters(from, text) {
    console.log(`${from}: ${text}`);
}
parameters('Abdul Raheem', 'Hello!');
// Default Parameters
function defaultParameters(from, text = "No text given!") {
    console.log(`${from}: ${text}`);
}
defaultParameters("Abdul Raheem");
// Alternative Default Parameters
function alternativeDefaultParameters(text) {
    if (text === undefined) {
        text = "Empty message";
    }
    console.log(text);
}
alternativeDefaultParameters(); // Print empty messge here in TS file this is showing error but work fine in JS file and the message is executed
// We can also use || operator
function defaultParametersWithOR(text) {
    text = text || "Empty message";
    console.log(text);
}
defaultParametersWithOR(); // Print empty messge here in TS file this is showing error but work fine in JS file and the message is executed
// Using nullish coalescing operator
function showCount(count) {
    console.log(count ?? "Unknown"); // if no argument is given than unknown is printed to the console
}
showCount(0); // 0
showCount(); // Print Unknown here in TS file this is showing error but work fine in JS file and the message is executed  
// Returning a value
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // output 5
// A function with an empty return
function empty() {
    // empty
}
console.log(empty()); // undefined
// Naming a function: Its name should be same as what it do to make it more readable
// showMessage(){}   // to show a message
// getAge(){}     // returns the age
// calcSum(){}      // calculate the sum
// createForm(){}   // Create a form
// Functions == Comments
// The frist variant uses a label
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0)
                continue nextPrime;
        }
        console.log(i);
    }
}
showPrimes(10);
// The second variant shows an additional Function
function showPrime(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i))
            continue;
        console.log(i);
    }
}
function isPrime(n) {
    for (let i = 0; i < n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
console.log(showPrime(10));
// Function Expression
let sayHi = function () {
    console.log("Hello");
};
sayHi(); // Hello
// Function is a value so we can treat it like other values
let func = sayHi;
func(); // Hello
sayHi(); // Hello
// CallBack functions
// function ask(question:any, yes:any, no:any){
//     if(confirm(question)) yes();
//     else no();
// }
// function showOk(){
//     alert("You agreed.");
// }
// function showCancel(){
//     alert("You cancelled!");
// }
// ask("Do you agree?",showOk(),showCancel());
// Function Declaration vs Function Expression
declareSayHi(); // works fine if it is declared above because when JS is perparing to start the script it is visible everywhere in it
function declareSayHi() {
    console.log("Hello!");
}
// function experssion
// expressSayHi()   // function expression are created when execution reaches them so this will show error if called above
let expressSayHi = function () {
    console.log("Hello!");
};
// Behaviour of both in block
let age = 18;
if (age > 18) {
    welcome(); // visible here
    function welcome() {
        console.log("Hello!");
    }
    welcome(); // visible here
}
// welcome()    // Not visible outside block
else {
    function welcome() {
        console.log("greetings!");
    }
}
// welcome()  // Error: Welcome is not defined because it is visible only inside the block
// The correct approach is to use function expression
let welcome;
if (age > 18) {
    welcome = function () {
        console.log("Hello!");
    };
}
else {
    welcome = function () {
        console.log("Greetings!");
    };
}
welcome(); // Now its OK
