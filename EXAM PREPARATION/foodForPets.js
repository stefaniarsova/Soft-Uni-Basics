function foodForPets (input){
let index = 0;
let totalDays = Number(input[index]);
index++
let totalFoodQuantity = Number(input[index])
index++

let totalEatenBiscuits = 0;
let foodEatenByDog = 0;
let foodEatenByCat = 0;

for(let days = 1; days <= totalDays; days++){
    let dogFood = Number(input[index])
    index++

    let catFood = Number(input[index])
    index++

    if(days % 3 === 0){
    totalEatenBiscuits = (catFood + dogFood) * 0.10;
    }

    foodEatenByCat += catFood
    foodEatenByDog += dogFood

}
console.log(`Total eaten biscuits: ${Math.round(totalEatenBiscuits)}gr.`)
let foodEaten = foodEatenByCat + foodEatenByDog
let percentTotalFood = foodEaten/totalFoodQuantity * 100
console.log(`${percentTotalFood.toFixed(2)}% of the food has been eaten.`)
let percentDogFood = foodEatenByDog /foodEaten * 100
console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`)
let percentCatFood = foodEatenByCat /foodEaten * 100
console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`)


}

foodForPets([3,
1000,
300,
20,
100,
30,
110,
40])
