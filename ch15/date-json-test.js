const before = {d: new Date()};

console.log(before.d instanceof Date) // true
const json = JSON.stringify(before);
const after = JSON.parse(json);

console.log(after); // { d: '2018-03-07T05:50:08.480Z' }
console.log(after.d instanceof Date); // false
console.log(typeof after.d); // string