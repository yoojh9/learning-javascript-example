// 예상되는 에러가 문제를 일으키지 않도록 대비했음에도 프로그램은 멈춘다.
// 예외처리가 의도대로 동작하지 않는 이유는 try...catch 블록은 같은 함수 안에서만 동작하기 때문이다.
// try...catch 블록은 readSketchFile 함수 안에 있지만, 정작 예외는 fs.readFile이 콜백으로 호출하는 익명함수에서 일어났다.

const fs = require('fs');

function readSketchyFile(){
  try{
    fs.readFile('does_not_exist.txt', function(err,data){
      if(err) throw err;
    })
  } catch(err){
    console.warning('warning: monor issued occurred, program continuing'); // 콘솔에 찍히지 않음
  }
}

readSketchyFile();