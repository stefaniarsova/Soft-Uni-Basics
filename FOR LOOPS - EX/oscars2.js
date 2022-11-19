function oscars2 (input){
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let juryCount = Number(input[2]);
    let inputL = input.length

    for (i = 3; i < inputL; i = i + 2){
        let juryName = input[i];
        let symbols = juryName.length
        let juryPoints = Number(input[i+1]);
        startingPoints = startingPoints + (symbols * juryPoints)/2
        if (startingPoints > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`)
        ;break;
        }
    }
    if (startingPoints <= 1250.5){
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`)
    }
    
}
oscars2(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
