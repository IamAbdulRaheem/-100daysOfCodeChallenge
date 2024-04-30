// Task 10: Adding Comments

// 1: This is how we can display and remove extra white spaces in a data type 

let Name: string= "\tAbdul Raheem \n";
console.log(Name);
console.log(Name.trim());


// 2: This is the method how we can print a message to show our favourite Number 

let favnumber1: number= 85;
console.log(`My favourite number is ${favnumber1}`);


// Task 11: Names 

let names: string[]= ["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Abdul Sami", "Asad"]

// We can do this task by using different for loops. all these for loops have same output

for (let index = 0; index < names .length; index++) {
    console.log(names[index]);
    
}

for(let item of names){
    console.log(item);
}

names.forEach(function f(item){
    console.log(item);
})


// Task 12: Greeting

let names: string[]= ["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Abdul Sami", "Asad"]
for(let item of names){
    console.log("Good Morning! Have a nice day," + item);
}
