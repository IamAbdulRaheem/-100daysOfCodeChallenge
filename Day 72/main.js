/******************
 * GENERICS INTRO *
 ******************/
// A generic function that returns the input value as is
function returnType(val) {
    return val;
}
// Usage of the generic function with different types
var numValue = returnType(100);
var strValue = returnType("Elzero");
var boolValue = returnType(true);
var arrValue = returnType([1, 2, 3, 4]);
console.log("Number Value: ".concat(numValue));
console.log("String Value: ".concat(strValue));
console.log("Boolean Value: ".concat(boolValue));
console.log("Array Value: ".concat(arrValue));
/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/
// Generic Function `returnTypeEx`
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100)); // Returns: 100 (number)
console.log(returnTypeEx("Elzero")); // Returns: "Elzero" (string)
// Arrow Function with Generics `returnTypeArrowSyntax`
var returnTypeArrowSyntax = function (val) { return val; };
console.log(returnTypeArrowSyntax(100)); // Returns: 100 (number)
console.log(returnTypeArrowSyntax("Elzero")); // Returns: "Elzero" (string)
// Generic Function `testType`
function testType(val) {
    return "The Value Is ".concat(val, " And Type Is ").concat(typeof val);
}
console.log(testType(100));
// Returns: "The Value Is 100 And Type Is number"
console.log(testType("Elzero"));
// Returns: "The Value Is Elzero And Type Is string"
// Generic Function `multipleTypes`
function multipleTypes(valueOne, valueTwo) {
    return "The First Value Is ".concat(valueOne, " And Second Value ").concat(valueTwo);
}
console.log(multipleTypes("Osama", 100));
// Returns: "The First Value Is Osama And Second Value 100"
console.log(multipleTypes("Elzero", true));
// Returns: "The First Value Is Elzero And Second Value true"
/********************
 * GENERICS CLASSES *
 ********************/
// Generic Class `User`
var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` and displays it along with the `value` property
    User.prototype.show = function (msg) {
        console.log("".concat(msg, " - ").concat(this.value));
    };
    return User;
}());
// Creating an instance of `User` with a specific type parameter (string)
var userOne = new User("Elzero");
console.log(userOne.value); // Outputs: "Elzero"
userOne.show("Message"); // Outputs: "Message - Elzero"
// Creating an instance of `User` with a type parameter that can be a number or a string
var userTwo = new User(100);
console.log(userTwo.value); // Outputs: 100
userTwo.show("Message"); // Outputs: "Message - 100"
// Generic Class `Collection`
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    // Method to add an item of type `T` to the collection
    Collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return Collection;
}());
// Creating an instance of `Collection` with type parameter `Book`
var itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
// Creating an instance of `Collection` with type parameter `Game`
var itemTwo = new Collection();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log(itemTwo);
