var arr = [9,2,8,5,7];
var count = 0;

var sum = arr.reduce(function(pre, value){
  count++;
  return pre+value;
},0)

console.log(count);	// 콜백함수 5번 호출
console.log(sum);