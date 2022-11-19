function foodDelivery(input) {
let chickenMenu = Number(input[0]) * 10.35;
let fishMenu = Number(input[1]) * 12.40;
let vegMenu = Number(input[2]) * 8.15;
let sum = chickenMenu + fishMenu + vegMenu;
console.log(sum + (sum * 0.20) + 2.50)
}

foodDelivery(["2" , "4" , "3"])