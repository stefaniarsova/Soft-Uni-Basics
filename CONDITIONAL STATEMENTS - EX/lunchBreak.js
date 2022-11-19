function lunchBreak (input) {
    let movieName = input[0];
    let movieDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    let lunchTime = breakDuration * 1/8;
    let leisureTime = breakDuration * 1/4;
    let timeLeft = breakDuration - lunchTime - leisureTime

    if (timeLeft >= movieDuration){
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft - movieDuration)} minutes free time.`)
    } else if (timeLeft < movieDuration){
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(movieDuration - timeLeft)} more minutes.`)
    }

    
}
    
lunchBreak(["Game of Thrones",
"60",
"96"])





