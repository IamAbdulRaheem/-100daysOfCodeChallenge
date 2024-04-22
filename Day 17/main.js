// Task 49: Function with Rest Parameters
function Hobby() {
    var Hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Hobbies[_i] = arguments[_i];
    }
    for (var _a = 0, Hobbies_1 = Hobbies; _a < Hobbies_1.length; _a++) {
        var item = Hobbies_1[_a];
        console.log("I enjoy ".concat(item, "."));
    }
}
Hobby("Gardening", "Coin Collecting", "Coding");
// Task 50: MultiLine Template literals
var myIdealDay = "My ideal day would invlove:\n1. Waking up early in the morning and going to play cricket.\n2. Spend 2-3 Hours on my Laptop to code in the afternoon.\n3. Spend some of my time with my friend in the evening.\n";
console.log(myIdealDay);
// Task 50: Refactoring to arrow Function
// Making a simple function to calculate the area of rectangle
function calculateArea(width, height) {
    var area = width * height;
    return area;
}
var result = calculateArea(5, 10);
console.log(result);
// Now refactoring it into arrow function
var calculateAreaArrow = function (width, height) {
    var area = width * height;
    return area;
};
var resultArrow = calculateAreaArrow(5, 10);
console.log(resultArrow);
