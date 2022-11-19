function money (input){
    let change = Number(input[0]);
    let inCoins = (change * 100).toFixed(2)
    let coinCounter = 0;

    while(inCoins > 0){
        
        if(inCoins >= 200){
            coinCounter++
            inCoins-= 200;
        }else if(inCoins >= 100){
            coinCounter++
            inCoins-= 100;
        }else if(inCoins >= 50){
            coinCounter++
            inCoins-= 50;
        }else if(inCoins >= 20){
            coinCounter++
            inCoins-= 20;
        }else if(inCoins >= 10){
            coinCounter++
            inCoins-= 10;
        }else if(inCoins >= 5){
            coinCounter++
            inCoins-=5
        }else if(inCoins >= 2){
            coinCounter++
            inCoins-= 2;
        }else if(inCoins >= 1){
            coinCounter++
            inCoins-= 1;
        }
    }
console.log(coinCounter)
}

money(["0.56"])