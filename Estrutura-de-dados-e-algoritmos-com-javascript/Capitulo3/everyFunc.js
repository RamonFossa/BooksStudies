function every(array, callback) {

    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        if (!callback(array[i])) {
            return false;
        }
    }

    return true;
}

const numbers = [0, 2, 3, 4, 6, 11];

const justEven = every(numbers, num => num % 2 === 0);

console.log(justEven);