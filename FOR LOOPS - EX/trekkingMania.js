function trekkingMania(input) {
    let numberGroups = Number(input[0]);
    let inputL = input.length;
    let totalPeople = 0
    let totalMusala = 0;
    let totalMontBlanc = 0;
    let totalKilimanjaro = 0;
    let totalK2 = 0;
    let totalEverest = 0;

    for(i = 1; i < inputL; i++){
        totalPeople += Number(input[i]);
        if (input[i] <= 5){
            totalMusala += Number(input[i]) 
        } else if (input[i] >= 6 && input[i] <= 12){
            totalMontBlanc += Number(input[i])
        } else if (input[i] >= 13 && input[i] <= 25){
            totalKilimanjaro += Number(input[i])
        } else if (input[i] >= 26 && input[i] <= 40){
            totalK2 += Number(input[i])
        } else if (input[i] >= 41){
            totalEverest += Number(input[i])
        }
    }
    console.log((totalMusala/totalPeople*100).toFixed(2)+"%")
    console.log((totalMontBlanc/totalPeople*100).toFixed(2)+"%")
    console.log((totalKilimanjaro/totalPeople*100).toFixed(2)+"%")
    console.log((totalK2/totalPeople*100).toFixed(2)+"%")
    console.log((totalEverest/totalPeople*100).toFixed(2)+"%")
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
