// Task 130: Exporting a function

export const add= (a:number, b:number)=>a+b;



// Task 131: Exporting a class

export class person{
    name:string;
    constructor (name:string){
        this.name= name;
    }
    greet(){
        console.log(`Hello! My name is ${this.name}.`);
    }
}

// Task 132: Default and named exports

// Default Export

export default class student{
    // this is default value of exporting a class
}
// Named Export
export const one = ()=>{
    /*...*/
}
export const two= ()=>{
    /*...*/
}