function push(array, ...rest) {
    let newArray = [...array];
    for (const element of rest) newArray[newArray.length] = element;
    return newArray;
}

const arr = [0, 1, 2];

console.log(arr);
const myNewArr = push(arr, 2, 3, 4);
console.log(myNewArr);