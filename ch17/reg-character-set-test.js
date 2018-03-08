// 만약 문자열에 있는 숫자를 모두 찾고 싶다면?

// 문자셋 사용하지 않을 때
const beer99 = "99 bottles of beer on the wall " +
  "take 1 down and pass it around --" +
  "98 bottles of beer on the wall.";

const matches1 = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);

// 문자셋 사용
const matches2 = beer99.match(/[0123456789]/g);

// 더 줄여서
const matches3 = beer99.match(/[0-9]/g);

// 숫자와 문자만 찾기
const matches4 = beer99.match(/[0-9a-z]/ig);

// 숫자와 문자 빼고 다 찾기(공백도 포함)
const matches5 = beer99.match(/[^0-9a-z]/ig);