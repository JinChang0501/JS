function a(id, name) {
    return id + name;
}

console.log(a(50, "jin"))



let a = "Good";
console.log(a);
function foo() {
    console.log(a);
    let b = "bad";
    return b;
}
foo();
// console.log()
// console.log(b);


// 請將前面的陣列最後的小試身手,包裝成函式,並命名該功能為:
// countSum(),並且可以成功被執行

// let ary = [3, 10, 13];
// for (let index = 0; index < ary.length; index++) {
//     let n = ary[index];
//     let sum = 0;
//     for (let start = 0; start <= n; start++) {

//         sum = sum + start
//     }
//     console.log(sum);
// }

function countSum(ary) {

    for (let index = 0; index < ary.length; index++) {
        let n = ary[index];
        let sum = 0;
        for (let start = 0; start <= n; start++) {
            sum = sum + start
        }
        console.log(sum);
    }
}

countSum([3, 10, 13]);

// function countSum(numbers){
//     for(let index = 0; index < numbers.length; index ++){
//        let n = numbers[index];
//        let sum = 0;
//        for(let counter = 1; counter <= n; counter ++){
//           sum = sum + counter;
//        }
//        console.log(sum);
//     }
//   }

//   countSum([3, 10, 13]);


// 請試著寫出一個函式 countPapaya(),該函式可以計算陣列中的所有的

// 木瓜,並回傳數字

// 例如,建立一個陣列 [ 'Orange', 'Apple', 'Papaya', 'Kiwi', 'Papaya' ],
// 並作為傳入 countPapaya 的參數。

// 函式執行完畢後,函式要回傳 2,並列印出來

function countPapaya(ary) {
    let sum = 0;
    for (let index = 0; index < ary.length; index++) {
        let n = ary[index];
        if (n === "Papaya") {
            sum++;
        }
        // console.log(sum);
    }
    return sum;
}
let result = countPapaya(['Orange', 'Apple', 'Papaya', 'Kiwi', 'Papaya']);
console.log(result);