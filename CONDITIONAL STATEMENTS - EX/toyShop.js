function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalToyPrice = puzzleCount * 2.60 + dollsCount * 3 + teddyBears * 4.10 + minions * 8.20 + trucks * 2
    let totalToyCount = puzzleCount + dollsCount + teddyBears + minions + trucks

    if (totalToyCount >= 50) {
        totalToyPrice = totalToyPrice * 0.75
    }

    let moneyForTrip = totalToyPrice * 0.90

    if (moneyForTrip >= tripPrice) {
        console.log(`Yes! ${(moneyForTrip - tripPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(tripPrice - moneyForTrip).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8" , "20" , "25" ,"30" , "50" , "10"])