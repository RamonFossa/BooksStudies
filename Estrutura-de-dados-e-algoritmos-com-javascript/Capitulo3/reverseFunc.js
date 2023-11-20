function reverse(array) {
    const newArray = [];
    let newIndex = 0;

    for (let i = array.length - 1; i >= 0; i--) {
        newArray[newIndex] = array[i];
        newIndex++;
    }
    return newArray
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

const newArr = reverse(arr);
console.log(newArr);