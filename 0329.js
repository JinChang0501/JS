// let item = 'coffee';
// let price = 40;
// let order = 
// `
// 你的訂單:
// 項目:${item}
// 價格:${price}
// `;

// console.log(order);

// let string = "123.5";
// console.log(string);
// console.log(parseInt(string));
// console.log(parseFloat(string));

// let number = 456;
// console.log(number.toString());

// let booleanString= "Yes";
// console.log(Boolean(booleanString));

//條件運算符
// let result = false? "yes" : "no";
// console.log(result);


// Day 2 - 小試身手1
// let a = "20";
// let b = "50";
// let sum = parseInt(a) + parseInt(b);

// console.log(`嗨,您的價格${sum >= 50 ? "" : "沒有"}超過限制`);

// //for ... in
// let person = {
//     name: "Bob",
//     age: 99,
//     city: "Taipei",
// }
// for (let key in person) {
//     console.log(`${key}:${person[key]}`)
// }



//for ... of
// let fruits=["apple", "grape","banana"];
// for(let fruit of fruits){
//     console.log(fruit);
// }


//小試身手
let products = [
    { name: "蘋果", price: 100 },
    { name: "水梨", price: null },
    { name: "鳳梨", price: 200 },
    { name: "橘子", price: 300 },
    { name: "葡萄", price: 400 },
];
for (let product of products) {
    // console.log(product);
    if (product.price === null) {
        continue;
    }
    if (product.price > 300) {
        for (let key in product) {
            console.log(`${key}:${product[key]}`)
        }
        break;
    }
}



function printNumbers(...numbers) {
    console.log(numbers)
}

printNumbers(1, 2, 3, 4, 5)


function printNumbers(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

printNumbers(...[1, 2, 3]);




const greet = function (price, discount) {
    console.log(`價格是${price} ${discount}!`);
}
greet(100, 0.2);


greet("John");
function greet(name) {
    console.log(`Hello,${name}!`);
}
greet("Jim");

const greet = name => console.log(`Hello,${name}!`);
greet("Jack");





const greet = function (price, discount = "0.2") {
    return price * (1 - discount)
}
console.log(getRealPrice(100));
console.log(getRealPrice(100, 0.3));












