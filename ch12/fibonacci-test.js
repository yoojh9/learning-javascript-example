class Fibonacci{
  [Symbol.iterator](){
    let a = 0, b = 1;
    return {
      next(){
        let rval = { value:b, done:false };
        b += a;
        a = rval.value;
        return rval;
      }
    }
	}
}

const fib = new Fibonacci();
let i = 0;
for(let n of fib){
  console.log(n);
  if(++i > 9) break;
}