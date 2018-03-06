// 분이 넘어가거나 10회째가 될 때까지 5초마다 콜백을 실행하는 예제
// setTimeout, setInterval, clearInterval은 모두 전역 객체(브라우저에서는 window, 노드에서는 global)에 정의되어 있다.
const start = new Date();
let i = 0;
const intervalId = setInterval(function(){
  let now = new Date();
  if(now.getMinutes() !== start.getMinutes() || ++i > 10)
    return clearInterval(intervalId);
  console.log(`${i}: ${now}`);
},5*1000);
