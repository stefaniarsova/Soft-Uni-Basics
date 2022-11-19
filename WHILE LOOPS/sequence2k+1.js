function sequence2kPlus1 (input){
    let k = 1;
    let n = Number(input[0]);

    while(k <= n){
        console.log(k)
        k = k * 2 + 1
    }
} 
sequence2kPlus1(["31"])