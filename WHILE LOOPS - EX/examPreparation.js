function examPreparation(input){
    let sumBadGrades = Number(input[0]);
    let index = 1;
    let command = input[index];
    let numberOfProblems = 0;
    let sumGrades = 0;
    let numberBadGrades = 0;

    while(command !== "Enough"){
    numberOfProblems++
    index++
    let currentGrade = Number(input[index]);
    sumGrades += currentGrade
    if(currentGrade <= 4){
        numberBadGrades++
    }

    if(numberBadGrades >= sumBadGrades){
        console.log(`You need a break, ${numberBadGrades} poor grades.`);
        break;
    }
    index++
    command = input[index]

    }

   let avgScore = sumGrades/numberOfProblems
   if(command === "Enough"){
    console.log(`Average score: ${avgScore.toFixed(2)}`)
    console.log(`Number of problems: ${numberOfProblems}`)
    index -= 2
    command = input[index]
    console.log(`Last problem: ${command}`)
    
   }

}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
