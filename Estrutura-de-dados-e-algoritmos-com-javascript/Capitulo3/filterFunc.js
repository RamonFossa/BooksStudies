function filter(array, callback) {
    const filteredArray = [];
    let filteredArrayIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray[filteredArrayIndex] = array[i];
            filteredArrayIndex++;
        }
    }

    return filteredArray
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = filter(arr, (number) => number % 2 === 0);

console.log(filteredArray);