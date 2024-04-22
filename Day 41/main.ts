// Task 121: implementing for loop with continue statement

for (let index = 1; index <=10; index++) {
  if(index===5){
    continue;   // This statement will ignore the number 5 and will print the remaining numbers
  }
    console.log(index);
}


// Task 122: implementing while loop with break statement

let countDown= 10;
while (countDown>=1) {
    if (countDown===5) {
        break;   // This will break the loop when the number 5 will come
    }
    console.log(countDown);
    countDown--;
}



// Task 123: Stoping the loop when it finds the first vowel

function logUntilVowl(str:string) {
    const vowel= "aeiouAEIOU";
    for(let char of str){
        if (vowel.includes(char)) {
            break;
        }
        console.log(char);
    }
}
logUntilVowl("stglu");