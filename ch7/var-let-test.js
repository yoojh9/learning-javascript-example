// var
// setTimeout은 클로저로 상위 스코프에게 i를 알려달라고 요청한다. 

// i는 함수스코프로 모든 루프마다 단 하나의 i만을 공유한다.
// 결과적으로 i의 값은 마지막 값만 찍힌다.

(function(){
	// var i
  for(var i=0; i<=5; i++){
    setTimeout(function(){
      console.log(i);  // 6 6 6 6 6 6
    })
  }
})();


// 정상적으로 출력하고 싶다면?
// 1. 새로운 스코프를 추가하여 반복 시마다 그곳에 각각 따로 값을 지정
(function(){ 
  for(var j=0; j<=5; j++){
    (function(j){
      setTimeout(function(){
        console.log(j)
      })
    })(j)
  }
})();

// 2. ES6에서 추가된 블록 스코프를 이용한다.
// let은 블록스코프로 모든 loop마다 새로운 다른 변수를 공유한다.
// 따라서 정상적으로 
(function(){
  for(let k=0; k<=5; k++){
    setTimeout(function(){
      console.log(k);  // 0 1 2 3 4 5
    })
  }
})();