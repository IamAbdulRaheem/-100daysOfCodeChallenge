// Task 52: Make a SmartPhone Object
var smartPhone = {
    make: "Samsung",
    model: "Galaxy S21",
    specs: {
        storage: "256gb",
        screenSize: "6inches",
        batteryLast: "5 Hours"
    }
};
console.log("This is ".concat(smartPhone.make, " ").concat(smartPhone.model, " with storage ").concat(smartPhone.specs.storage, " screenSize ").concat(smartPhone.specs.screenSize, " and batteryLast ").concat(smartPhone.specs.batteryLast, "."));
// Task 53: Pulling apart a nested object
var developerSkills = {
    codingLanguages: ["TypeScript", "Python", "JavaScript"],
    Tools: ["ChatGPT", "StakeOverFlow", "Docker"],
    softwareFrameWorks: ["Django", "Flask", "Laravel"],
};
// Getting Specific skills from the list
var codingLanguages = developerSkills.codingLanguages, Tools = developerSkills.Tools, softwareFrameWorks = developerSkills.softwareFrameWorks;
// Showing a skill from each category
console.log("codingLanguages: ".concat(codingLanguages[0], ", Tools: ").concat(Tools[0], ", softwareFrameWorks: ").concat(softwareFrameWorks[0]));
// We can also do it in this way
console.log("codingLanguages: ".concat(developerSkills.codingLanguages[0], ", Tools: ").concat(developerSkills.Tools[0], ", softwareFrameWorks: ").concat(developerSkills.softwareFrameWorks[0]));
// Task 54: Making Flexible object keys
function creatObjectDynamickey(key, value) {
    var dynamicObject = {};
    // Setting up a section in the list withh a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using a flexible list setup for a user preference
var userPreference = creatObjectDynamickey("theme", "Dark");
console.log(userPreference);
