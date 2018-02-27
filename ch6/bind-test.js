const jeonghyun = { name: 'Jeonghyun' }

function greet(){
  return `Nice to meet you, ${this.name}`;
}

console.log(greet.call(jeonghyun));	// Nice to meet you, Jeonghyun
console.log(greet.bind(jeonghyun));	// [Function: bound greet]

const bindFunc = greet.bind(jeonghyun);
console.log(bindFunc());	// Nice to meet you, Jeonghyun