// Task 52: Make a SmartPhone Object

let smartPhone={
    make:"Samsung",
    model: "Galaxy S21",
    specs:{
        storage: "256gb",
        screenSize: "6inches",
        batteryLast: "5 Hours"
    }
}
console.log(`This is ${smartPhone.make} ${smartPhone.model} with storage ${smartPhone.specs.storage} screenSize ${smartPhone.specs.screenSize} and batteryLast ${smartPhone.specs.batteryLast}.`)
// Task 53: Pulling apart a nested object
let developerSkills={
        codingLanguages: ["TypeScript", "Python", "JavaScript"],
        Tools: ["ChatGPT", "StakeOverFlow", "Docker"],
        softwareFrameWorks:["Django", "Flask", "Laravel"],
};
// Getting Specific skills from the list
let {codingLanguages,Tools,softwareFrameWorks}= developerSkills;
// Showing a skill from each category
console.log(`codingLanguages: ${codingLanguages[0]}, Tools: ${Tools[0]}, softwareFrameWorks: ${softwareFrameWorks[0]}`);

// We can also do it in this way
console.log(`codingLanguages: ${developerSkills.codingLanguages[0]}, Tools: ${developerSkills.Tools[0]}, softwareFrameWorks: ${developerSkills.softwareFrameWorks[0]}`);


// Task 54: Making Flexible object keys

function creatObjectDynamickey(key:string, value:string){
    let dynamicObject={};
    // Setting up a section in the list withh a changeable name
    dynamicObject[key]=value;
    return dynamicObject;
}
// Using a flexible list setup for a user preference

let userPreference= creatObjectDynamickey("theme", "Dark");
console.log(userPreference);








