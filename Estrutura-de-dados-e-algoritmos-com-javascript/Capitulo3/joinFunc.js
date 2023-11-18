function join(array) {
    let newText = '';
    for (let i = 0; i < array.length; i++) {
        if ((array[i] && array[i].toString()) || array[i] === 0) newText += array[i].toString();
    }
    return newText;
}

module.exports = join;

const arr = [1, 4, 5];
const arr2 = ['r', 'a', 'm', 'o', 'n'];
const arr3 = ['r', 0, 3, 6, 'n', 10];

const a = join(arr);
const b = join(arr2);
const c = join(arr3);

console.log(a);
console.log(b);
console.log(c);