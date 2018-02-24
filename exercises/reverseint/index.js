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
    if (n === 0) return 0
    if (n > 0) {
        let string = stringNum(n)
        return parseInt(string)
        }
    if (n < 0) {
        let string = stringNum(n)
        return -parseInt(string)
     }
    }

module.exports = reverseInt;
