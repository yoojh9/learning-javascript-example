
const input = "Address: 333 Main st., Anywhere, NY, 55532. phone: 555-555-2525.";
// . : 공백을 제외한 모든 문자
// * : 공백을 제외한 모든 문자는 있거나 없어도 됨
const match = input.match(/\d{5}.*/); // '55532. phone: 555-555-2525.'



const equation = "(2 + 3.5) * 7";
// \. : 마침표 자체
const match2 = equation.match(/\(\d \+ \d\.\d\) \* \d/); // '(2 + 3.5) * 7'
console.log(match2)