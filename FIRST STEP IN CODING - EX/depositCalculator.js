function depositCalculator(input) {
let deposit = Number(input[0]);
let time = Number(input[1]);
let increase = Number(input[2] / 100);
let sum = deposit + time * ((deposit * increase)/12)
console.log(sum)
}

depositCalculator(["200" , "3" , "5.7"])