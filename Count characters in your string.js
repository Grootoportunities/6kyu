// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {

    const chars = string.split("")

    if (chars.length === 0) return {}

    let inters = {}

    chars.forEach(function (element) {
        inters[element] = 0;
    });

    chars.forEach(function (element) {
        inters[element]++;
    });

// chars.map(c => c === inters[c] ? {...inters, inters[c]: c + 1} : c )
//     const repeats = chars.map(firstIter => {chars.map(secondIter => secondIter === firstIter ? + 1 : secondIter )})
// chars.map(c => c === inters[c] ? {inters[c]: c + 1} : c )

    return inters
}

console.log(count("aba"))