// Task 61: Making Enums for vehicles


// Making the enum for vehicles

enum vehicles{
    car,
    motorcycles,
    truck,
}

// Showing one type of vehicles from the list

let myvehicles:vehicles= vehicles.truck;
console.log(myvehicles);


// Task 62: Making a student template

// Creating a blueprint

interface student{
    name:string,
    age: number,
    courses: string[],
}

// Filling the blue print with an example student

let Student:student={
    name: "Abdul Raheem",
    age: 21,
    courses: ["Computer", "Science", "English"],
}

// Now we will print student information

console.log(Student);



// Task 63: Shape Shifter

type Shape={
    kind: "circle" | "rectangle";
    radius?: number;
    height?: number;
    width?: number;
}

let circle: Shape={
    kind: "circle",
    radius: 5,
};

let rectangle:Shape={
    kind: "rectangle",
    height: 10,
    width: 20,
}
// To print the properties of circle
console.log(circle);
// TO print the properties of rectangle
console.log(rectangle);
