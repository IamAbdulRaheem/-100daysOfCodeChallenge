// Loops: Loops are way to repeat the same code multiple times

// While loop
let i=0;
while(i<3){
    console.log(i);
    i++;
}

// do While Loop

let j=0;
do{
    console.log(j);
    j++
}while(j<3);


// The "For" Loop
for(let i=0; i<3; i++){
    console.log(i); // this i is an inline variable if we will try to console it outside loop than it will show erro
}

// We can predefine variable
let index= 0;
for(index=0; index<3; index++){
    console.log(index);
}


// Skipping parts

// Skipping begin
for(; index<3; index++){
    console.log(index);
}

// Skipping step
for(; index<3 ;){
    console.log(index++);
}


// Breaking the loop:
let sum= 0;
while(true){
    let value= +console.log("Enter a number");
    if(!value) break; 
    sum+= value;
}
console.log('sum: ' + sum);

// Continue to the next Iteration
for(let i=0; i<10; i++){
    if (i % 2===0) {
        continue;
    }
    console.log(i)
}


// No break continue to right side of ?
// (i>5)? console.log(i) : continue     // syntax error


// Labels for break / continue
outer:
 for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        let input:any= console.log(`Value at cords (${i}, ${j})`);
        if(!input) break outer;
    }
}
console.log("Done");




// Switch Statements: It gives a more descriptive way to compare a value

// An Example
let a= 2+2;
switch(a){
    case 3:
        console.log("To low!");
        break;
    case 4:
        console.log("Exactly!");
        break;
    case 5:
        console.log("To high!");
        break;
    default:
        console.log("I don't know such value!");
        break;
}


// Switch and case allow arbitrary expression
let x=1;
let y= 0;
switch(+x){
    case y+1:
        console.log("This is will run because +x is 1 exactly equals (b+1)");
        break;
    default:
        console.log("This is default expression!");
        break;
}

// Grouping of case
let number= 3;
switch(number){
    case 4:
        console.log("Right!");
        break;
    case 3:
    case 5:     // this is called grouping
        console.log("Wrong!");
        console.log("Why don't you take maths class!");
        break;
    default:
        console.log("The result is strange");
        break;
}



// Type Matters
let arg= "Enter a value";
switch(arg){
    case '0':
    case '1':
        console.log("Zero or One!");
        break;
    case '2':
        console.log("Two!");
        break;
    // case 3:   // This also show a type error in TS but work fine in JS
    //     console.log("It never executes!");
    //     break;
    default:
        console.log("An Unknown Value!");
        break;
}