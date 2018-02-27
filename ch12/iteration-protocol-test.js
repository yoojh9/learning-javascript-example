// 이터러블
// Symbol.iterator를 프로퍼티 key로 사용한 메소드를 구현해야 한다.
// 배열에는 이미 Array.prototype[Symbol.iterator] 메소드가 구현되어 있다.
const iterable = ['a','b','c'];

// 이터레이터
// 이터러블의 Symbol.iterator를 프로퍼티 key로 사용한 메소드는 이터레이터를 반환한다.
const iterator = iterable[Symbol.iterator]();

// 방법 1)
console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: 'c', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// 방법 2)
for(;;){
  const res = iterator.next();
  console.log(res);
  if(res.done) break;
}