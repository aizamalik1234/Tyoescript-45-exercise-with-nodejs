let userName = ["mahad", "ali", "zeeshan", "admin", "usman"]

userName =[]

if(userName.length === 0){
    console.log("we array in empty we need to find some users!");
}else{
    // using foreach loop on array
    userName.forEach(oneuser =>{
        if(oneuser === "admin"){
            console.log(`hello ${oneuser},would you like to seea status report?`)
            }else{
                console.log(`hello ${oneuser}, thank you for logging in again.`)
            }
        
    })
}
