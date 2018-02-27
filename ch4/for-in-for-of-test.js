Object.prototype.ObjCustom = function(){}
Array.prototype.arrCustom = function(){}

let iterable = [3,5,7,9];
iterable.foo = "hello"

console.log("---for...in---");
for(let i in iterable){
  console.log(i);  // 0, 1, 2, 3, foo, arrCustom, objCustom
}

console.log("---for...of---");
for(let i of iterable){
  console.log(i); // 3, 5, 7, 9
}
