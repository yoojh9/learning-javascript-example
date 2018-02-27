const arr = [1,2,3];

arr.fill(4); 	
console.log(arr);   // [4,4,4]
arr.fill(3,1);
console.log(arr);   // [4,3,3]
arr.fill(2,1,2);	
console.log(arr)    // [4,2,3]
arr.fill(5,1,1);
console.log(arr);   // [4,2,3]
arr.fill(7,-3,-1);
console.log(arr);   // [7,7,3]