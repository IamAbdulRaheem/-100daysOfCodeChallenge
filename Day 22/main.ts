// Task 64: Combine string and numbers

function mergeStringAndNumber(age:string, number:number) {
    return age + number;
}

// This is how we can put string and number together

let mergetext= mergeStringAndNumber("Age: ",30)
console.log(mergetext);


// Task 65: Determine the remainder

function remainder(num1:number, num2:number) {
    return num1 % num2;
}

let result= remainder(5,2);
// Now we will print the result that will show the left over
console.log(result);



// Task 66: Logical and Verification

function bothTrue(value1:boolean, value2:boolean) {
    return value1 && value2
}

// && operator will show the true value only if the both conditions are true
let bothvalues= bothTrue(true,false);
console.log(bothvalues);