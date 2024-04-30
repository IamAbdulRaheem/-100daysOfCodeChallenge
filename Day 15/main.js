// Task 43: Unchanged Magicians
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}
// Reusing the show_magicians function from Exercise 39
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magicians = ["Abdul Raheem", "Abdul Sami", "Abdul Rehman", "Abdullah"];
// Creating a copy of the original array
var original_magicians = __spreadArray([], magicians, true);
// Calling make_great with a copy of the array
var great_magicians = make_great(__spreadArray([], magicians, true));
// Calling show_magicians to show the original array
console.log("Original Magicians:");
show_magicians(original_magicians);
// Calling show_magicians to show the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
// Task 44: Sandwiches
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
}
// Calling the function with different number of arguments
make_sandwich("ham", "cheese", "lettuce");
make_sandwich("turkey", "bacon");
make_sandwich("peanut butter", "jelly");
// Task 45: Cars
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            car.options[key] = option[key];
        }
    }
    return car;
}
// Calling the function with required information and two additional name-value pairs
var my_car = car_info("Toyota", "Camry", { color: "red" }, { year: 2022 });
// Printing the returned Object to ensure all information was stored correctly
console.log(my_car);
