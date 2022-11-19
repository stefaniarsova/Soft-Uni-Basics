function skiTrip (input){
    let daysSpent = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];
    let nightsSpent = daysSpent - 1;
    let priceForStay = 0;
    let finalPrice = 0;

    switch(roomType){
        case "room for one person":
        priceForStay = 18 * nightsSpent
        ;break ;
        case "apartment":
        priceForStay = 25 * nightsSpent
        if (daysSpent < 10) {
        priceForStay = priceForStay * 0.70
        } else if (daysSpent >= 10 && daysSpent <= 15){
        priceForStay = priceForStay * 0.65
        } else if (daysSpent > 15){
        priceForStay = priceForStay * 0.50
        } 
        ;break ;
        case "president apartment":
        priceForStay = 35 * nightsSpent
        if (daysSpent < 10) {
        priceForStay = priceForStay * 0.90
        } else if (daysSpent >= 10 && daysSpent <= 15){
        priceForStay = priceForStay * 0.85
        } else if (daysSpent > 15){
        priceForStay = priceForStay * 0.80
        } 
        ;break ;
    }

    if (grade === "positive"){
    finalPrice = priceForStay + priceForStay * 0.25
    } else if (grade === "negative"){
    finalPrice = priceForStay - priceForStay * 0.10    
    }

    console.log(finalPrice.toFixed(2))

   
}

skiTrip(["14",
"apartment",
"positive"])
