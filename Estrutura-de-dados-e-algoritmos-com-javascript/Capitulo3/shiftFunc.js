function shift(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1];
    }
}

function rightShift(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] !== undefined) newArray[i] = array[i + 1];
    }
    return newArray;
}

let arr = [3, 5, 2, 67, 200];

console.log(arr);
const newArr = rightShift(arr);
console.log(newArr);