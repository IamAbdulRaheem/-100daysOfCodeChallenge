// Task 61: Making Enums for vehicles
// Making the enum for vehicles
var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["motorcycles"] = 1] = "motorcycles";
    vehicles[vehicles["truck"] = 2] = "truck";
})(vehicles || (vehicles = {}));
// Showing one type of vehicles from the list
var myvehicles = vehicles.truck;
console.log(myvehicles);
// Filling the blue print with an example student
var Student = {
    name: "Abdul Raheem",
    age: 21,
    courses: ["Computer", "Science", "English"],
};
// Now we will print student information
console.log(Student);
var circle = {
    kind: "circle",
    radius: 5,
};
var rectangle = {
    kind: "rectangle",
    height: 10,
    width: 20,
};
// To print the properties of circle
console.log(circle);
// TO print the properties of rectangle
console.log(rectangle);
