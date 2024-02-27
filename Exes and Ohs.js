// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
//     Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {

    const symbols = str.split("").map(s => s.toLowerCase())

    if(!symbols.find(el => el === 'x' || el === 'o')) return true

    return symbols.filter(s => s === "x").length === symbols.filter(s => s === "o").length
}

console.log(XO('zo'))