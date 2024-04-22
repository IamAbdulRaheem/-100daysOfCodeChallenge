// Task 115: Using switch statement to log the days
function logDaysOfWeeks(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Enter a valid dayNumber");
            break;
    }
}
logDaysOfWeeks(4);
// Task 116: Creating a switch case statement to log the seasons
function logSeasons(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
            console.log("Spring");
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
        default:
            console.log("Enter a valid month.");
            break;
    }
}
logSeasons(5);
// Task 117: Executing default statemenet is switch cases
// if none of the cases matches than default value is prinited to the console so we will  check this by using our exercise 115
logDaysOfWeeks(8); // It will print the default value because we have given the cases that are valid upto the number 7
// So output will be Enter a valid dayNumber
