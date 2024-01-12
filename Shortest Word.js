// Simple, given a string of words, return the length of the shortest word(s).
//
//     String will never be empty and you do not need to account for different data types.

function findShort(s){
    const words = s.split(" ")
    let shortestWord = words[0].length

    words.map(el => el.length < shortestWord ? shortestWord = el.length : el)

    return shortestWord
}

console.log(findShort("asfjkasf asgfagkah asrfaf qa"))


// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }
