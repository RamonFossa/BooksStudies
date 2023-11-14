function pop(array) {
    array[array.length - 1] = undefined;

    const newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] !== undefined) newArray[i] = array[i];
    }
    return newArray;
}

let arr = [0, 1, 2, 3];

console.log('init');
console.log(arr);
arr = pop(arr);
console.log(arr);