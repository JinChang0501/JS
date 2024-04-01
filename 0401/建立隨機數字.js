//建立隨機數字
console.log(Math.ceil(1.54));
console.log(Math.floor(1.54));

// 16~30
console.log(Math.random() * 14 + 16);


let ary = [-5, 2, -8, 12, 15];
let max = Math.max(...ary);
let min = Math.min(...ary);

let absNumbers = [];
for (let number of numbers) {
    absNumbers.push(Math.abs(numbers));
}
let maxAbs = Math.max(...absNumbers);

let powNumber = Math.sqrt(Math.pow(2, 6))
let ceil = Math.ceil(-5.7);
let floor = Math.floor(12.4)


console.log(max);
console.log(min);
console.log(powNumber);

console.log(max + min + maxAbs + powNumber + ceil + floor)