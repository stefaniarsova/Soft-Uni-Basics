function bonusScore (input){
    let number = Number(input[0]);
    let bonus = 0.00

    if (number <= 100){
        bonus = 5
    } else if  (number < 1000){
        bonus = number * 0.20
    } else if (number > 1000){
        bonus = number * 0.10
    }

    if (number % 2 === 0){
        bonus += 1
    }  else if (number % 10 === 5){
        bonus += 2
    }
    
    console.log(bonus)
    console.log(number + bonus)
}

bonusScore(["15875"])