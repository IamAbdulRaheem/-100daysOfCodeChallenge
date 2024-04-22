// Task 85: Finding the position of a Substring
function findingPositionOfSubstring(substr) {
    return substr.indexOf("Code");
}
console.log(findingPositionOfSubstring("The Code of mobile is 1234.")); // It will provide the number where the word "Code" starts
// Task 86: Checking for the text presence
function checkPresence(sentence) {
    if (sentence.includes("JavaScript")) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkPresence("The programming that are used as frontEnd web development are HTML, CSS and JavaScript.")); // According to the above condition given it will check whether JavaScript is present in the sentence or not and return the value accordingly
// Task 87: Extracting a Substring
function extractingSubstring(str) {
    return str.substring(0, 25);
}
console.log(extractingSubstring("My name is Abdul Raheem. I am currently enrolled in governor sindh IT programme."));
