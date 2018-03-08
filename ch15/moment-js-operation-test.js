const moment = require('moment-timezone');

let m = moment();  // 현재
console.log(m);
m.add(3, 'days');  // m은 이제 3일 뒤
console.log(m);
m.subtract(2, 'years');  // m은 이제 2년 전으로부터 3일이 지난 날짜
console.log(m);

// 체이닝도 가능
m = moment()
  .add(10, 'hours')
  .subtract(10, 'days')
  .endOf('month');
console.log(m); // m은 10일 전 10시간 뒤의 달의 마지막

m = moment();
m.startOf('year');  // m은 이제 올해의 1월 1일
console.log(m);
m.endOf('month');  // m은 이제 올해의 1월 31일
console.log(m);