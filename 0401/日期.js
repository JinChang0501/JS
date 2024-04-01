let date = new Date('2024-04-15');
year = date.getFullYear() - 1911;
month = date.getMonth();
date = date.getDate();
console.log(year + "-" + Month + "-" + date);


// let date = new Date('2024-04-15');
// function getTaiwanDate() {
//     return date.getFullYear() - 1911;
// }
// console.log();

// getLuckyNumber(),回傳隨機 20~ 46 隨機一整數。例如執行
// getLuckyNumber(), 回傳 30。
function getLuckyNumber() {
    return Math.floor(Math.random() * 26 + 20);
}

console.log(getLuckyNumber());


//me
function getLuckyNumber() {
    return Math.floor(Math.random() * 26 + 20);
}

console.log(getLuckyNumber());

//老師解答
function getTaiwanDate2(year = 0, month = 0, date = 0) {
    const dateObject = new Date();
    if (year !== 0 && month !== 0 && date !== 0) {
        dateObject.setFullYear(year);
        dateObject.setMonth(month - 1);
        dateObject.setDate(date);
    }

    const twYear = dateObject.getFullYear() - 1911;
    let twMonth = dateObject.getMonth() + 1;
    let twDate = dateObject.getDate();
    twMonth = twMonth > 9 ? twMonth : '0' + twMonth;
    twDate = twDate > 9 ? twDate : '0' + twDate;

    return `${twYear}-${twMonth}-${twDate}`
}

console.log(getTaiwanDate2(2020, 3, 20));



//老師解答
function getLuckyNumber2(min = 20, max = 46) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getLuckyNumber2(1.44, 3.89));