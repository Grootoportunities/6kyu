// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.

function sumMix(x) {
    let sum = 0

    x.forEach(el => sum += Number(el))

    return sum
}

console.log(sumMix([1, '2', 3]))