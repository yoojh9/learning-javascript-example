const getId = () => new Promise( resolve => {
  setTimeout(() => resolve(1),1);
})

const getNameById = id => new Promise(resolve => {
  setTimeout(() => resolve('Jeonghyun'),1);
})

function* gen(){
  const id = yield getId();
  const name = yield getNameById(id);
  console.log({id, name});
}

// g.next()를 호출하면 제어권이 제너레이터로 넘어간다.
// 제너레이터에서 getId()가 실행되고 프로미스가 반환된다. 반환값은 다음과 같다 {value: Promise, done: false}
// 반환된 값의 value에 있는 Promise를 실행하기 위해 value.then()을 수행하고, id 값을 얻는다
// 그 뒤 g.next(id) 함수를 이용하여 다시 제너레이터로 id값과 제어권을 넘긴다.
// 제너레이터는 메인함수로 전달받은 id값을 상수 id에 저장한다음, getNameById(id) 함수를 실행한다.
// 이 떄의 반환값은 다음과 같다. {value: promise, done: false}
// 이 promise를 실행하기 위해 value.then()을 수행하고 name 값을 얻는다.
// 마지막으로 제너레이터로 name값과 제어권을 넘기고, 제너레이터는 전달받은 name 값을 name 상수에 저장한다.
const g = gen();
g.next().value.then(id=>{
   g.next(id).value.then(name=>{
     g.next(name);
   })
 });