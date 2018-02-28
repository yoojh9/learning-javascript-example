function foo(b){
  var a = 5;
  return a+b;
}

function bar(x){
  var y = 1;
  return foo(x+y);
}

console.log(bar(2));

// 실행 순서
// 1. bar 함수가 콜스택에 push됨.
// 2. return 키워드에서 foo 함수가 호출됨. foo 함수가 콜스택에 push됨 
// 3. foo 함수에서 a+b를 return하면서 stack에서 foo함수가 pop됨
// 4. bar 함수로 돌아오고 foo 함수로부터 받은 값을 return하면서 bar함수도 stack에서 pop됨
