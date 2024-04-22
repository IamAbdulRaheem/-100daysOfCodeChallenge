// Task 124: returning objects own name property using this method
var person = {
    name: "Abdul Raheem",
    getName: function () {
        return this.name; // this refers the object itself and return the object property of name
    }
};
console.log(person.getName());
// Task 125: Using this to iteract multiple property
var student = {
    name: "Abdul Raheem",
    rollNumber: 464165,
    eligibility: "Onsite",
    getMultipleProperty: function () {
        return "".concat(this.name, "\n").concat(this.rollNumber, "\n").concat(this.eligibility); // this will refer to multiple properties and return all these values
    }
};
console.log(student.getMultipleProperty());
// Task 126: Using this within a nested function
var employee = {
    name: "Abdul Raheem",
    outerFunction: function () {
        var _this = this;
        console.log(this.name);
        var innerFunction = function () {
            console.log(_this.name);
        };
        innerFunction();
    }
};
employee.outerFunction();
