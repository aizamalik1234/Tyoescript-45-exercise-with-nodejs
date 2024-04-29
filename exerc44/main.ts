function makeSandwich(...itmes:string[]){
    console.log("making a sandwich with the following items:\n");
    itmes.forEach(singletem => console.log(singletem));

    console.log("\nNow enjoy sandwich");
}

//call the function 3 times with 3 dufferent number of arguments
makeSandwich("chicken" ,"cheese" ,"mayo" ,"egg");

makeSandwich("bread" ,"butter");

makeSandwich("bread" ,"butter" ,"may" ,"egg", "cheese", "tomato");