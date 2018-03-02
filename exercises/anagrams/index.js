// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const lower = (str) => {
    return str.toLowerCase()
}

const alphaNumeric = (str) => {
    return str.replace(/[^\w]/g, '')
}

const mapper = (str) => {
    let obj = {}
    for(char of str) {
        obj[char] ? obj[char] += 1 : obj[char] = 1
    }
    return obj
}

const compare = (objA, objB) => {
    for(let el in objA){
        if(objA[el] !==objB[el]) return false
    }
    return true
}

const _pipe = (curr, acc) => (...args) => {
    return acc(curr(...args))
}

const pipe = (...fns) => {
    return fns.reduce(_pipe)
}

function anagrams(stringA, stringB) {
    let formatter = pipe(alphaNumeric, lower, mapper)
    let mapA = formatter(stringA)
    let mapB = formatter(stringB)
    if(compare(mapA, mapB) && compare(mapB, mapA)) return true
    return false
}

module.exports = anagrams;
