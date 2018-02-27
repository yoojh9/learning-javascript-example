const arr = ['foo', 'hello', 'diamond', 'A'];

let mapFunc = arr.map(a=>a.length);

let reduceFunc = arr.reduce(function(pre, val){
  pre.push(val.length);
  return pre;
},[])

console.log(mapFunc);
console.log(reduceFunc)