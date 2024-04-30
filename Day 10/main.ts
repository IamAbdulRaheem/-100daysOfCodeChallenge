// Task 28: Stages of Life

let age: number= 18;
if (age<2) {
    console.log("The person is baby");
}
else if (age<4) {
    console.log("The person is toddler");
}
else if (age<13) {
    console.log("The person is kid");
}
else if (age<20) {
    console.log("The person is teenager");
}
else if (age<65) {
    console.log("The person is an adult");
}
else {
    console.log("The person is an elder");
}


// Task 29: Favourite Fruit

let favourite_fruit: string[]= ["Orange", "Apple", "Grapes"];
if (favourite_fruit.includes("Apple")) {
    console.log("I really like Apple.")
}
if (favourite_fruit.includes("Orange")) {
    console.log("I really like Orange.");
}
if (favourite_fruit.includes("Grapes")) {
    console.log("I really like Grapes.");
}
if (favourite_fruit.includes("Cherry")) {
    console.log("I really like Cherry.");
}
if (favourite_fruit.includes("Banana")) {
    console.log("I really like Banana.");
}



// Task 30: Hello Admin

let userNames: string[]= ["Admin", "User1", "User2", "User3", "User4"];
for(let item of userNames){
    if (item==="Admin") {
        console.log("Hello Admin, Would you like to see a status report?")
    }
    else{
        console.log(`Hello ${item}, Thank you for logging in again.`);
    }
}