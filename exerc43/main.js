// define the function to show magiciansnames
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
// define an array of the magicians names
var magicians_names = ["Harry poter", "Hamza", "khan"];
// making a copy of oraginl array through .slice() function
var copy_magicians_name = magicians_names.slice();
// modify the copy array to include "the great" with thier names
var copy_great_magicians = make_great(copy_magicians_name);
// show both array orginl and copies
console.log("orignl array");
show_magicians(magicians_names);
console.log("\ncopied array");
show_magicians(copy_great_magicians);
