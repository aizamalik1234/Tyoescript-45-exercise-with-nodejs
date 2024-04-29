// Define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let  fruits = [" apple" , "banana" , "orange"];

// test for equality and inequality with string
console.log("is apple is equal tp apple?");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple");
console.log(apple != "apple");

// test using lowercase funtion
console.log("is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\n APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// numerical tests
console.log("\n is ten is equal to twenty");
console.log(ten == twenty);

// not equal to
console.log("\n ten is not equal to twenty?");
console.log(ten != twenty);

// greater than
console.log("\n is ten is greater than zero");
console.log(ten > 0);

// less than
console.log("\n is twenty is less than 10");
console.log(twenty < 10);

// greater than or equal to

console.log("\n is ten is greater than or equal to 5?");
console.log(ten >= 5);

// less than or equal to

console.log("\n twenty is less than oe equal to 10");
console.log(twenty <= 10);

//tests usging "and" & "or" operators
// using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// using || (or)
console.log("\n twenty is greater than 50 or 20 is equal to 20");
console.log(20 < 50 || 20 == 20);

console.log("\n 20 is greater than 50 or 20 9s not equal to 20");
console.log(20 > 50 || 20 != 20);

// test whether an item is include is array
console.log(" is orange include in my fruits array");
console.log(fruits. includes("orange"));
 
// not include
console.log("\n orange not include in my fruits array");
console.log(! fruits.includes("orange"));













