function trainTheTrainers (input){
    let juryNumber = Number(input[0]);
    let index = 1;
    let command = input[index];
    let gradeCounter = 0;
    let sumGrade = 0;

    while(command !== "Finish"){
        gradeCounter++
        let presentation = command
        let tempSumGrade = 0;

        for(let i = 0; i < juryNumber; i++){
           index ++
           let grade = Number(input[index]);
           tempSumGrade += grade
        }
        let tempAvgGrade = tempSumGrade/juryNumber;
        sumGrade+=tempAvgGrade;
        console.log(`${presentation} - ${tempAvgGrade.toFixed(2)}.`)

        index++
        command = input[index]
    }
    let avgGrade = sumGrade / gradeCounter
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)

}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])

