// Task 16: More Guests 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guestList = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori", "Ameen Alam"];
var unableToAttend = guestList.splice(0, 1)[0]; // Removing the first guest who can't make it
var newInvitee = "Asharib Ali"; // New person to invite
console.log("".concat(unableToAttend, " can't make it to the dinner due to some reasons."));
guestList.push(newInvitee); // Adding the new person to the end of the guest list
guestList.unshift("Muhammad Qasim"); // Adding one new guest to the beginning of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Hamza"); // Adding one new guest to the middle of the array
console.log("Good news! We found a bigger dinner table.");
// Sending invitations to the updated guest list
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!"));
}
// Task 17:Shrinking Guest list 
var guestList = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori", "Ameen Alam", "Muhammad Qasim", "Asharib Ali"];
var unableToAttend = guestList.splice(0, 1)[0];
console.log("".concat(unableToAttend, " can't make it to the dinner due to some reasons."));
// Announcement
console.log("Attention: Due to unforeseen circumstances, we can only invite two people for dinner.");
// Removing the guests we can't invite
while (guestList.length > 2) {
    var removeguest = guestList.pop();
    console.log("Sorry ".concat(removeguest, ", We won't be able to invite you to dinner"));
}
// Sending message to the guests we are still inviting
for (var index = 0; index < guestList.length; index++) {
    console.log("Dear ".concat(guestList[index], ", I am really honored to say that you are still invited to dinner"));
}
//Printing the empty list
guestList.pop();
guestList.pop();
console.log("Final Guest list:", guestList);
// Task 18: Seeing the world
var places = ["Makkah", "Madina", "Blue Mosque", "Bait ul Muqaddas", "Mount Everest"];
//Print array in Original order
console.log("Original order:", places);
//Print array in Alphabatical order
console.log("Alphabatical Order:", __spreadArray([], places.sort(), true));
//Print array in Original order again
console.log("Original order:", places);
//Print array in Reverse Alphabatical order
console.log("Reverse Alphabatical Order:", __spreadArray([], places.sort().reverse(), true));
//Print array in Original order again
console.log("Original order:", places);
//Print array in Reversed order
places.reverse();
console.log("Reversed order", places);
//Print array in Reversed order again
places.reverse();
console.log("Back to its original order", places);
//Sort array in Alphabatical order
console.log("Sorted in Alphabatical order:", __spreadArray([], places.sort(), true));
//Sort array in Reverse Alphabatical order
console.log("Stored in Reverse Alphabatical Order:", __spreadArray([], places.sort().reverse(), true));
