function petShop(input) {
let dogs = Number(input[0]);
let cats = Number(input[1]);
let dogFood = dogs * 2.50;
let catFood = cats * 4;
let sum = dogFood + catFood;
console.log(`${sum} lv.`);
}
petShop(["5", "4"])