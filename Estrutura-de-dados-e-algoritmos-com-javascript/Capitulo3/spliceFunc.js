function splice(array, index, lengthToRemove, ...rest) {
    if (index < 0) return negativeIndexOnSplice(array, index);

    const newArray = [];

    for (let i = 0; i < index; i++) {
        newArray[i] = array[i];
    }

    for (let i = 0; i < rest.length; i++) {
        newArray[i + index] = rest[i];
    }

    const initialIndex = (index + lengthToRemove);

    for (let i = initialIndex; i < array.length; i++) {
        const indexToNewArray = index + rest.length + (i - initialIndex);
        newArray[indexToNewArray] = array[i];
    }

    return newArray
}

function negativeIndexOnSplice(array, index) {
    const newArray = [];
    const initialIndex = array.length + index;
    for (let i = initialIndex; i < array.length; i++) {
        // console.log(array[i])
        newArray[i - initialIndex] = array[i];
    }
    return newArray
}


console.log('SPLICE:');

const myArray = [2, 3, 41, 5, 1, 6, 7, 4, 90, 438, 32];
console.log(myArray);

const newArray = splice("Oi meu nome é ramon", 2);

console.log(newArray)