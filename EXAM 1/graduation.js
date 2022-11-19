function graduation (input){
   let index = 0
   let name = input[index]
   index++

   i = 1
   let badGradeCounter=0
   let sumGrade =0 
   let isExcluded = false

   while(i<= 12){
       let tempGrade = Number(input[index])
       index++
       
       if(tempGrade < 4.00){
       badGradeCounter++
       if(badGradeCounter >= 2){
        isExcluded = true
        console.log(`${name} has been excluded at ${i} grade`)
           ;break ;
       }
       ;continue ;
       }

       i++
       sumGrade += tempGrade
                  
   }

   let averageGrade = (sumGrade/ 12).toFixed(2)
   if(!isExcluded){
       console.log(`${name} graduated. Average grade: ${averageGrade}`)
   }
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


