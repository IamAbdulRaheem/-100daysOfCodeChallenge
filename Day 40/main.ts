// Task 118: Logging the number through the loop

for (let index = 1; index <= 10; index++) {
   console.log(index);  // It will print the value of numbers from 1 to 10 to the console
}


// Task 119: Creating while loop 

let countDown= 5
while (countDown>=1) {
    console.log("Hello World!");
    countDown--;    // This updation is necessary to prevent it to run infinite time throught this it will only run until its condition is true
}


// Task 120: Using a for of loop

let favouriteMoveis:string[]= ["3 Idiots", "Krish 3", "Kick", "Robot"];
console.log("My favourite Movies are:");
// Now we will use for of loop to print each movie to the console
for(let name of favouriteMoveis){
    console.log(name);
}