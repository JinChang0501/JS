let person = {
    name: "Bob",
    age: 99,
    city: "Taipei",
}
for (let key in person) {
    console.log(`${key}:${person[key]}`)
}
