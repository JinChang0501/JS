let chinese = 1000;
let math = 50;
let english = 50;

total = chinese + math + english;
avg = total / 3;

if (total > 200) {
    console.log("總和>200")
} else {
    console.log("總和<200")
}


// console.log(total, avg);


let score = 50;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("E");
}

let correctQuestion = 39;
let total = 0;

if (correctQuestion <= 10) {
    total = correctQuestion * 6
} else if (correctQuestion <= 20) {
    total = (correctQuestion - 10) * 2 + 10 * 6;
} else if (correctQuestion <= 40) {
    total = (correctQuestion - 20) * 1 + 10 * 6 + 10 * 2;
} else {
    total = 100;
}

console.log(total);


let a = 5 === "5";
console.log(a);

let WeekNO = "2";
switch (WeekNO) {
    case "1":
        console.log("禮拜一");
        break;
    case "2":
        console.log("禮拜二");
        break;
    case "3":
        console.log("禮拜三");
        break;
    case "4":
        console.log("禮拜四");
        break;
    case "5":
        console.log("禮拜五");
        break;
    case "6":
        console.log("禮拜六");
        break;
    case "7":
        console.log("禮拜日");
        break;
    default:
        console.log("NA")
}

let num = 0;
while (num < 5) {
    console.log(num);
    num++;
}

// let n = 10;
// let i = 1;
// let sum = 0;

// while (i <= n) {
//     sum = sum + i;
//     i++;
// }
// console.log(sum);

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i
}
console.log(sum);

let a = 1;
let b = 1;

