// Task 91: Creating array of favourite fruits
var favouriteFruits = ["Apple", "Banana", "Grapes"];
// Adding a new fruit in the list of our favouriteFruits
favouriteFruits.push("Orange");
// printing the list of favouriteFruits
console.log(favouriteFruits);
// Task 92: Removing last element from the array
function removeLastElement(fruit) {
    return fruit.pop(); // It will remove the last element from the list and return that element
}
console.log(removeLastElement(["Apple", "Orange", "Apricot"])); // Output will be "Apricot"
// Task 93: Finding the index of "Banana"
function replaceBananaWithMango(fruit) {
    var index = fruit.indexOf("Banana"); // Will provide the index of "Banana"
    if (index !== -1)
        fruit[index] = "Mango"; // If Banana will be present in the list then "Mango" will replace "Banana"
}
var fruit = ["Apple", "Banana", "Cherry"];
(replaceBananaWithMango(fruit));
console.log(fruit);
