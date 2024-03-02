let guestlist = ["Sana", "Rida", "Hamza", "Sonia"]; 

let dontCome = guestlist[0];

console.log(dontCome, "nai aa skta");

guestlist.splice(0, 1, "Khan");

guestlist.forEach(guest => console.log(`salam ${guest}, would u like to Dinner with me?`));