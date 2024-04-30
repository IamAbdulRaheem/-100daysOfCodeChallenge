// Task 34: Pizzas
var favouritePizza = ["Cheese Pizza", "Pepperoni Pizza", "Vaggie Pizza"];
for (var _i = 0, favouritePizza_1 = favouritePizza; _i < favouritePizza_1.length; _i++) {
    var flavour = favouritePizza_1[_i];
    console.log("".concat(flavour));
}
for (var _a = 0, favouritePizza_2 = favouritePizza; _a < favouritePizza_2.length; _a++) {
    var flavour = favouritePizza_2[_a];
    console.log("I really like ".concat(flavour, "."));
}
console.log("I really love pizzas so much.");
// Task 35: Animals
var animals = ["Dog", "Cat", "Rabbit"];
for (var _b = 0, animals_1 = animals; _b < animals_1.length; _b++) {
    var animal = animals_1[_b];
    console.log("".concat(animal));
}
for (var _c = 0, animals_2 = animals; _c < animals_2.length; _c++) {
    var animal = animals_2[_c];
    console.log("".concat(animal, " would make a great pet."));
}
console.log("I love cats so I think that cats would make great pet!");
// Task 36: T shirt
function make_shirt(size, message) {
    console.log("A ".concat(size, "-sized shirt will printed with the message ").concat(message, "."));
}
// Call the function
make_shirt("medium", "Hello World");
