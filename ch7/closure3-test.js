// 클로저 사용 전
function a1(){
  var x = 1;
  function b() {
    console.log(x); // x : 함수 내부에서만 사용 가능
  }
  b();
}
a1();
// console.log(x); // x is not defined


// 클로저 사용 후
function a2(){
  var x = 1;
  return function b(){
    console.log(x);
  }
}

var c = a2(); // c라는 변수를 통해 외부에서 x에 접근할 수 있다.
c();          // 하지만 외부에서 임의로 x의 값을 변경하지는 못함.