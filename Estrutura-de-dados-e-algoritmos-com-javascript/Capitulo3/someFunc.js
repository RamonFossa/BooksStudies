function some(array, callback) {

    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        if (callback(array[i])) {
            return true;
        }
    }

    return false;
}


const numbers = [0, 2, 4, 6, 1];

const someOdd = some(numbers, num => num % 2 !== 0);

console.log(someOdd);