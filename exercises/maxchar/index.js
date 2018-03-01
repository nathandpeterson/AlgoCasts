// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let arr = str.split('')
    let frequencies = {}
    for(let char of arr) {        
        frequencies[char] ? frequencies[char] += 1 : frequencies[char] = 1
    }
    let values = Object.values(frequencies).sort( (a,b) => b-a)
    for(let val in frequencies){
        if(frequencies[val] === values[0]) return val   
    }
}

module.exports = maxChar;
