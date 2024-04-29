// define the make album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functionand  creating 3 varibles with different values
var album1 = make_album("sonia", "album title 1");
var album2 = make_album("sana", "album title2");
// calling a make album function with third permeter
var album3 = make_album("rida", "album title3", 10);
// printng values of our creat my function
console.log(album1);
console.log(album2);
console.log(album3);
