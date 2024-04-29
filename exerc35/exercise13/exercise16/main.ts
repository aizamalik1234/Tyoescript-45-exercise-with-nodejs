// creating a guestlist Array
let guestlist = ["Saba ", "Rida" ,"Sana", "Hamza"];

// Making variable for those guest who cant come
let dontcome = guestlist[0];

// Print the name of guest who cant come
console.log(dontcome, "Nai aa skti");

// Add or remove values from guestlist Array
guestlist.splice(0, 1, "khan"); 

// message print fpr bigger table
console.log("Good news ! We have found a Bigger Table for Dinner.");

// Adding a new value at starting index of Array
guestlist.unshift("Ali");

// Adding a new value at ending index of Array
guestlist.push("Usman");

// Get a middle index of our guestlist array
let middleIndex: number = Math.floor(guestlist.length / 2);

// Adding a new guesr to midle index a array
guestlist.splice(middleIndex, 0, "sidra");

// Print message of updated list
console.log("Updated list of our guests");

//sending a invitation message to our guest one by one with thier name
guestlist.forEach(oneguest => console.log(`salam ${oneguest}.wouldyou like dinner with me`));

