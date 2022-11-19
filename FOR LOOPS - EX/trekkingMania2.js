function trekkingMania2(input){
    let groupCount = Number(input[0]);
    let inputL = input.length
    let totalPeople = 0;
    let totalPeopleMusala = 0;
    let totalMusala;
    let totalPeopleMontBlanc =0;
    let totalMontBlanc;
    let totalPeopleKilimanjaro =0;
    let totalKilimanjaro;
    let totalPeopleK2= 0;
    let totalK2;
    let totalPeopleEverest =0;
    let totalEverest;
 
    for(let i = 1; i< inputL;i++){
 
        totalPeople+=Number(input[i]);
     if(input[i]<=5){
         totalPeopleMusala+=Number(input[i]);
     }else if(input[i]>=6 && input[i]<=12){
         totalPeopleMontBlanc+=Number(input[i]);
     }else if(input[i]>=13 && input[i]<=25){
         totalPeopleKilimanjaro+=Number(input[i])
     }else if(input[i]>=26 && input[i]<=40){
         totalPeopleK2+=Number(input[i]);
     }else if(input[i]>=41){
         totalPeopleEverest+=Number(input[i])
     }
 
 
 
 
    }
    // console.log(totalPeople)
    totalMusala = totalPeopleMusala/totalPeople*100;
    console.log(`${totalMusala.toFixed(2)}%`)
    totalMontBlanc = totalPeopleMontBlanc/totalPeople*100;
    console.log(`${totalMontBlanc.toFixed(2)}%`);
    totalKilimanjaro = totalPeopleKilimanjaro/totalPeople*100;
    console.log(`${totalKilimanjaro.toFixed(2)}%`);
    totalK2=totalPeopleK2/totalPeople*100;
    console.log(`${totalK2.toFixed(2)}%`);
    totalEverest = totalPeopleEverest/totalPeople*100;
    console.log(`${totalEverest.toFixed(2)}%`);
}

trekkingMania2(["10",
"10",
"5",
"1",
"100",
"12","26",
"17",
"37",
"40",
"78"])