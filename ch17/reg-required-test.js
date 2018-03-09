const field = '  something  ';
const valid = /\S/.test(field); // 공백이 아닌 글자가 최소한 하나는 있는지 체크할때 \S
console.log(valid)