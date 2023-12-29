// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string) {

    let chars = [...string.toLowerCase()]
    let onlyLetters = chars.filter(c => /[a-z]/i.test(c))
    let uniqueLetters = new Set(onlyLetters)

    return uniqueLetters.size === 26
}


//-----------------------------

// function isPangram(string) {
//     let chars = string.split('') // разбиваю на символы
//     let onlyLetters = chars.filter(ol => !/[0-9]/.test(ol)) // убираю из массива цифры
//
//     let newPangrams = [] // создаю новый массив, в который буду записывать не повторяющиеся буквы
//
//     onlyLetters.map(l => {if (l !== newPangrams.map(n => n)) newPangrams.push(l);}) // на этом моменте запутался
//
//     return newPangrams
// }

console.log(isPangram("SADSASDASDAS213412412D"))