// Create a function which answers the question "Are you playing banjo?".
//     If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
//     The function takes a name as its only argument, and returns one of the following strings:
//
//     name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    // let chars = name.split("")
    //
    // if (chars[0] === /["r"]i/)
    //

    if(name[0] === 'r' || name[0] === "R") return name + " plays banjo"

    else return name + " does not play banjo"
}

console.log(areYouPlayingBanjo("bon"))

//best practice from codewars

// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }