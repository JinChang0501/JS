let person = {
    name: '野原新之助',
    age: 5,
    hobbies: ['drawing', 'coding', 'reading', 'swimming', 'skating', 'running'],
    getInfo: function () {
        console.log(`你好，我是` + this.name + `，今年` + this.age + `歲`)
    },
    isAdult: function () {
        if (this.age > 18) {
            console.log("今年是否大於18歲:" + true)
        } else {
            console.log("今年是否大於18歲:" + false)
        }
    },
    printPerson: function () {
        for (let key in person) {

            if (typeof person[key] === "function" || "hobbies") { //person[key] > person[name] > 野原新之助
                continue;
            } else {
                console.log(`${key} : ${person[key]}`);
            }

        }
        let counter = 1; //還有問題需要修正
        for (let hobby of person["hobbies"]) {
            if (hobby === "coding") {
                continue;
            }
            else {
                counter++;
            }
            if (counter === 5) {
                break;
            }
            console.log(hobby);
        }
    }
}
person.getInfo();
person.isAdult();
person.printPerson();