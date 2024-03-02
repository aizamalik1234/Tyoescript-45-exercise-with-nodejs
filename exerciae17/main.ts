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

// inform that only two guest can be invited for dinner
console.log("unfortunatrly,the new dinner table want arrive on time, so i can only intive two guest to dinner with me");

//using while-loop tp rempve guests from the array until only two names remain
while(guestlist.length > 2) {
    let removedguestlist = guestlist.pop();
    console.log(`sorry, ${removedguestlist} I cant invite you to dinner`);

}

console.log("Invitation to the last 2 guests");

guestlist.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// removing last two guest from the list
guestlist.pop();
guestlist.pop();

console.log("Empty list:", guestlist);