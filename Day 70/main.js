/*******************
 * INTERFACE INTRO *
 *******************/
var John = {
    name: "John",
    age: 30,
};
// Create an object that adheres to the 'Person' interface
var Sarah = {
    name: "Sarah",
    age: 30,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    },
};
Sarah.greet("Hello, TypeScript!"); // Output: Alice says: Hello, TypeScript!
// Create an object 'userSettings' that adheres to the merged 'Settings' interface
var userSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true,
};
/********************
 * HTMLIMAGEELEMENT *
 ********************/
// This example is for educational purposes, but it is not going to work. 
var imgElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
}
else {
    imgElement.addEventListener("load", function () {
        console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
    });
}
var Labrador = /** @class */ (function () {
    function Labrador() {
        this.type = "dog";
    }
    Labrador.prototype.bark = function () {
        console.log("Woof!");
    };
    return Labrador;
}());
var labrador = {
    type: "monkey",
    bark: function () {
        console.log("Woof!");
    },
};
var myCar = {
    brand: "Toyota",
    model: "Camry",
};
