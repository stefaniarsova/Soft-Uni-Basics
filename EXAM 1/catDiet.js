function catDiet (input){

    let percentFats = Number(input[0]) / 100
    let percentProteins = Number(input[1]) /100
    let percentCarbs = Number(input[2]) / 100
    let totalCaloriesCount = Number(input[3])
    let percentWater = Number(input[4]) 

    let gramsFats = Math.fround((totalCaloriesCount*percentFats)/9)
    let gramsProtein = Math.fround((totalCaloriesCount*percentProteins)/4)
    let gramsCarbs = Math.fround((totalCaloriesCount*percentCarbs)/4)
    let foodWeight = Math.fround(gramsFats+gramsProtein+gramsCarbs)
    let caloriesPerGram = Math.fround(totalCaloriesCount/foodWeight)
    let caloriesNoWater =Math.fround(caloriesPerGram * ((100 - percentWater)/100))
    console.log(caloriesNoWater.toFixed(4))
    
    }
catDiet(["40",
"40",
"20",
"3000",
"40"])


