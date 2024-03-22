// Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const solution = string => {
    const sentence = string.split(/([A-Z])/g)

    let result = [sentence[0]]

    for (let i = 1; i < sentence.length; i += 2) {
        const word = sentence[i] + sentence[i + 1]

        result.push(word)
    }

    return result.join(" ")
}

console.log(solution("camelCasingTest"))