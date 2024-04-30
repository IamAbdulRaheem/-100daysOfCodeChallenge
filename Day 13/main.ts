// Task 37: Large Shirts

function make_shirt(size:string= "Large", message:string="I love TypeScript"): void {
    console.log(`A ${size}-sized shirt will print the message, "${message}."`)
}

// Default message for the large shirt

make_shirt();

// Default message for the medium shirt

make_shirt("medium");

// shirt of any type with the different message

make_shirt("large", "Hello World");




// Task 38: Cities

function describe_city(city:string, country:string="Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Dhaka", "Bangladesh");




// Task 39: City Names

function city_country(city:string, country: string): void {
    console.log(`"${city}, ${country}"`);
}
city_country("Lahore", "Pakistan");
city_country("Dhaka", "Bangladesh");
city_country("Mumbai", "India");
