
// Task 109: using if statement according to time

const currentTime= new Date();
if(currentTime.getHours()<12){
    console.log("Good Morning");
}


// Task 110: Grading according to score of student

function studentGrades(grades:number) {
    if (grades<=100 && grades>=80) {
        return "Grade: A";
    }
    else if (grades>=65 && grades<80) {
        return "Grade: B";
    }
    else if (grades>=50 && grades<65) {
        return "Grade: C";
    }
    else if (grades>=35 && grades<50) {
        return "Grade: D";
    }
    else{
        return "Grade: F";
    }
}
console.log(studentGrades(85));
console.log(studentGrades(73));
console.log(studentGrades(64));
console.log(studentGrades(45));
console.log(studentGrades(34));


// Task 111: Categorizing a person's age group.

let personAge= 25;
if (personAge<13) {
    console.log("Child");
}
else if(personAge<=19){
    console.log("Teenager");
}
else{
    console.log("Adult");
}