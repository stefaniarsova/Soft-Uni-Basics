function bestPlayer(input) {
    let eggsPlayerOne = Number(input[0])
    let eggsPlayerTwo = Number(input[1])
    let index = 2
    let command = input[index]
    let outOfEggs = false

    while (command !== "End of battle") {

        if (command === "one") {
            eggsPlayerTwo--
            if (eggsPlayerTwo <= 0) {
                console.log(`Player two is out of eggs. Player one has ${eggsPlayerOne} eggs left.`)
                outOfEggs = true
                    ; break;
            }
        }

        if (command === "two") {
            eggsPlayerOne--
            if (eggsPlayerOne <= 0) {
                console.log(`Player one is out of eggs. Player two has ${eggsPlayerTwo} eggs left.`)
                outOfEggs = true
                    ; break;
            }
        }
        index++
        command = input[index]
    }

    if(!outOfEggs){
        console.log(`Player one has ${eggsPlayerOne} eggs left.`)
        console.log(`Player two has ${eggsPlayerTwo} eggs left.`)
    }


}

bestPlayer([2,
    6,
    "one",
    "two",
    "two",
])