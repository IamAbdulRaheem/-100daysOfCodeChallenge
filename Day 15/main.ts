// Task 43: Unchanged Magicians

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}

// Reusing the show_magicians function from Exercise 39
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicians: string[] = ["Abdul Raheem", "Abdul Sami", "Abdul Rehman", "Abdullah"];

// Creating a copy of the original array
let original_magicians: string[] = [...magicians];

// Calling make_great with a copy of the array
let great_magicians: string[] = make_great([...magicians]);

// Calling show_magicians to show the original array
console.log("Original Magicians:");
show_magicians(original_magicians);

// Calling show_magicians to show the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(great_magicians);





// Task 44: Sandwiches

function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
}

// Calling the function with different number of arguments
make_sandwich("ham", "cheese", "lettuce");
make_sandwich("turkey", "bacon");
make_sandwich("peanut butter", "jelly");





// Task 45: Cars

function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, options: { [key: string]: any } } {
    let car: { manufacturer: string, model: string, options: { [key: string]: any } } = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };

    for (let option of options) {
        for (let key in option) {
            car.options[key] = option[key];
        }
    }

    return car;
}

// Calling the function with required information and two additional name-value pairs
let my_car = car_info("Toyota", "Camry", { color: "red" }, { year: 2022 });

// Printing the returned Object to ensure all information was stored correctly
console.log(my_car);