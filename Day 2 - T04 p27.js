// 小試身手4
// 1. 標準方式
// function getRealPrice(price, discount = 0.2){
//   return price * (1 - discount);
// }

// 2. 函式表達式
// const getRealPrice = function(price, discount = 0.2){
//   return price * (1 - discount);
// }

// 3. 箭頭函式
const getRealPrice = (price, discount = 0.2) => price * (1 - discount);

console.log(getRealPrice(100));
console.log(getRealPrice(100, 0.3));