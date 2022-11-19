function multiplyTable (input){
    let number = input[0] + ""

    let c = Number(number[0])
    let b = Number(number[1])
    let a = Number(number[2])
    let result = " "

    for(let x = 1; x <= a ; x++){
        for(let y = 1; y <= b ; y++){
            for(let z = 1; z <= c; z++){
                result += `${x} * ${y} * ${z} = ${x * y * z}; \n ` 
                
            }
        }
    }
    console.log(result)
}

multiplyTable(["324"])