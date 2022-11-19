function building(input){
    let floors = Number(input[0])
    let rooms = Number(input[1])

    for(let floorsX = floors; floorsX > 0; floorsX--){
        let printline = ""
        for(let roomsX = 0; roomsX < rooms; roomsX++){
            if(floorsX === floors){
                printline+= "L" + floorsX+roomsX + " "
            } else if(floorsX % 2 === 0){
                printline+= "O" + floorsX+roomsX + " "
            }else {
                printline+= "A" + floorsX+roomsX + " "
            }
        }
console.log(printline)
    }
}


building(["6", "4"])