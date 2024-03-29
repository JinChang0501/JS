// 有⼀個包含產品資料的陣列，撰寫⼀隻程式能達到：
// 找出第⼀件價格超過300的產品，並印出該產品的所有屬
// 性，不能指定 .name 與 .price。
// 如果找的過程遇到沒有價格的產品，則跳過，不比對。

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