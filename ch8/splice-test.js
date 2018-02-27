const arr = [1,5,7];
arr.splice(1,0,2,3,4)
console.log(arr);     // [1,2,3,4,5,7]
arr.splice(5,0,6)
console.log(arr);     // [1,2,3,4,5,6,7]
arr.splice(1,2)
console.log(arr);     // [1,4,5,6,7]
arr.splice(2,1,'a','b')
console.log(arr);     // [1,4,'a','b',6,7]