// Task 79: Creating and Accessing Object properties
var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
};
console.log(car.model); // It will give the model of the car
// Task 80: Updating Object properties
var updatedCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
};
updatedCar.color = "Blue"; // Adding new property of car
updatedCar.year = 2023; // Updating the year of car
console.log(updatedCar);
// Task 81: Iterating over object properties
function logObjectProperties(obj) {
    var car = {
        make: "Toyota",
        model: "Corolla",
        year: 2022,
        color: "Blue",
    };
    for (var properties in car) {
        console.log("".concat(properties, ": ").concat(car[properties]));
    }
}
logObjectProperties(car);
