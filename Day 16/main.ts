// Task 46: Enhanced Laptop Objects

let laptop={
    make: "hp",
    model: "Spectre X360",
    year: 2023,
    describe: function(){
        console.log(`This Laptop is ${this.make} ${this.model} ${this.year}.`)
    }
}
laptop.describe();

// Task 47: Advanced Array Destructuring

let laptops=[
    {make:"hp", model: "Specter X360", Year:2022},
    {make: "Dell", model: "XPS 15", Year: 2023},
    {make: "Apple", model: "Mac Book Pro", Year: 2024},
]
let[laptop1,laptop2]= laptops;
console.log(laptops);

// Task 48: Combining Arrays with spread Operators

let priceSet1= [5000,2000,8000,12000,6000,18000];
let priceSet2= [3200,25000,6100,4500,20000,5350];
let combinePrices=[...priceSet1, ...priceSet2.sort((a,b)=> a-b)];
console.log(combinePrices);