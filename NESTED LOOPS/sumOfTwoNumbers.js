function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationsCounter = 0;
    let isFound = false;

    for (let x = startNumber; x <= endNumber; x++) {
        for (let y = startNumber; y <= endNumber; y++) {
            let sum = x + y
            combinationsCounter++
            if (sum === magicNumber) {
                isFound = true;
                console.log(`Combination N:${combinationsCounter} (${x} + ${y} = ${magicNumber})`)
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
if(!isFound){
    console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`)
}



}
sumOfTwoNumbers(["23",
"24",
"20"])
