// Task 145: Creating a call back function
function executeCallBack(callback, num1, num2) {
    callback(num1, num2); // invokes call back with specified arguments
}
var add = function (a, b) {
    console.log(a + b); // output is sum of a and b
};
executeCallBack(add, 5, 3);
// Task 146: .filter() Method
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Now we will use the filter method
var filteredNumbers = number.filter(function (number) { return number > 5; });
console.log(filteredNumbers);
// Task 147: How to handle error in callback function
function fetchData(callback) {
    // Simulating error condition
    var error = new Error("Failed to fetch data!");
    var data = "Some Data";
    // Simulating fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, data); // No error data is fetched successfully
    }
    else {
        callback(error); // Passes the error to the callback
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
