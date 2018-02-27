function* interrogate(){
  const name = yield 'What is your name';
  const color = yield 'What is your favorite color?';
  return `${name}'s favorite color is ${color}`;
}

// 제너레이터를 호출하면 이터레이터를 얻음
const it = interrogate();
console.log(it.next());    // { value:"What is your name?", done:false }

// name 변수에 "Jeonghyun"이 전달됨
console.log(it.next('Jeonghyun'));    // { value:"What is your favorite color?", done:false } 

// color 변수에 "sky"이 전달됨
console.log(it.next('sky'));    // { "Jeonghyun's favorite color is sky", done:true } 

