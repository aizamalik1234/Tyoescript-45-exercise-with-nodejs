// define a function to point each magician name from an array 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing maficians name
var magician_name = ["harry poter", "sonia", "sana"];
// call the function to print each magician name
show_magicians(magician_name);
