/***************
 * UNION TYPES *
 ***************/
var myVar;
myVar = "Hello"; // Valid assignment
console.log(myVar);
myVar = 42; // Valid assignment
console.log(myVar);
// Uncommenting the line below would result in a TypeScript error
// myVar = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.
/*****************
 * LITERAL TYPES *
 *****************/
var direction;
function setColor(color) {
    // ...
}
/******************
 * NULLABLE TYPES *
 ******************/
var username = "Glicher"; // The variable can hold a string or null
var ageEx = null; // The variable can hold a number or null
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log("Hello, ".concat(username, "!"));
    }
}
greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null); // Output: Hello, Guest!
var myName = "Glitcher";
var myValue = 10;
var alice = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
var bob = {
    name: "Bob",
    age: 25,
};
console.log(alice);
console.log(bob);
var person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890",
};
