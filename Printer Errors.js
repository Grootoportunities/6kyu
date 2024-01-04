function printerError(s) {

    let counter = 0

    s.split("").map(el => /[n-z]/.test(el) ? counter++ : el)

    return `${counter}/${s.length}`
}

console.log(printerError("asdanszysd"))