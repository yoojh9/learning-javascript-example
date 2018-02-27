var arr = [9,2,8,5,7];
var count = 0;

var sum = arr.reduce(function(pre,val){
  count++;
  return pre+val;
})

console.log(count);	// 콜백함수 4번 호출
console.log(sum);