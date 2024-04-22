// Task 133: convert JS object into JSON String

const person= {
    name: "Abdul Raheem",
    rollNumber: 464165,
    eligibility: "Onsite",
}
console.log(JSON.stringify(person));


// Task 134: Parse JSON string into JS object

const jsonString= '{"name":"Abdul Raheem", "age":30, "city":"karachi"}';
console.log(JSON.parse(jsonString))


// Task 135: Formatting a JSON String

const student= { name: "Abdul Raheem",age: 30, city: "Karachi",}
console.log(JSON.stringify(student,null,2))   // 2 specifies the number of spaces as white spaces