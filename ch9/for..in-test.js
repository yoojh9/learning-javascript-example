const SYM = Symbol();

const o = {a:1, b:2, c:3, [SYM]:4};

// hasOwnProperty()는 상속받은 프로퍼티가 아닌 순수 자신의 속성인 경우에만 true를 반환함.

for(let prop in o){
  if(!o.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
}