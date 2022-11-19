function suppliesForSchool(input) {
let pens = Number(input[0]) * 5.80
let marcers = Number(input[1]) * 7.20
let cleanser = Number(input[2]) * 1.20
let discount = Number(input[3])/ 100
let sum = pens + marcers + cleanser

console.log(sum - sum * discount)
}

suppliesForSchool(["2" , "3" , "4" , "25"])