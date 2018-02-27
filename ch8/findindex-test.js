const arr = [{id: 5, name: "Judith"}, {id:7, name: "Francis"}];

console.log(arr.findIndex(o=>o.id===5));     // 0
console.log(arr.findIndex(o=>o.name=="Francis"));    // 1
console.log(arr.findIndex(o=>o.id===3));     // -1

// 요소 자체를 원할 때
console.log(arr.find(o=>o.id===5));     // 객체 {id:5, name:"Judith"}
console.log(arr.find(o=>o.id===2));     // undefined