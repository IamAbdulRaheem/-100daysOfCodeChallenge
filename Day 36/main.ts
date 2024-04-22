// Task 106: Checking the leap year
function isLeapYear(year:number):boolean {
    return (year%4===0 && year%100!==0 || year%400===0);
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2022));


// Task 107: checking the number is divisible by 2 and 3
function divisibleByTwoAndThree(divisible:number):boolean {
    if (divisible%2===0 || divisible%3===0) {
        return true;   // if any of the number is divisible by either 2 or 3 it will return the value true otherwise false
    }
    else{
        return false;
    }
}
console.log(divisibleByTwoAndThree(21));    // Output true because divisible by 3
console.log(divisibleByTwoAndThree(13));    // Output false because not divisible by 2 or 3
console.log(divisibleByTwoAndThree(22));    // Output true because divisible by 2


// Task 108: Comparing two strings

function compareTwoStrings(str1:string, str2:string):boolean {
   if (str1.toLowerCase()=== str2.toLowerCase()) {
    return true;
   }
   else{
    return false;
   }
}
console.log(compareTwoStrings("Abdul Raheem", "Abdul Raheem"));
console.log(compareTwoStrings("Abdul Raheem", "Abdul Sami"));
console.log(compareTwoStrings("Abdl Raheem", "Abdul Raheem"));
console.log(compareTwoStrings("I AM A GOOD BOY", "i am a good boy"));

