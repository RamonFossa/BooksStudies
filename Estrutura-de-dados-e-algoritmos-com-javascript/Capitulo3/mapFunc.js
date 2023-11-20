function map(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i);
    }
    return newArray
}

const arr = ['ram', 'Oi mano', 'BeLeZa meu', 'Parsasdfs'].reverse();

const newArray = map(arr, value => String(value).toLowerCase());

console.log(newArray)