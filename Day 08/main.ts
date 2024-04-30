// Task 22: Intentional Error

let friends: string[]= ["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Asad"];

// In the above array the value of index is up to 4, so if we print value 5 which doesn't exist it will show error

console.log(friends[5]);

// Now correcting the index error

let $friends: string[]= ["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Asad"];
console.log($friends[4]);


// // Task 23: Conditional Tests

// Test 1:
let car: string= "subaru";
console.log("Is car=='subaru'? I predict True.");
console.log(car== 'subaru');
// Test 2:
console.log("Is car=='toyota'? I predict False.");
console.log(car== 'toyota');
// Test 3:
let Bike: string= "Honda";
console.log("Is Bike=='Honda'? I predict True.");
console.log(Bike== 'Honda');
// Test 4:
console.log("Is Bike=='Unique'? I predict False.");
console.log(Bike== 'Unique');
// Test 5:
let Train: string= "Karachi Express";
console.log("Is Train=='Karachi Express'? I predict True.");
console.log(Train== 'Karachi Express');
// Test 6:
console.log("Is Train=='Green Line Express'? I predict False.");
console.log(Train== 'Green Line Express');
// Test 7:
let airLines: string= "Pak Air Ways";
console.log("Is airLines=='Pak Air Ways'? I predict True.");
console.log(airLines=='Pak Air Ways');
// Test 8:
console.log("Is airLines=='Turkish Air Lines'? I predict False.");
console.log(airLines=='Turkish Air Lines');
// Test 9:
let LED: string= "Samsung";
console.log("Is LED=='Samsung'? I predict True.");
console.log(LED=='Samsung');
// Test 10:
console.log("Is LED=='TCL'? I predict False.");
console.log(LED=='TCL');


// Task 24: More conditional tests

// Test For equality for strings

let studentName: string= "Abdul Raheem";
console.log("The name of student is 'Abdul Raheem.'");
console.log(studentName=='Abdul Raheem');
console.log("The name of student is 'Abdul Rehman'");
console.log(studentName=='Abdul Rehman');

// // Test for inequality for strings

let Profession: string= "Web Developer";
console.log("The profession of student is 'Android Developer'.'");
console.log(Profession!='Android Developer');
console.log("The profession of student is 'Web Developer'.'");
console.log(Profession!='Web Developer');

// // Test for lower case function

let Name: string= "Abdul Raheem";
console.log(Name.toLowerCase()== 'abdul raheem');
console.log(Name.toLowerCase()=='Abdul raheem');

// // Numerical Test

console.log(5==5);
console.log(5!=5);
console.log(5>2);
console.log(10<3);
console.log(20>=20);
console.log(4<=2);
    
// Test using 'and' operator

console.log(20>5 && 5<20);
console.log(5>20 && 20<5);

// // Test using 'or' operator

console.log(10==10 || 10<12);
console.log(5*5==24 || 25/5!=5);

// // Test whether item is in an array

let fruits: string[]= ["apple", "banana", "mango"];
console.log("Is apple included in fruits?");
console.log(fruits.includes("apple"));

// // Test whether item is not in an array

console.log("Is onion included in fruits?");
console.log(fruits.includes("onion"));