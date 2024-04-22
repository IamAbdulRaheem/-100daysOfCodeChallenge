// Task 97: Working with dates
function getCurrentDateFormated():any {
    const now= new Date();
    const day= String(now.getDate()).padStart(2,'0');   // Ensure the day is 2 digit
    const month= String(now.getMonth()+1).padStart(2,'0')  // Adds 1 because months are 0-indexed
    const year= now.getFullYear();
    return `${day}-${month}-${year}`
}
console.log(getCurrentDateFormated()) // Output the current Date

// Task 98: Creating a snippet
function daysUntilNewYear():number {
    const today= new Date();
    const newYear= new Date(today.getFullYear()+1,0,1);  // January 1st of next year
    const diff= newYear.getTime()- today.getTime();   // Difference in Milliseconds
    const days= Math.ceil(diff /(1000*60*60*24));   // Converting into days
    return days;
}
console.log(daysUntilNewYear() + " Days until new year");



// Task 99: Generating a Date Object representing your birthday

function getNextBirthday(month:number, day: number):Date {
    const today= new Date();
    let year= today.getFullYear();
    const birthday= new Date(year,month-1,day); // Months are 0-indexed
    if(birthday<today){
        // If birthday of this year is passed use next year birthday
        birthday.setFullYear(year+1);
    }
    return birthday;
}

// Replace with your birth month and day
const nextBirthday= getNextBirthday(9,13);
console.log("Next Birthday on:", nextBirthday.toLocaleDateString());  // Shows the date of next birthday