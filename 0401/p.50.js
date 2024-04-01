//物件拆解資料
const person = {
    name: "Eric",
    age: 50,
    boss: {
        name: "James", age: 40,
    }
};

console.log(Object.keys(person));
console.log(Object.values(person));

//物件判斷屬性是否存在
const person2 = {
    name: "Eric",
    age: 50,
    boss: {
        name: "James", age: 40,
    }
};

console.log(person2.hasOwnProperty("name"));

//物件，避免資修改
const person3 = {
    name: "Eric",
    age: 50,
    boss: {
        name: "James", age: 40,
    }
};

Object.freeze(person3);
person3.name("new");
console.log(Object.keys(person3));
console.log(Object.values(person3));

