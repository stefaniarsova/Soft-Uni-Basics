function deerOfSanta (input){
let daysAbsent = Number(input[0])
let totalFoodLeft = Number(input[1])
let foodForDeerOnePerDay = Number(input[2])
let foodForDeerTwoPerDay = Number(input[3])
let foodForDeerThreePerDay = Number(input[4])

let foodNeeded = foodForDeerOnePerDay * daysAbsent + foodForDeerTwoPerDay*daysAbsent + foodForDeerThreePerDay*daysAbsent

if(foodNeeded > totalFoodLeft){
    console.log(`${Math.ceil(foodNeeded - totalFoodLeft)} more kilos of food are needed.`)
}else if (foodNeeded < totalFoodLeft){
    console.log(`${Math.floor(totalFoodLeft - foodNeeded)} kilos of food left.`)
}


}
deerOfSanta([5,
10,
2.1,
0.8,
11])
