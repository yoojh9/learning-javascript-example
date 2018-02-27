const n = 5
const s = "5";

console.log(n===s);				// false
console.log(n!==s);				// true
console.log(n===Number(s));		// true
console.log(n!==Number(s));		// false
console.log(n==s);				// true : 권장하지 않음
console.log(n!=s);				// false : 권장하지 않음

const a = { name: "an Object" };
const b = { name: "an Object" };

console.log(a===b);				// false -- 객체는 항상 다르다
console.log(a!==b);				// true
console.log(a==b);				// false : 권장하지 않음
console.log(a!=b);				// true : 권장하지 않음