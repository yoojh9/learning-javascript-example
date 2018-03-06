// let을 사용하기는 했지만, 변수를 for 루프 밖에서 선언했으므로 -1만 찍힘.
// 콜백이 실행될 때 i의 값은 이미 -1

// countdown을 호출하면 변수 i가 들어있는 클로저가 만들어진다. 
// for 루프 안에서 만드는 콜백은 모두 i에 접근할 수 있고, 콜백함수에서 접근하는 i는 모두 똑같은 i

// (5-i)*1000은 예상대로 동작한다. (0, 1000, 2000) setTimeout을 호출하는 것은 동기적. 
// 비동기적인 부분은 setTimeout에 전달된 함수
function countdown(){
  let i;  // i를 루프 밖에서 선언.
  console.log('Countdown');
  for(i=5; i>=0; i--){
    setTimeout(function(){
      console.log(i===0? "Go!" : i); // 비동기
    },(5-i)*1000);
  }
}

countdown();