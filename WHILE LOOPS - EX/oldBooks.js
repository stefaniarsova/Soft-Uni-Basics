function oldBooks(input) {
    let favouriteBook = input[0];
    let index = 1;
    let command = input[index];
    let bookCounter = 0;
    
    while(command !== "No More Books"){
        bookCounter++
        let currentBook = input(command)
        if(currentBook === favouriteBook){
            console.log(`You checked ${bookCounter} books and found it`)
        }
        index++
        command = input[index]
    }
}


oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])

