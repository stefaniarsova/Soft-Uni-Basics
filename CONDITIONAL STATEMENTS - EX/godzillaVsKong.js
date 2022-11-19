function godzillaVsKong (input) {
    let filmBudget = Number(input[0]);
    let numberStatists = Number(input[1]);
    let priceForClothesPerPerson = Number(input[2]);
    let decorPrice = filmBudget * 0.10

    if (numberStatists > 150) {
        priceForClothesPerPerson *= 0.90
    }

    let totalPriceForFilm = numberStatists * priceForClothesPerPerson + decorPrice

    if (totalPriceForFilm > filmBudget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalPriceForFilm - filmBudget).toFixed(2)} leva more.`)
    } else if (filmBudget >= totalPriceForFilm) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(filmBudget - totalPriceForFilm).toFixed(2)} leva left.`)
    }
}

godzillaVsKong(["20000" , "120" , "55.5"])