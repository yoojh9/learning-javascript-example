const arr = [1,17,16,5,4,16,10,3,49];
// 특정 인덱스보다 뒤에 있고 제곱수를 찾아야 할 때
console.log(arr.find((x,i) => i>2 && Number.isInteger(Math.sqrt(x))));	// 4