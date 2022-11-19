function repainting(input) {
    let naylon = (Number(input[0]) + 2) * 1.50;
    let paint = Number(input[1]);
    let paintTotal = (paint + paint * 0.10) * 14.50;
    let thinner = Number(input[2] * 5);
    let sum = naylon + paintTotal + thinner + 0.40;
    let work = Number(input[3]) * (sum * 0.30);

    console.log(sum + work)
}

repainting(["10" , "11" , "4" , "8"])