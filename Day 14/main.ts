// Task 40: Album

function make_album(artist:string, title: string, tracks?: number): {artist: string, title:string, tracks?:number}{
    let album:{artist:string, title: string, tracks?:number}={
        artist:artist,
        title: title,
    }
    if (tracks!==undefined) {
        album.tracks= tracks;
        
    }
    return album;
}

// Making three dictionaries that have different albums

let album1 = make_album("Taylor Swift", "Folklore");
let album2 = make_album("Ed Sheeran", " ", 12); // Including number of tracks
let album3 = make_album("Beyoncé", "Lemonade");

// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);








// Task 41: Magicians

function show_magician(Magicians:string[]): void {
    for(let Names of Magicians){
        console.log(Names);
    }
}
let Magicians: string[]=["Abdul Raheem", "Abdul Sami", "Abdul Rehman", "Abdullah"];
show_magician(Magicians);

   

// Task 42: Great Magicians

function make_great(Phrase: string, magicians:string[]):void {
    for(let Names of magicians){
        console.log(`${Phrase}, ${Names}`);
    }
}
let magicians: string[]=["Abdul Raheem", "Abdul Sami", "Abdul Rehman", "Abdullah"];

// Calling make_great to modify the array
make_great("The Great", magicians);

// calling show_magician to see the modified list

show_magician(Magicians);