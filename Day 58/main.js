"use strict";
// Logical Operators
Object.defineProperty(exports, "__esModule", { value: true });
// OR ( || ): it is true if its one value is true
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(false || false); // false
// We can also use them in conditionals
let hours = 9;
// we can also add more conditions
let weekEnd = true;
if (hours < 10 || hours > 18 || weekEnd) {
    console.log("Office is closed!");
}
// OR finds the first truthy value
console.log(1 || 0); // 1 because 1 is true here
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1
console.log(undefined || null || 0); // if all are false than it returns the last value
let firstName = "";
let lastName = "";
let nickName = "Super Coder";
console.log(firstName || lastName || nickName || "Anonymous"); // Super Coder becasue here this value is true if all values would be false than it will print "Anonymous"
true || console.log("not Printed"); // first condition is true so it stops there
false || console.log("Printed");
// AND ( && ): It is true when all conditions are true otherwise false
console.log(true || false); // false
console.log(false || true); // false
console.log(true || true); // true
console.log(false || false); // false
// An example with if
let hour = 12;
let minute = 30;
if (hour === 12 && minute === 30) {
    console.log("The time is 12:30");
}
// AND finds the first falsy value;
console.log(1 && 0); // 0
console.log(1 && 5); // 5 if both are true it returns the second value
console.log(null && 5); // null
console.log(0 && "No matter what!"); // 0
// NOT( ! ): it return the inverse value
console.log(!true); // false
console.log(!0); // true
console.log(!!"non empty string"); // true
console.log(!!null); // false 
// Nullish coalescing operator '??'
let a;
let b;
let result = (a !== null && a !== undefined) ? a : b;
console.log(result);
let user;
alert(user ?? "Anonymous!");
// Its comparison with OR
let first_name;
let last_name;
let nick_name = 'super coder';
console.log(first_name ?? last_name ?? nick_name ?? "Anonymous"); // super coder
console.log(first_name || last_name || nick_name || "Anonymous"); // super coder
// What is difference: OR give first truthy value and ?? give first defined value
let height = 0;
console.log(height || 100); // 100 because height is 0(false);
console.log(height ?? 100); // as height is defined so output is 0;
// Using ?? with AND and OR
// let x= 1&&2 ?? 3;  // syntax error due to saftey reasons to avoid programming mistakes
// How it can be used
let x = (1 && 2) ?? 3;
console.log(x); // 2
