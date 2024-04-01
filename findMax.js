function findMax(...numbers) {
    let result = 0;
    for (number of numbers) {
        if (number > result) {
            result = number;
        }
    }
    return result;
}
console.log(findMax(1, 2, 5, 7));
console.log(findMax(1, 2, 5));
console.log(findMax(1, 2, 5, 7, 3, 10));

//方法2
let number = [1, 2, 3, 4, 5];
function findMax(...number) {
    return Math.max(...number)
}
console.log(findMax(...number));