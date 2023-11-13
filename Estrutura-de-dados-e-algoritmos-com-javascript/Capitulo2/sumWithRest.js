function sum(...args) {
    if (args.length === 0 || args[0] === undefined) return 0

    let sum = 0;
    for (const num of args) sum += num;
    return sum
}

console.log('testando sum com rest...');

console.log('PRIMEIRO');
console.log(sum());

console.log('SEGUNDO');
console.log(sum(1, 2, 3));

console.log('TERCEIRO');
console.log(sum(20, 30, 90));