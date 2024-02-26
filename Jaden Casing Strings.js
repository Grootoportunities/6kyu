function capitalizing(str) {

    return str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
}

console.log(capitalizing("How can mirrors be real if our eyes aren't real"))

