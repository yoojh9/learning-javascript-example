var arr = [4,15,377,395,400,1024,3000];

var arr2 = arr.filter(a=>a%5==0).map(a=>a*2);

// arr2와 arr3은 같은 기능
var arr3 = arr.filter(function(a){
  return a % 5 ==0
}).map(function(a){
  return a * 2;
})



console.log(arr2);
console.log(arr3);