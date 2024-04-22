// Task 82: Find the length of a string

function findingLengthOfString(str:string) {
    return str.length  // It will return the length of string
}
console.log(findingLengthOfString("Abdul Raheem"));  // Will give the output that will show the length of the string we have just called in the function


// Task 83: Converting to upper and lower case
function changeCases(str:string) {
    let upperStr= str.toUpperCase();
    let lowerStr= str.toLowerCase();
    console.log("UpperCase:", upperStr, "LowerCase:", lowerStr);
}
(changeCases("Abdul Raheem"));

// Task 84: Replacing text in String
function replaceText(sentence:string) {
    return sentence.replace(/JavaScript/g, "TypeScript"); // Replacing the text globally
}
console.log(replaceText("I love JavaScript and it is awesome programming language"));  // Will give the output where JaveScript will be changed into TypeScript