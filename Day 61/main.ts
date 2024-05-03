// Arrow Functions basics in JavaScript: Its a short hand property of functions expression

// Its simple syntax is 
let arrowFunction= ()=> {}
arrowFunction();

// Example
let sum= (a:number,b:number)=> a+b;  // it returns a+b
console.log(sum(1,4))    // output 5


let double= (n:number)=> n*2;
console.log(double(3))   // output 6


// can also be used to dynamically create a function
let age= 20;
let welcome= (age<18)? 
()=> console.log("Hello") : 
()=> console.log("Bye");
welcome()


// Multiline Arrow Function
let add= (a:number,b:number)=>{
    let result= a+b;
    return result;   // We have to write return if we have {} bracs
}
console.log(add(2,3));  // output 5



// JavaScript Specials in JavaScript

// In this Topic we have recalled all our previous topics that we learnt