// Task 70: Understanding the let in loops

function printNumberWithLet() {
    let numberArray:number[]=[1,2,3,4,5];
    // Uses let for variable number and we can explain it using any for loop. The variable number is not accessible outside this loop because it is defined with let
for(let number in numberArray){
    console.log(number);
}
}
printNumberWithLet();



// // Task 71: Compare let and const

// // Example of let

// let Name: string= "Abdul";
// // Reassigning the value 
// Name= "Abdul Raheem"

// // Example of const

// const myName:string= "Abdul";
// // if we will try to change the value assinged with const then it will show error
// try{
//     // myName= "Abdul Raheem"
// }catch(error){
//     console.log("Error: Can't reassign the const-declared variable.");
// }


// // Task 72: Block scope with let andd const

// {
//     let blockLet:string= "Visible inside the block";
//     let blockConst:string= "Also visible inside the block";
//     console.log(blockLet) // Work fine here
//     console.log(blockConst) // Also work fine here
// }

// try {
//     console.log(blockLet)  // This will show error
// } catch (blockLet) {
//     console.log("blockLet is not accessible outside the block")
// }

// try {
//     console.log(blockConst) // This will also show error
// } catch (blockConst) {
//     console.log("blockConst is not accessible outside the block");
// }


