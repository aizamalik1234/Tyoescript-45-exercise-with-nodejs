// define the function to show magiciansnames
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
// define an array of the magicians names
var magicians_name = ["Harry poter", "Hamza", "khan"];
var great_magicians = make_great(magicians_name);
console.log(great_magicians);
