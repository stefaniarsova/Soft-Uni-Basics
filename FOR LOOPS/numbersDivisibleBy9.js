function numbersDivisibleBy9 (input){
    let startNumber = Number(input[0]);
    let endNumbr = Number(input[1]);
    let sum = 0;
    let res = ""

    for(let i = startNumber; i <= endNumbr; i++){
        if(i % 9 === 0){
            sum += i;
            res += i + "\n"
        }
    }
    console.log("The sum: " + sum)
    console.log(res)
}
numbersDivisibleBy9(["100", "200"])