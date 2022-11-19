function grandpaStavri (input){
    let daysCount = Number(input[0])
    let index = 1
    let sumLitres = 0;
    let sumGradus = 0;

    for(i = 1 ; i <= daysCount; i++){
        let litresPerDay = Number(input[index])
        index++
        let gradus = Number(input[index])
        let gradusPerDay = gradus * litresPerDay

        sumLitres += litresPerDay
        sumGradus += gradusPerDay

        index++
        input[index]
    }

    console.log(`Liter: ${sumLitres.toFixed(2)}`)
    let degrees = sumGradus/sumLitres
    console.log(`Degrees: ${degrees.toFixed(2)}`)

    if(degrees < 38){
        console.log("Not good, you should baking!")
    }else if (degrees > 38 && degrees <= 42){
        console.log("Super!")
    }else if (degrees > 42){
        console.log("Dilution with distilled water!")
    }

}
grandpaStavri([3,
    100,
    45,
    50,
    55,
    150,
    36
    ])
