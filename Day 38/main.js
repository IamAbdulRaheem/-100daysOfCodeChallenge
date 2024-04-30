"use strict";
// Task 112: Create Map to store different values
const countries = new Map();
countries.set("Pakistan", "Islamabad");
countries.set("Japan", "Tokyo");
countries.set("India", "Delhi");
console.log(countries);
// Task 113: check if Map contains key or not
function logCapitalOfCanada(countries) {
    if (countries.has("Pakistan")) {
        console.log(`The Capital of Pakistan is ${countries.get("Pakistan")}`);
    }
    else {
        console.log("Canada is not in the list.");
    }
}
logCapitalOfCanada(countries);
// Task 114: Iterating over a Map
const student = new Map();
student.set("Abdul Raheem", 1);
student.set("Abdul Sami", 2);
student.set("Abdul Rehman", 3);
student.forEach((id, name) => {
    console.log(`Name: ${name} , ID: ${id}`);
});
