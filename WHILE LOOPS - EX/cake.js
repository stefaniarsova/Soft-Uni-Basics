function cake(input){
    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let totalCakePieces = width * lenght;
    let piecesEaten = 0;
    let index = 2;
    let command = (input[index]);
    
    while(command !== "STOP"){
        let piecesTaken = Number(command)
        piecesEaten += piecesTaken

        if(piecesEaten >= totalCakePieces){
            console.log(`No more cake left! You need ${piecesEaten - totalCakePieces} pieces more.`)
            ;break;
        }
        index++
        command = (input[index])
              
    }

    if(command === "STOP"){
        if(piecesEaten <= totalCakePieces){
            console.log(`${totalCakePieces - piecesEaten} pieces are left.`)
        }
    }


}   

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
