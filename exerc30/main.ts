// creatin a array
let userNames = ["mahad", "ali", "zeeshan","admin", "usman"];

// using foreach loop on array
userNames.forEach(oneuser =>{
    if(oneuser === "admin"){
        console.log(`hello ${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`hello ${oneuser}, thank you for logging i again,`)
    }
})
