// Task 1: Last Loop value
let i= 3;
while(i){
    console.log(i--);   // Last loop value is 1
}


// Task 2: Which value does the while loop show
// 1: The prefix form ++j
let j= 0;
while(++j<5) console.log(j)  // output 1,2,3,4
// 2: The postfix form j++
while(j++<5) console.log(j)  // output 1,2,3,4


// Task 3: which value get shown by for loop
// 1: The postfix form i++
for(let i=0; i<5; i++) console.log(i);   // output 0,1,2,3,4
// 2: The prefix form ++i
for(let i=0; i<5; i++)  console.log(i);  // output 0,1,2,3,4


// Task 4: output even number in loops
for(let i=0; i<12; i++){
    if (i % 2!==0) continue;
    console.log(i);
}


// Task 5: Replace for with while
for(let i=0; i<3; i++){
    console.log(i);
}
// converting it to the while
while(i<3){
    console.log(i);
    i++;
}


// Task 6: Repeat Until the input is correct
let num;
do{
    num= prompt("Enter a number greater than 100");
}while(num<=100 && num)


// Task 7: output prime numbers
let n= 10;
nextPrime:
for(let i=2; i<=10; i++){
    for(let j=2; j<i; j++){
        if(i % j===0) continue nextPrime;
    };
    console.log(i);
}


// Task 8: Rewrite to switch into an if
let browser= "Chrome";
if (browser=== "Edge") {
    console.log("You've got the edge!");
}
else if (browser=== "Chrome" || browser=== "FireFox" || browser=== "Safari" || browser=== "Opera") {
    console.log("Yes we support these browsers!")
}
else{
    console.group("We hope that this page is ok!");
}


// Task 8: Rewrite if into switch

// Using the exercise 7 to convert into switch statements
switch(browser){
    case "Edge":
        console.log("We have got the edge!");
        break;
    case "Chrome" :
    case "FireFox": 
    case "Safari" : 
    case "Opera"  :
        console.log("We also support these browsers!");
        break;
    default:
        console.log("Hope the page is ok!");
        break;
}