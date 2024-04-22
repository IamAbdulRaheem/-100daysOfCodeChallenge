"use strict";
// Task 103: Writing a function to return a random boolean value
function returnRandomBoolean() {
    Math.random();
    if (Math.random() > 0.5) {
        return true;
    }
    else {
        return false;
    }
}
console.log(returnRandomBoolean());
// Task 104: Generating a random hexadecimal color code
function getRandomHexColor() {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(getRandomHexColor());
// Task 105: Simulating a Dice Role
function diceRole() {
    return Math.floor(Math.random() * 6) + 1; // Calculate a random integar between 1 to 6
}
console.log(diceRole());
