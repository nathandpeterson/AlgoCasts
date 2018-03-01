// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size){
    let result = []
    let index = 0
    while (index < array.length){
        result.push(array.slice(index, index + size))
        index += size
    }
    return result
}

function chunk2(array, size) {
    let result = []
    for (let element of array){
        const last = result[result.length-1]
        if (!last || last.length === size) {
            result.push([element])
        } else {
            last.push(element)
        }
    }
    return result
}

function chunk3(array, size) {
    let result = []
    let counter = 0
    for(let i = 0; i < array.length; i++){
       if(counter === 0){
            result.push([array[i]])
            counter++
       } else if (counter < size){
            let targetIndex = result.length - 1
            result[targetIndex].push(array[i])
            counter++
       } else if (counter === size){
            result.push([array[i]])
            counter = 1
       }
    }
    return result
}

module.exports = chunk;
