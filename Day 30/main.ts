// Task 88: Rounding the nearest integar

function roundingIntegar(decimal:number) {
    return Math.round(decimal);   // It will round the value of nearest integar
}
console.log(roundingIntegar(4.8));
console.log(roundingIntegar(4.3));


// Task 89: Converting string to number

function stringToNumber(str:string) {
    return parseFloat(str);   // Through this method we can convert the string into an actual number
}
console.log(stringToNumber("123"));


// Task 90: Checking if the value is NaN(Not a Number)

function isNumberOrNot(value:any):boolean {
    return isNaN(value);
}
console.log(isNumberOrNot(5));  // Will give output false
console.log(isNumberOrNot("Abdul Raheem"));  // Will give output true