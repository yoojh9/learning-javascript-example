const input = "As I was going to Saint Ives";

// 네 글자 이상으로 이루어진 단어는 모두 ****로 교체
const output = input.replace(/\w{4,}/ig, '****'); // "As I was **** to **** ****"
console.log(output)