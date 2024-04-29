// creating a function with paremeters which return a values in string
function city_country(city: string, country: string) : string{
    return `${city} , ${country}`;
}

// calling a function in print the return value
city_country("karchi" , "pakistan");

console.log(city_country("karchi" , "pakistan"));

city_country("tokyo", "japan");
console.log(city_country("tokyo" , "japan"));

city_country("berlin", "germany");
console.log(city_country("berlin" , "germany"));