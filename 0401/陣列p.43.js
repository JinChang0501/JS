let elements = [1, 2, 3];

console.log(elements.indexOf(2));
console.log(elements.includes(2));
console.log(elements.concat([4, 5, 6]));
console.log(elements.join(","));
console.log(elements.reverse());





let invitList = ["John", "Dave", "Macy"];
let newInvitList = ["Judy", "Tom"];
let target = "Dave";
newInvitList = invitList.concat(newInvitList);

console.log(newInvitList.join(","));
if (newInvitList.includes(target) === true) {
    console.log(`${target}在邀請名單中`);
} else {
    console.log(`${target}不在邀請名單中`);
}

console.log(`${target}+ 在邀請名單中的索引值是` + newInvitList.indexOf(target));
console.log(newInvitList.reverse());

