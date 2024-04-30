// Task 1: What's the result of OR
console.log(null || 2 || undefined)  // 2
console.log(1 || 2 || 3)   // 1

// Task 2: What's the result AND
console.log(1 && null && 2)  // null
console.log(1 && 2)   // 2

// Task 3: The result of OR AND OR
console.log(null || 2&&3 || 4)   // 3

// Task 4: Check the range between
let age= 25;
if (age>=14 && age<=90) {
    console.log("The age is between 14 and 90")
}

// Task 5: Check the range outside
// First variant

if (!(age>=14 && age<= 90)) {
    console.log("The age is not between 14 and 90")
}

// Second Variant

if(age<14 || age>90){
    console.log("The age is smaller than 14 or larger than 90")
}

// Task 6: A Question about if
if (-1 || 0) {
    console.log("first")  // executed
}
if (-1 && 0) {
    console.log("Second")
}
if (null || -1 && 1) {
    console.log("Third")   // executed
}

// Task 7: Checking the login
let user= prompt("What's your name?");
if (user==="Admin") {
    let password= prompt("Enter Password!", "Password");
    if (password=== "TheMaster") {
        alert("Welcome");
    }
    else if (password?.length===0 || password=== "Password") {
        alert("Enter Password!");
    }
    else if (password===null) {
        alert("Cancelled")
    }
    else{
        alert("Wrong Password!")
    }
}
 else if (user?.length=== 0 || user=== null) {
    alert("Cancelled");
}
else{
   alert("I don't know you!")
}
