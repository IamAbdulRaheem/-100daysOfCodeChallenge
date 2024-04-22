// Task 94: Use .map() method to create a new array
var words = ["Hello", "World", "TypeScript", "JavaScript"];
// Creating a new array with length of each word
var lengths = words.map(function (words) { return words.length; });
console.log(lengths); // It will give the output that will show the length of the words of original array
// Task 95: using .filter() method to return an array
function numberGreaterThanTen(numbers) {
    return numbers.filter(function (numbers) { return numbers > 10; }); // This will return the values that are greater than 10
}
var numbers = [2, 6, 10, 20, 5, 15];
console.log(numberGreaterThanTen(numbers));
// Task 96: Demonstrate How to use .reduce() method
function calculateSum(number) {
    return number.reduce(function (acc, curr) { return acc + curr; }, 0);
}
var number = [10, 15, 25, 12, 50];
console.log(calculateSum(number));
