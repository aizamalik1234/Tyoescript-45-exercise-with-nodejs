// creatin a array
var userNames = ["mahad", "ali", "zeeshan", "admin", "usman"];
// using foreach loop on array
userNames.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thank you for logging i again,"));
    }
});
