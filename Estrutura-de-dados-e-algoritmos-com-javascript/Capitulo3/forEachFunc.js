function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();

forEach(arr, (num, index) => {
    console.log(num, index);
});
