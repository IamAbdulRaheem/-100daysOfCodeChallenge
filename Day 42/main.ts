// Task 124: returning objects own name property using this method

const person = {
    name: "Abdul Raheem",
    getName: function () {
        return this.name;  // this refers the object itself and return the object property of name
    }
}
console.log(person.getName());


// Task 125: Using this to iteract multiple property

const student = {
    name: "Abdul Raheem",
    rollNumber: 464165,
    eligibility: "Onsite",
    getMultipleProperty: function () {
        return `${this.name}
${this.rollNumber}
${this.eligibility}`   // this will refer to multiple properties and return all these values

    }
}
console.log(student.getMultipleProperty());


// Task 126: Using this within a nested function

const employee={
    name: "Abdul Raheem",
    outerFunction: function () {
       console.log(this.name)   // It will log the value as expected

        const innerFunction= ()=>{
            console.log(this.name);   // This is lexical this and arrow function capture the property of name from the outer scope it will give undefined if we use simple function expression
        }
        innerFunction();
    }
}
employee.outerFunction();

