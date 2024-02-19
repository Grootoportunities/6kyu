// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//
//     For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
//     [10, 343445353, 3453445, 3453545353453] should return 3453455.
//

// function sumTwoSmallestNumbers(numbers) {
//
//     let firstLowest = numbers[0]
//     let secondLowest = numbers[1]
//
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < firstLowest) firstLowest = numbers[i]
//     }
//
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === firstLowest) continue
//
//         else if (numbers[i] < secondLowest) secondLowest = numbers[i]
//     }
//
//     return firstLowest + secondLowest
// }

function sumTwoSmallestNumbers(numbers) {

    const firstLowest =  Math.min.apply(null, numbers)

    numbers.splice(numbers.indexOf(firstLowest), 1)

    const secondLowest = Math.min.apply(null, numbers)

    return firstLowest + secondLowest
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
sumTwoSmallestNumbers([15, 28, 4, 2, 43]);
sumTwoSmallestNumbers([3, 87, 45, 12, 7]);
sumTwoSmallestNumbers([23, 71, 33, 82, 1]);
sumTwoSmallestNumbers([52, 76, 14, 12, 4]);

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))