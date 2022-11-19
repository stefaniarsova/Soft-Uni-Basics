function hairSalon(input) {
    let goal = Number(input[0])
    let index = 1
    let command = input[index]

    let moneyEarned = 0;
    let goalReached = false;

    while (command !== "closed") {
        switch (command) {
            case "haircut":
                index++
                command = (input[index])
                switch (command) {
                    case "mens": moneyEarned += 15; break;
                    case "ladies": moneyEarned += 20; break;
                    case "kids": moneyEarned += 10; break;
                }
                ; break;
            case "color":
                index++
                command = input[index]
                switch (command) {
                    case "touch up": moneyEarned += 20; break;
                    case "full color": moneyEarned += 30; break;
                }
                ; break;
        }

        if (moneyEarned >= goal) {
            goalReached = true
                ; break;
        }
        index++
        command = input[index]
    }

    if(moneyEarned >= goal){
        console.log("You have reached your target for the day!")
        console.log(`Earned money: ${moneyEarned}lv.`)
    }else if(goal >= moneyEarned){
        console.log(`Target not reached! You need ${goal - moneyEarned}lv. more.`)
        console.log(`Earned money: ${moneyEarned}lv.`)
    }
    
}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])
