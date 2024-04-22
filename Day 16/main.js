// // Task 46: Enhanced Laptop Object
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let Laptop={
//     make: "hp",
//     model: "XPS 15",
//     year: 2022,
//     describe: function(){
//         console.log(`This Laptop is ${this.year} ${this.make} ${this.model}.`)
//     }
// };
// Laptop.describe();
// // Task 47: Advanced Array Destructuring
// let laptop= [
//     {make: "hp", model: "Spectre X360", year: 2023},
//     {make: "Dell", model: "XPS 15", year: 2024},
//     {make: "Apple", model: "Mac Book Pro", year: 2021},
// ]
// let [laptop1, laptop2]= laptop;
// console.log(laptop1);
// console.log(laptop2);
// // Task 48: Combining Array with Spread Operator
// let priceSet1=[20000, 30000, 10000, 5000, 32000];
// let priceSet2=[23000, 8000, 56000, 45000, 2000];
// let combinePrices=[...priceSet1, ...priceSet2.sort((a,b)=> a-b)];
// console.log(combinePrices);
// Task 46: Enhanced Laptop Objects
var laptop = {
    make: "hp",
    model: "Spectre X360",
    year: 2023,
    describe: function () {
        console.log("This Laptop is ".concat(this.make, " ").concat(this.model, " ").concat(this.year, "."));
    }
};
laptop.describe();
// Task 47: Advanced Array Destructuring
var laptops = [
    { make: "hp", model: "Specter X360", Year: 2022 },
    { make: "Dell", model: "XPS 15", Year: 2023 },
    { make: "Apple", model: "Mac Book Pro", Year: 2024 },
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptops);
// Task 48: Combining Arrays with spread Operators
var priceSet1 = [5000, 2000, 8000, 12000, 6000, 18000];
var priceSet2 = [3200, 25000, 6100, 4500, 20000, 5350];
var combinePrices = __spreadArray(__spreadArray([], priceSet1, true), priceSet2.sort(function (a, b) { return a - b; }), true);
console.log(combinePrices);
