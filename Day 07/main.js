// Task 19: Dinner Guests
var guestList = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori", "Ameen Alam", "Muhammad Qasim", "Asharib Ali"];
console.log("I am inviting ".concat(guestList.length, " number of guests at my dinner party."));
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var item = guestList_1[_i];
    console.log("Dear ".concat(item, ", You are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!"));
}
// //Task 20:Think of something you could store in an array
var List = ["Pakistan", "India", "Russia", "China", "North Korea"];
console.log("Here is the list of countries with nuclear power:");
for (var _a = 0, List_1 = List; _a < List_1.length; _a++) {
    var item = List_1[_a];
    console.log(item);
}
// // Task 21: Think of something you could store in TS object
var employee = {
    Name: "Abdul Raheem",
    Profession: "Web Developer",
    Salary: 200000,
    WorkingHours: "9am to 5pm",
};
for (var key in employee) {
    console.log("The ".concat(key, " of employee is ").concat(employee[key], "."));
}
