function shopping (input) {
    let petersBudget = Number(input[0]);
    let numVideoCards = Number(input[1]);
    let numProcessors = Number(input[2]);
    let numRamMemory = Number(input[3]);

    let priceVideoCards = 250  
    let priceForAllVideoCards = numVideoCards * 250
    let priceProcessors = priceForAllVideoCards * 0.35
    let priceForAllProcessors = priceProcessors * numProcessors
    let priceRamMemory = priceForAllVideoCards * 0.10 
    let priceForAllRam = priceRamMemory * numRamMemory
    let totalSum = priceForAllVideoCards + priceForAllProcessors + priceForAllRam
    
    if (numVideoCards > numProcessors) {
        totalSum *= 0.85
    }

    if (totalSum <= petersBudget) {
        console.log(`You have ${(petersBudget - totalSum).toFixed(2)} leva left!`)
    } else if (petersBudget < totalSum) {
        console.log(`Not enough money! You need ${(totalSum - petersBudget).toFixed(2)} leva more!`)
    }
}

shopping(["920.45","3","1","1"])

