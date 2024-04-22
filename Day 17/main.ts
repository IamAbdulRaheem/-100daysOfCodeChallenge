// Task 49: Function with Rest Parameters

function Hobby(...Hobbies:string[]) {
   for(let item of Hobbies){
    console.log(`I enjoy ${item}.`)
   }
}
Hobby("Gardening", "Coin Collecting", "Coding");



// Task 50: MultiLine Template literals

let myIdealDay= `My ideal day would invlove:
1. Waking up early in the morning and going to play cricket.
2. Spend 2-3 Hours on my Laptop to code in the afternoon.
3. Spend some of my time with my friend in the evening.
`
console.log(myIdealDay);



// Task 51: Refactoring to arrow Function

// Making a simple function to calculate the area of rectangle

function calculateArea(width:number, height:number) {
    let area= width*height;
    return area;
}
let result= calculateArea(5,10);
console.log(result);

// Now refactoring it into arrow function

let calculateAreaArrow= (width:number, height: number)=>{
    let area= width*height;
    return area;
}
let resultArrow= calculateAreaArrow(5,10);
console.log(resultArrow);