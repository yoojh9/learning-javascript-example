const message = (function(){
  // 변수 secret은 IIFE 스코프 안에서 안전하게 보호되며 외부에서 접근할 수 없다.
  const secret = "I'm a secret!";
  return `The secret is ${secret.length} characters long`;
})();

console.log(message);