// // Task 13:Your own Array
var transportation = ["Honda MotorCycle", "BMW Car", "Luxury House", "Apple Mobile", "Rolex Watch"];
for (var _i = 0, transportation_1 = transportation; _i < transportation_1.length; _i++) {
    var item = transportation_1[_i];
    // console.log("I would like to own a " + " " +item);
    console.log("I would like to own a ".concat(item));
}
// // Task 14: Guest List 
var guests = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori"];
for (var index = 0; index < guests.length; index++) {
    console.log("Dear ".concat(guests[index], ", you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!"));
}
// Task 15: Changing Guest list
var Guests = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori"];
var unabletoattend = "Kamran Tessori";
console.log("".concat(unabletoattend, " can't make to the dinner due to some reasons"));
// // Replace the guest
var newguest = "Ameen Alam";
Guests[Guests.indexOf(unabletoattend)] = newguest;
// // New Invitation
for (var _a = 0, Guests_1 = Guests; _a < Guests_1.length; _a++) {
    var item = Guests_1[_a];
    console.log("Dear ".concat(item, ", you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!"));
}
