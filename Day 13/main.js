// Task 37: Large Shirts
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, "-sized shirt will print the message, \"").concat(message, ".\""));
}
// Default message for the large shirt
make_shirt();
// Default message for the medium shirt
make_shirt("medium");
// shirt of any type with the different message
make_shirt("large", "Hello World");
// Task 38: Cities
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Dhaka", "Bangladesh");
// Task 39: City Names
function city_country(city, country) {
    console.log("\"".concat(city, ", ").concat(country, "\""));
}
city_country("Lahore", "Pakistan");
city_country("Dhaka", "Bangladesh");
city_country("Mumbai", "India");
