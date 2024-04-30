// Task 16: More Guests 

let guestList: string[] = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori", "Ameen Alam"];
let unableToAttend: string = guestList.splice(0, 1)[0]; // Removing the first guest who can't make it
let newInvitee: string = "Asharib Ali"; // New person to invite

console.log(`${unableToAttend} can't make it to the dinner due to some reasons.`);

guestList.push(newInvitee); // Adding the new person to the end of the guest list
guestList.unshift("Muhammad Qasim"); // Adding one new guest to the beginning of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Hamza"); // Adding one new guest to the middle of the array

console.log("Good news! We found a bigger dinner table.");

// Sending invitations to the updated guest list

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!`);
}


// Task 17:Shrinking Guest list 

let guestList: string[] = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori", "Ameen Alam", "Muhammad Qasim", "Asharib Ali"];
let unableToAttend: string = guestList.splice(0, 1)[0]; 
console.log(`${unableToAttend} can't make it to the dinner due to some reasons.`);
// Announcement

console.log("Attention: Due to unforeseen circumstances, we can only invite two people for dinner.");
// Removing the guests we can't invite

while(guestList.length > 2){
 let removeguest= guestList.pop();
 console.log(`Sorry ${removeguest}, We won't be able to invite you to dinner`)
}
// Sending message to the guests we are still inviting

for (let index = 0; index < guestList.length; index++) {
    console.log(`Dear ${guestList[index]}, I am really honored to say that you are still invited to dinner`);
}

//Printing the empty list

    guestList.pop();
    guestList.pop();
    console.log("Final Guest list:", guestList);


// Task 18: Seeing the world

let places: string[]= ["Makkah", "Madina", "Blue Mosque", "Bait ul Muqaddas", "Mount Everest"];
//Print array in Original order
console.log("Original order:", places);
//Print array in Alphabatical order
console.log("Alphabatical Order:", [...places.sort()]);
//Print array in Original order again
console.log("Original order:", places);
//Print array in Reverse Alphabatical order
console.log("Reverse Alphabatical Order:", [...places.sort().reverse()]);
//Print array in Original order again
console.log("Original order:", places);
//Print array in Reversed order
places.reverse();
console.log("Reversed order", places);
//Print array in Reversed order again
places.reverse();
console.log("Back to its original order", places);
//Sort array in Alphabatical order
console.log("Sorted in Alphabatical order:", [...places.sort()]);
//Sort array in Reverse Alphabatical order
console.log("Stored in Reverse Alphabatical Order:", [...places.sort().reverse()]);