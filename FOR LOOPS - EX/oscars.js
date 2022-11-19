function oscars(input) {
    let actorName = input[0];
    let startPoints = Number(input[1]);
    let juryCount = Number(input[2]);

    for (let i = 3; i < input.length; i = i + 2) {
        let juryName = input[i];
        let symbol = juryName.length;
        let juryPoints = Number(input[i + 1]);

        startPoints = startPoints + (symbol * juryPoints) / 2;
        if (startPoints > 1250.5) {
            break;
        }
    }
    if (startPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startPoints.toFixed(1)}!`)
    } else if (startPoints <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startPoints).toFixed(1)} more!`)
    }

}

oscars(["Zahari Baharov",
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

