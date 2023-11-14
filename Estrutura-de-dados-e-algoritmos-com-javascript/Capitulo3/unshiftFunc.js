function unShift(array, newValue) {
    for (let i = array.length - 1; i >= 0; i--) {
        array[i + 1] = array[i];
    }
    array[0] = newValue;
}

const arr = [0, 1, 2, 3];

console.log('init');
console.log(arr);
unShift(arr, -50);
console.log(arr);