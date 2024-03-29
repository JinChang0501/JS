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