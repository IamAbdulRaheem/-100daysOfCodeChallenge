"use strict";
// Task 130: Exporting a function
Object.defineProperty(exports, "__esModule", { value: true });
exports.two = exports.one = exports.person = exports.add = void 0;
var add = function (a, b) { return a + b; };
exports.add = add;
// Task 131: Exporting a class
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.greet = function () {
        console.log("Hello! My name is ".concat(this.name, "."));
    };
    return person;
}());
exports.person = person;
// Task 132: Default and named exports
// Default Export
var student = /** @class */ (function () {
    function student() {
    }
    return student;
}());
exports.default = student;
// Named Export
var one = function () {
    /*...*/
};
exports.one = one;
var two = function () {
    /*...*/
};
exports.two = two;
