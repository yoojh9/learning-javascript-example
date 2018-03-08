const input = "As I was going to Saint Ives";
const re = /\w{3,}/ig;  // 단어는 3글자 이상이면서 대소문자는 가리지 않는다

// 문자열에 있는 메서드 사용
console.log(input.match(re)); // [ 'was', 'going', 'Saint', 'Ives' ]
console.log(input.search(re)); // 5 (세 글자로 이루어진 첫 단어의 인덱스는 5)

// 정규식에 있는 메서드 사용
// exec는 마지막 위치를 기억
console.log(re.exec(input)); // [ 'was', index: 5, input: 'As I was going to Saint Ives' ]
console.log(re.exec(input)); // [ 'going', index: 9, input: 'As I was going to Saint Ives' ]
console.log(re.exec(input)); // [ 'Saint', index: 18, input: 'As I was going to Saint Ives' ]
console.log(re.exec(input)); // [ 'Ives', index: 24, input: 'As I was going to Saint Ives' ]
console.log(re.exec(input)); // null -- 일치하는 것이 더 이상 없음
console.log(re.test(input)); // true -- 세 글자 이상으로 이루어진 단어가 한 개 이상 있다.
