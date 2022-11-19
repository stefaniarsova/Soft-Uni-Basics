function graduation(input){
    let index = 0;
    let name = input[index];
    index++

    let grade = 1;
    let badGrade = 0;
    let sumGrades = 0;
    let isExcluded = false;
    
    while(grade < 12){
        let annualGrade = Number(input[index]);
        index++

        if(annualGrade < 4){
            badGrade++;
            if (badGrade >= 2){
                isExcluded = true;
                console.log(`${name} has been excluded at ${grade.toFixed(2)} grade"`)
                ; break;
            }
        ;continue;
        }
        sumGrades += annualGrade
        grade++
    }
    let averageGrades = sumGrades/12
    if (!isExcluded){
        console.log(`${name} graduated. Average grade: ${averageGrades.toFixed(2)}`)
    }
console.log(averageGrades)
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

