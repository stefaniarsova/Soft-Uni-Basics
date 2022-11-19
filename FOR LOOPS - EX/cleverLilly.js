function cleverLilly(input) {
    let lillysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let toysCounter = 0;
    let savedMoney = 0;
    let addedMoney = 10;
    let stolenMoney = 0;
    let totalMoneyFromToys = 0;
    let totalSavedMoney = 0;

    for (let i = 1; i <= lillysAge; i++) {
        if (i % 2 === 0) {
            savedMoney = savedMoney + addedMoney;
            addedMoney += 10;
            stolenMoney += 1;
        } else {
            toysCounter += 1
        }

    }
    totalMoneyFromToys = toysCounter * pricePerToy
    totalSavedMoney = (totalMoneyFromToys + savedMoney - stolenMoney)

   if(totalSavedMoney >= washingMachinePrice){
       console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`)
   }else {
       console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`)
   }


}

cleverLilly(["10",
    "170.00",
    "6"])
