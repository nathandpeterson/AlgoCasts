// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const stringNum = (num) => {
    return num.toString().split('').reverse().join('')
}

function reverseInt(n) {
    let string = stringNum(n)
    return parseInt(string) * Math.sign(n)
}

module.exports = reverseInt;
