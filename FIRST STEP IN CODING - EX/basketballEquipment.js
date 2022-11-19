function basketballEquipment(input) {
    let price = Number(input[0]);
    let shoes = price - (price * 0.40);
    let clothes = shoes - (shoes * 0.20);
    let ball = clothes * 1/4;
    let accessories = ball * 1/5;

    console.log(price + shoes + clothes + ball + accessories)
}

basketballEquipment([365])
