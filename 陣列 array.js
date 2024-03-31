let dramas = ['魷魚遊戲', '黑暗榮耀', '怪奇物語']
dramas.push("熊大餐廳");
dramas.unshift("UN餐廳");
console.log(dramas[0]);


//建立一個學生名單陣列: 'Alice', 'Bob',並透過程式碼進行以下任務:
// 1. 新增 "Charlie" 到名單末端
// 2. 新增 "David" 到名單開頭
// 3. 從名單中移除第二個位置的學生
// 4. 印出名單中的學生總數

let student = ['Alice', 'Bob'];
student.push("Charlie");
student.unshift("David");
student.splice(1, 1)
console.log(student)
console.log(student.length);

// 假設有一個陣列 [ 3, 10, 13 ]
// 請利用迴圈、控制和陣列,去計算從 1 + 2 + 3 + ...n 的總和為多少 ( n 為 3, 10, 13 )。
// 例: 給定陣列 [2, 5] ,利用迴圈,依序計算 1 + 2 = 3 和 1 + 2 + 3 + 4 + 5 = 15
// 依序印出兩個值 3 和 15

let ary = [3, 10, 13];
for (let index = 0; index < ary.length; index++) {
    let n = ary[index];
    let sum = 0;
    for (let start = 0; start <= n; start++) {

        sum = sum + start
    }
    console.log(sum);
}
