// define the function to show magiciansnames
function show_magicians(magicians:[]){
    magicians.forEach(name => console.log(name));
}
function make_great(magicians: string[]){
   return magicians.map(name => `The great ${name}`);
}
// define an array of the magicians names
let magicians_name = ["Harry poter" ,"Hamza", "khan"];

let great_magicians =make_great(magicians_name);

console.log(great_magicians);