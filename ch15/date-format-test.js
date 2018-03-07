const moment = require('moment-timezone');

const d = new Date(Date.UTC(1990,8,12));

console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toTimeString());
console.log(d.toUTCString());


// 메타 문자가 길면 구성요소도 더 길게 표시된다.
// 예를 들어 "M"은 1,2,3으로, "MM"은 01,02,03으로 바뀐다
// "MMM"은 Jan, Feb, Mar으로, "MMMM"은 January, Feburary, March
// 소문자 "o"는 서수로 바뀐다. 즉 "Do"는 1st, 2st, 3rd로 바뀐다
console.log(moment(d).format('YYYY-MM-DD'));  // 	1990-09-12
console.log(moment(d).format('YYYY-MM-DD HH:mm'));  // 1990-09-12 09:00
console.log(moment(d).format('YYYY-MM-DD HH:mm Z'));  // 1990-09-12 09:00 +09:00
console.log(moment(d).format('YYYY-MM-DD HH:mm [UTC]Z'));  // 1990-09-12 09:00 UTC+09:00
console.log(moment(d).format('YYYY년 M월 D일 HH:mm'));  // 1990년 9월 12일 09:00
console.log(moment(d).format('dddd, MMMM [the] Do, YYYY'));  // Wednesday, September the 12th, 1990 
console.log(moment(d).format("h:mm a"));  // 9:00 am