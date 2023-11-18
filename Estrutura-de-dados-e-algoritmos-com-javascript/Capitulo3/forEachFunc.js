function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

forEach(arr, (num) => {
    console.log('ALALALA');
    console.log(num);
});
