// Task 55: Double Number in an array

let numbers:number[]=[2,3,4,5,6];

// Now we will use the special method to double the numbers of array

let doubledNumbers=numbers.map(number=>number*2);
console.log(doubledNumbers);

// It will make all above numbers double 



// Task 56: Keep Only Strings

// Here are the items that we have in a mixed bag

let mixedBag=[1,"Apple", "Banana", true, false, "Apricot", 10]

// Now we will a new list that contain only words

let stringArray= mixedBag.filter(mixedBag=> typeof mixedBag=== "string");

// When we console tha stringArray it give a list that contain only string dataType

console.log(stringArray);



// Task 57: Find the average Grade

let grade:number[]=[75,79,85,96,82];

// Finding the average Grade of the list by first taking sum of all the grades and then dividing with the total length of grade to find the average grade

let sumOfGrades= grade.reduce((total,grade)=> total+grade,0);
console.log("The average grade of the above List is:",sumOfGrades/grade.length);