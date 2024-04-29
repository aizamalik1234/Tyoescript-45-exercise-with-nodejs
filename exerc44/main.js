function makeSandwich() {
    var itmes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itmes[_i] = arguments[_i];
    }
    console.log("making a sandwich with the following items:\n");
    itmes.forEach(function (singletem) { return console.log(singletem); });
    console.log("\nNow enjoy sandwich");
}
//call the function 3 times with 3 dufferent number of arguments
makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("bread", "butter", "may", "egg", "cheese", "tomato");
