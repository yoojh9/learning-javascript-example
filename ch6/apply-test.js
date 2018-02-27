function sum(num1, num2){ 
  return num1 + num2 
}

function applySum1(num1, num2){
  return sum.apply(this, [num1, num2])    // 배열을 넘긴다 
}

function applySum2(num1, num2){
  return sum.apply(this, arguments)    // argument 객체는 함수가 만들어지면 해당 함수의 스코프 내에서 자동으로 만들어지는 유사 배열 객체
}

applySum1(10, 10)    // 20 applySum2(10, 10)    // 20
