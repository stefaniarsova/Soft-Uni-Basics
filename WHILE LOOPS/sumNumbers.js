function sumNumbers(input){
    let index = 0;
    let N1 = Number(input[index]);
    index++

    let sum = 0;
    let N2 = Number(input[index]);
    index++
    sum += N2

    while(sum < N1){
        N2 = Number(input[index]);
        index++
        sum += N2
    }
    console.log(sum)
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

