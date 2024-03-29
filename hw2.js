let person = {
    name: '野原新之助',
    age: 5,
    hobbies: ['drawing', 'coding', 'reading', 'swimming', 'skating', 'running'],
    getInfo: function () {
        console.log('你好，我是' + this.name + '，今年' + this.age + '歲')
    },
    isAdult: function () {
        let result = this.age > 18 ? "True" : "False";
        console.log(`年齡是否大於18歲? ` + result);
    }

}
person.getInfo();
person.isAdult();