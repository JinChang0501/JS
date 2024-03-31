let subject = "english";
switch (subject) {
    case "math":
        console.log("理科相關");
        break;
    case "chinese":
    case "english":
        console.log("文科相關")
        break;
    default:
        console.log("NA")
}

// 題目
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