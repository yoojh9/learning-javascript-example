function fn1(){
  console.log('1');
  fn2();
}

function fn2(){
  setTimeout(function(){
    console.log('2');
  },0);
  fn3();
}

function fn3(){
  console.log('3');
}

fn1(); // 1 3 2

// 실행 순서
// 1) fn1()이 스택에 push됨
// 2) fn2()가 스택에 push됨
// 3) 일정 시간이 지난 후 fn2()의 setTimeout이 eventQueue에 쌓임
// 4) fn3()가 스택에 쌓임
// 5) event loop가 stack을 체크하고, stack이 빈 것을 확인한 후, eventQueue의 setTimeout을 스택으로 보냄
// 6) setTimeout이 실행됨