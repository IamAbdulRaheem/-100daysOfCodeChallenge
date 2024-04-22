// Task 94: Use .map() method to create a new array

let words: string[]=["Hello", "World", "TypeScript", "JavaScript"];

// Creating a new array with length of each word
let lengths:number[]=words.map(words=> words.length);

console.log(lengths);   // It will give the output that will show the length of the words of original array



// Task 95: using .filter() method to return an array

function numberGreaterThanTen(numbers:number[]) {
    return numbers.filter(numbers=> numbers>10);  // This will return the values that are greater than 10
}

let numbers=[2,6,10,20,5,15];
console.log(numberGreaterThanTen(numbers));



// Task 96: Demonstrate How to use .reduce() method

function calculateSum(number:number[]) {
    return number.reduce((acc,curr)=> acc+curr,0);
}
const number:number[]=[10,15,25,12,50];
console.log(calculateSum(number));
