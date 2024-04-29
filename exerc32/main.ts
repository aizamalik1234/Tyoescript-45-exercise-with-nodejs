// array of curent users
let current_users = ["rabia", "sana", "nadia", "wase", "hamza"]

// array of new users
let new_users = ["rabia","saba","wase","haris","rida"]

// loop through new_users to check for username avibilty

new_users.forEach(new_one_user => {
// making a condition for username already exist and save in our_condition varible
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() ===new_one_user.toLowerCase())

// print different message using if-else statment
if(our_condition){
    console.log(`sorry ${new_one_user} is already taken!`)

}else{
    console.log(`this username ${new_one_user} is available`)
}   
})
