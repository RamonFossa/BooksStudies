function indexOf(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) return i
    }
    return -1
}

const arr = [10, 3, 6, 2, 7, 3, 6, 2, 2, 1, 6, 342];

const index = indexOf(arr, (val) => val === 2);

console.log(index);