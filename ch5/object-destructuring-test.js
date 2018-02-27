const obj = { b:2, c:3, d:4 };

const {a,b,c} = obj;
console.log(a);	//	undefined: obj에 "a"라는 프로퍼티가 없음
console.log(b);	// 2
console.log(c);	// 3
console.log(d);	// ReferenceError: "d"는 정의되어 있지 않음

let a,b,c;
{a,b,c} = obj;		// 에러 발생
({a,b,c} = obj);	// 동작