function tennisRanklist (input){
    let totalTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let points = startingPoints
    let wins = 0;
    let inputL = input.length

    for(i = 2; i < inputL ; i++){
        let stage = input[i]
        switch(stage){
            case "W":
                wins ++
                points += 2000; 
                break;
            case "F":points += 1200; break;
            case "SF": points += 720; break;
        }
    } 
    let averagePoints = Math.floor(points-startingPoints)/totalTournaments
    let percentWins = (wins/totalTournaments)*100
    
    console.log(`Final points: ${points}`)
    console.log(`Average points: ${Math.floor(averagePoints)}`)
	console.log(`${percentWins.toFixed(2)}%`)

    
}
tennisRanklist(["5"
,"1400",
"F",
"SF",
"W",
"W",
"SF"])
