function concat(...rest) {
    const newArray = [];
    let newArrayIndex = 0;

    for (let i = 0; i < rest.length; i++) {
        for (let j = 0; j < rest[i].length; j++) {
            newArray[newArrayIndex] = rest[i][j];
            newArrayIndex++;
        }
    }
    return newArray;
}

const arr1 = [0, 2, 5];
const arr2 = [90, 56, 213, 68];
const arr3 = [9, 599];

const concatedArray = concat(arr1, arr2);
const concatedArray2 = concat(arr3, arr2, arr1);

console.log(1);
console.log(concatedArray);
console.log(2);
console.log(concatedArray2);