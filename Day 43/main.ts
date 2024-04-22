// Task 127: Converting function expression into arrow function

// First we will write a traditional function expression

const traditionalFunctionalExpression= function(a ,b){
    // This is syntax of a traditional function expression
    return a+b;
}

// Now we will convert it into an arrow function

const convertToArrowFunction= (a,b)=> a+b;  // It is a short hand property to write a function

// Logging the result will give the same output of both

console.log(traditionalFunctionalExpression(5,3));
console.log(convertToArrowFunction(5,3));


// Task 128: Arrow function with multiple parameters

const multipleParameters= (...number:number[])=> number.reduce((total,number)=> total*number,1);   // it will return the product of all parameters

console.log(multipleParameters(2,3,4,5));


// Task 129: Behaviour of this is arrow function and traditional function

const traditionalVsArrow= {
    property: "traditionalVsArrow",
    traditionalFunction: function(){
        console.log("Traditional Function:", this.property);
    },
    arrowFunction: ()=>{
        console.log("Arrow Function:", this.property);
    }
}
traditionalVsArrow.traditionalFunction();   // logs the result
traditionalVsArrow.arrowFunction();   // logs undefined depending upon the outerscope this.property
