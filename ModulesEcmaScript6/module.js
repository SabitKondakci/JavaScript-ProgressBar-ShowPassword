import typing ,* as info from "./info.js"

console.log(typing("typing"));
console.log(info.PI);
console.log(info.multiply(6,2,3));
console.log(info.sum(1,2,3));

var item = new info.Item("Glove","22$");
console.log(item.itemName);
console.log(item.itemPrice);
