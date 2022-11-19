function fishTank(input) {
    let capacity = (Number(input[0]) * Number(input[1]) * Number(input[2])) / 1000
    console.log(capacity - capacity * 0.17)
}

fishTank(["85" , "75" , "47" , "17"])