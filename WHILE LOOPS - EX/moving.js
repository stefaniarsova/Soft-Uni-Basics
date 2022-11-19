function moving(input) {
    let width = Number(input[0])
    let length = Number(input[1])
    let height = Number(input[2])
    let totalSpace = width * length * height
    let spaceTaken = 0;
    let index = 3
    let command = input[index]


    while (command !== "Done") {
        let spaceBoxes = Number(command)
        spaceTaken += spaceBoxes

        if (spaceTaken >= totalSpace) {
            console.log(`No more free space! You need ${spaceTaken - totalSpace} Cubic meters more.`)
                ; break;
        }
        index++
        command = input[index]
    }
if(command === "Done"){
    if(spaceTaken <= totalSpace){
        console.log(`${totalSpace - spaceTaken} Cubic meters left.`)
    }
}

}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
