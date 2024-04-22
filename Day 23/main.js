// Task 67: Arithmatic with mixed types
function mixedTypes(num, str) {
    // converting the string into a number for the sum operation
    return num + Number(str);
}
// The string "5" is converted into the string and then added into the first number
var sumOfMixedTypes = mixedTypes(5, "5");
console.log(sumOfMixedTypes);
// Task 68: Multiplying Decimels
function decimelsNumbers(decimel1, decimel2) {
    // Through this process we can round the value up to two decimal places
    return Math.round((decimel1 * decimel2) * 100) / 100;
}
var total = (decimelsNumbers(1.5, 10.5));
console.log(total);
// Task 69: Dividing and Finding the remainder
function divideAndRemainder(dividned, divisor) {
    var quotient = Math.floor(dividned / divisor);
    var remainder = dividned % divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndRemainder(10, 3));
