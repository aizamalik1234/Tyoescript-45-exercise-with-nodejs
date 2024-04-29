// array of curent users
var current_users = ["rabia", "sana", "nadia", "wase", "hamza"];
// array of new users
var new_users = ["rabia", "saba", "wase", "haris", "rida"];
// loop through new_users to check for username avibilty
new_users.forEach(function (new_one_user) {
    // making a condition for username already exist and save in our_condition varible
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different message using if-else statment
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
