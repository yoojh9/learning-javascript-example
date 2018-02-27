const arr = [5,12,8,130,44];

let found = arr.find(a=> a>10);
let found2 = arr.find(function(a){
  return a > 10;
})
console.log(found);	// 12
console.log(found2); // 12