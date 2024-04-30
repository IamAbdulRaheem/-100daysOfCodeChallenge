// Task 31: No users
var userNames = [];
if (userNames.length == 0) {
    console.log("We need to find some new users.");
}
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var item = userNames_1[_i];
    if (item == "Admin") {
        console.log("Hello Admin, Would you like to check some status report.");
    }
    else {
        console.log("Thank you for logging in again");
    }
}
// Task 32: Checking User Names
var current_users = ["User1", "User2", "User3", "User4", "User5"];
var new_users = ["User5", "User4", "User6", "User7", "User8"];
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var Name = new_users_1[_a];
    var username_exist = false;
    for (var _b = 0, current_users_1 = current_users; _b < current_users_1.length; _b++) {
        var current_name = current_users_1[_b];
        if (Name.toLowerCase() === current_name.toLowerCase()) {
            username_exist = true;
            break;
        }
    }
    if (username_exist) {
        console.log("Sorry the username \"".concat(Name, "\" has already been taken. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(Name, "\" is available."));
    }
}
// Task 33: Ordinal Numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    if (number == 1) {
        console.log("".concat(number, "st"));
    }
    else if (number == 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number == 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
