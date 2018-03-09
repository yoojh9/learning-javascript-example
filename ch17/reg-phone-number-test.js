// 사용자가 입력한 전화번호에서 하이픈 공백을 제거한다

const messyPhone = '(032)-555-1515';
const neatPhone = messyPhone.replace(/\D/g,''); // 숫자가 아닌것을 제거함
console.log(neatPhone)
