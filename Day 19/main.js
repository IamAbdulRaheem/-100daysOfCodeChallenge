// Task 55: Double Number in an array
var numbers = [2, 3, 4, 5, 6];
// Now we will use the special method to double the numbers of array
var doubledNumbers = numbers.map(function (number) { return number * 2; });
console.log(doubledNumbers);
// It will make all above numbers double 
// Task 56: Keep Only Strings
// Here are the items that we have in a mixed bag
var mixedBag = [1, "Apple", "Banana", true, false, "Apricot", 10];
// Now we will a new list that contain only words
var stringArray = mixedBag.filter(function (mixedBag) { return typeof mixedBag === "string"; });
// When we console tha stringArray it give a list that contain only string dataType
console.log(stringArray);
// Task 57: Find the average Grade
var grade = [75, 79, 85, 96, 82];
// Finding the average Grade of the list by first taking sum of all the grades and then dividing with the total length of grade to find the average grade
var sumOfGrades = grade.reduce(function (total, grade) { return total + grade; }, 0);
console.log("The average grade of the above List is:", sumOfGrades / grade.length);
