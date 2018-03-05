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
// 함수를 하나 더 쓰면 스코프가 새로 만들어지고 각 단계에서의 i의 값이 클로저에 캡처된다.
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
// let은 블록스코프로 루프의 단계마다 변수 i의 복사본을 새로 만든다.
// 따라서 setTimeout에 전달한 함수가 실행될 때는 독립 스코프에서 변수를 받는다.
(function(){
  for(let k=0; k<=5; k++){
    setTimeout(function(){
      console.log(k);  // 0 1 2 3 4 5
    })
  }
})();