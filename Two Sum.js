function twoSum(numbers, target) {
    let indexArray = []

    for (let i = 0; i < numbers.length; i++) {

        if (indexArray.length !== 0) break
        else {

            for (let j = 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {
                    indexArray.push(i)
                    indexArray.push(j)
                    break

                    // return [i, j]
                }
            }
        }
    }

    return indexArray
}

console.log(twoSum([2, 2, 3], 4))