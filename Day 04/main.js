// Task 10: Adding Comments
// 1: This is how we can display and remove extra white spaces in a data type 
var Name = "\tAbdul Raheem \n";
console.log(Name);
console.log(Name.trim());
// 2: This is the method how we can print a message to show our favourite Number 
var favnumber1 = 85;
console.log("My favourite number is ".concat(favnumber1));
// Task 11: Names 
var names = ["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Abdul Sami", "Asad"];
// We can do this task by using different for loops. all these for loops have same output
for (var index = 0; index < names.length; index++) {
    console.log(names[index]);
}
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var item = names_1[_i];
    console.log(item);
}
names.forEach(function f(item) {
    console.log(item);
});
// Task 12: Greeting
var names = ["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Abdul Sami", "Asad"];
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var item = names_2[_a];
    console.log("Good Morning! Have a nice day," + item);
}
