let person = {
    name: '野原新之助',
    age: 5,
    hobbies: ['drawing', 'coding', 'reading', 'swimming', 'skating', 'running'],

    isAdult: function () {
        let result = this.age > 18 ? 'True' : 'False';
        console.log(result);
    },
    getInfo: function () {
        console.log('你好，我是' + this.name + '，今年' + this.age + '歲')
    }

}
// for (let key in person) {
//     console.log(`${key}:${person[key]}`);
// }

// for (let key in person) {
//     if (key === 'name' || key === 'age' || key === 'hobbies') {
//         console.log(`${key}:${person[key]}`);
//     }
// }

for (let key in person) {
    if (key === 'name' || key === 'age') {
        console.log(`${key}:${person[key]}`);
    }
    // else if (key === 'hobbies') {
    //     console.log(`${key}:${person[key]}`);
    // }
}
for (let hobby of person.hobbies) {
    if (hobby === 'coding') {
        continue;
    }
    console.log(hobby);
}

person.isAdult();
person.getInfo();
// console.log(fruitsSeller.countFruits('Apple'))