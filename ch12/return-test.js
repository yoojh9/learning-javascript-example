function* abc(){
  yield 'a';
  yield 'b';
  return 'c';
}

const it = abc();

/*
console.log(it.next()); // {value: 'a', done: false}
console.log(it.next()); // {value: 'b', done: false}
console.log(it.next()); // {value: 'c', done: true}
*/

// for...of 루프에서 사용할 경우 done이 true이므로 c는 출력되지 않음
for(let l of abc()){
  console.log(l)
}
