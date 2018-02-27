var score = [10, 2, 25, 1, 5];

score.sort();
console.log(score);	// [1,10,2,25,5]

// 오름차순
score.sort(function(a,b){
  return a-b;
})
console.log(score)