var guestlist = ["Sana", "Rida", "Hamza", "Sonia"];
var dontCome = guestlist[0];
console.log(dontCome, "nai aa skta");
guestlist.splice(0, 1, "Khan");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would u like to Dinner with me?")); });
