// 프라미스는 resolve(성공), reject(실패) 콜백이 있는 함수로 새 Promise 인스턴스를 만들기만 하면 된다.

function countdown(seconds){
  return new Promise(function(resolve, reject){
    for(let i=seconds; i>=0; i--){
      setTimeout(function(){
      	if(i===13) return reject(new Error('error !!'));   // 에러가 발생해도 계속 진행된다. 콘솔에 기록하는 것이 필요한게 아니라 에러 컨트롤리 필요함.
        if(i>0) console.log(i+'...');
        else resolve(console.log("GO!"));
      }, (seconds-i)*1000);
    }
  })
}

// 1. 프라미스 사용 예제 
countdown(5).then(
  function() {
    console.log('countdown completed successfully');
  },
  function(err) {
    console.log('countdown experienced an error: ' +err.message);
  }
);

// 2. 프라미스 사용 예제 
// then 핸들러는 성공 콜백과 에러 콜백을 받는다.
// 프라미스는 catch 핸들러도 지원하므로 핸들러를 둘로 나눠서 써도 된다.
const p = countdown(13);
p.then(function(){
  console.log("countdown completed successfully");
});
p.catch(function(err){
  console.log("countdown experienced an error: " + err.message);
})