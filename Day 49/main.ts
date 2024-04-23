// Task 145: Creating a call back function

function executeCallBack(callback:(num1:number, num2:number)=>void,
num1:number,
num2:number
):void{
    callback(num1,num2)   // invokes call back with specified arguments
}
const add= (a:number, b:number)=> {
    console.log(a+b);   // output is sum of a and b
}
executeCallBack(add,5,3);


// Task 146: .filter() Method

const number: number[]= [1,2,3,4,5,6,7,8,9,10];

// Now we will use the filter method
const filteredNumbers:number[]= number.filter(number=> number>5);
console.log(filteredNumbers);


// Task 147: How to handle error in callback function

function fetchData(
    callback:(error:Error | null, data?:string)=> void
): void{
    // Simulating error condition
    const error= new Error ("Failed to fetch data!");
    const data= "Some Data";

    // Simulating fetching data with a chance of error
    if(Math.random()> 0.5){
        callback(null,data)  // No error data is fetched successfully
    }
    else{
        callback(error);   // Passes the error to the callback
    }
}

fetchData((error,data)=>{
    if(error){
        console.error(error.message);
    }
    else{
        console.log(data);
    }
});