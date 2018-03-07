const moment = require('moment-timezone');

// Moment.js로 넘기는 배열은 자바스크립트의 Date 생성자에 넘기는 매개변수와 똑같고, 월은 0으로 시작한다
// toDate() 메서드는 Moment.js 객체를 자바스크립트 Date 객체로 변환한다.
// 해당 타임존의 timestamp를 Date 객체로 변경
const a = moment.tz("2018-03-07 00:00",'America/Los_Angeles'); // UTC-8
const k = moment.tz("2018-03-07 00:00",'Asia/Seoul'); // UTC+9

// 2018년 3월 7일 0시 0분을 각 타임존에 맞게 변환하면
console.log(a.toDate()); // 2018-03-07T08:00:00.000Z
console.log(k.toDate()) // 2018-03-06T15:00:00.000Z
