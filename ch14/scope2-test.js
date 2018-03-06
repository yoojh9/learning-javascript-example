// 콜백은 자신을 선언한 스코프(클로저)에 있는 것에 접근할 수 있다.
// 따라서 i의 값은 콜백이 실행되는 순간마다 다를 수 있다.

function countdown(){
  console.log('Countdown');

  for(let i=5; i>=0; i--){  // i는 이제 블록스코프 변수입니다.
  	setTimeout(function(){
  	  console.log(i===0 ? "Go!": i);	
  	},(5-i)*1000);
  }
}

countdown();