function worldSwimmingRecord (input) {
    let worldRecord = Number(input[0]);
    let distanceInMetres = Number(input[1]);
    let timeInSecs = Number(input[2]);
    let waterResistance = (Math.floor(distanceInMetres / 15) * 12.5)
    let ivansTime = distanceInMetres * timeInSecs + waterResistance

    if (worldRecord > ivansTime) {
        console.log (`Yes, he succeeded! The new world record is ${(ivansTime).toFixed(2)} seconds.`)
    } else if (ivansTime >= worldRecord) {
        console.log(`No, he failed! He was ${(ivansTime - worldRecord).toFixed(2)} seconds slower.`)
    }

}

worldSwimmingRecord(["10464","1500","20"])
