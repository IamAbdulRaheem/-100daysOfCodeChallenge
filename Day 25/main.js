// Task 73: Assigning and Updating Variables
function initialAndUpdatedValue() {
    var value = 10;
    console.log("The initial value is:", value);
    value = 20;
    console.log("This Updated value is:", value);
}
initialAndUpdatedValue();
// Task 74: Swapping Variables
function swapValues() {
    var a = 5;
    var b = 10;
    console.log("Before swap:a=", a, "b=", b);
    var temp = a;
    a = b;
    b = temp;
    console.log("After swap: a=", a, "b=", b);
}
swapValues();
// Task 75: Compound Assignment Operators
function compoundAssignmentOperator() {
    var x = 4;
    console.log("The value of x is:", x);
    // Addition
    x += 2;
    console.log("After Addition:", x);
    // Subtraction
    x -= 2;
    console.log("After Subtraction:", x);
    // Multiplication
    x *= 2;
    console.log("After Multiplication:", x);
    // Division
    x /= 4;
    console.log("After division:", x);
}
compoundAssignmentOperator();
