function excursionCalculator (input){
    let peopleCount = Number(input[0])
    let season = input[1]
    let price = 0

    switch(season){
        case "spring": 
        if (peopleCount <= 5){
            price = peopleCount * 50
        }else if (peopleCount > 5){
            price = peopleCount * 48
        }
        ;break ;
        case "summer": 
        if (peopleCount <= 5){
            price = (peopleCount * 48.50) * 0.85
        }else if (peopleCount > 5){
            price = (peopleCount * 45) * 0.85
        }
        ;break ;
        case "autumn": 
        if (peopleCount <= 5){
            price = peopleCount * 60
        }else if (peopleCount > 5){
            price = peopleCount * 49.50
        }        
        ;break ;
        case "winter": 
        if (peopleCount <= 5){
            price = (peopleCount * 86) * 1.08
        }else if (peopleCount > 5){
            price = (peopleCount * 85) * 1.08
        }
        ;break ;

    }

    console.log(`${price.toFixed(2)} leva.`)
}

excursionCalculator([20, "winter"
    ])