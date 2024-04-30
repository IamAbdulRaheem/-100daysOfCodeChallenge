// // Task 13:Your own Array

let transportation: string[]= ["Honda MotorCycle", "BMW Car", "Luxury House", "Apple Mobile", "Rolex Watch"]
for(let item of transportation){
    // console.log("I would like to own a " + " " +item);
    console.log(`I would like to own a ${item}`);
}



// // Task 14: Guest List 

let guests: string[]= ["Kamran Tessori", "Zia Khan", "Daniyal Nagori"]
for (let index = 0; index < guests.length; index++) {
    console.log(`Dear ${guests[index]}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!`); 
}




// Task 15: Changing Guest list

let Guests: string[]= ["Kamran Tessori", "Zia Khan", "Daniyal Nagori"]
let unabletoattend: string= "Kamran Tessori";
console.log(`${unabletoattend} can't make to the dinner due to some reasons`);

// // Replace the guest

let newguest: string= "Ameen Alam";
Guests[Guests.indexOf(unabletoattend)]= newguest;

// // New Invitation

for(let item of Guests){
    console.log(`Dear ${item}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!`)
}
