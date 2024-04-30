// Task 40: Album
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Making three dictionaries that have different albums
var album1 = make_album("Taylor Swift", "Folklore");
var album2 = make_album("Ed Sheeran", " ", 12); // Including number of tracks
var album3 = make_album("Beyoncé", "Lemonade");
// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
// Task 41: Magicians
function show_magician(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var Names = Magicians_1[_i];
        console.log(Names);
    }
}
var Magicians = ["Abdul Raheem", "Abdul Sami", "Abdul Rehman", "Abdullah"];
show_magician(Magicians);
// Task 42: Great Magicians
function make_great(Phrase, magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var Names = magicians_1[_i];
        console.log("".concat(Phrase, ", ").concat(Names));
    }
}
var magicians = ["Abdul Raheem", "Abdul Sami", "Abdul Rehman", "Abdullah"];
// Calling make_great to modify the array
make_great("The Great", magicians);
// calling show_magician to see the modified list
show_magician(Magicians);
