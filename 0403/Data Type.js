let data = 123;
console.log(typeof data);


let data2 = "123";
console.log(typeof data2);

let data2 = [1, 2, 3];
console.log(typeof data2);

let data2 = 1;

console.log(typeof data2 !== null && typeof data2 === "object" && !Array.isArray(data2));

console.log(typeof data2);


let data3 = 123;
function checkdata3(data) {
    let result = "";
    typeof data !== null && typeof data === "object" && !Array.isArray(data);

}
console.log(checkdata3(data3));



let data3 = null;
function checkdata3(data) {
    // 檢查data是否為對象並且不是數組
    if (typeof data === "object" && !Array.isArray(data) && data !== null) {
        return "Object, not an array";
    } else {
        return "Not an object or is an array";
    }
}

console.log(checkdata3(data3));