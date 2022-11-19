function hotelRoom (input){
    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice = 0;
    let ApartmentPrice = 0;

    switch(month){
        case "May":
        case "October":
            studioPrice = 50 ;
            ApartmentPrice = 65 ;
        ;break ; 
        case "June":
        case "September":
            studioPrice = 75.20 ;
            ApartmentPrice = 68.70 ;
        ;break ;
        case "July":
        case "August":
            studioPrice = 76 ;
            ApartmentPrice = 77 ;
        ;break ;  
    }

    if (nights > 14 && (month === "May" || "October")){
        studioPrice = studioPrice * 0.70
    } else if (nights > 14 && (month === "June" || "September")){
        studioPrice = studioPrice * 0.80
    } else if (nights > 7 && nights < 14 && (month === "May" || "October")){
        studioPrice = studioPrice * 0.95
    }

    if (nights > 14){
        ApartmentPrice = ApartmentPrice * 0.90
    }

    console.log(`Apartment: ${(nights * ApartmentPrice).toFixed(2)} lv.`)
    console.log(`Studio: ${nights * studioPrice} lv.`)


}

hotelRoom(["May",
"15"])
