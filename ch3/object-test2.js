// 주의할점

let o = { a:1 };
let p = o;				// 이제 p는 o가 가리키고 있는 주소를 가리킴
console.log(p===o);		// true

o = { a:2 };			// 이제 o는 다른 것을 가리킨다. { a:1 }을 수정한 것이 아님.
console.log(p===o);		// false
console.log(p)			// {a:1}


// 객체를 가리키고 있는 변수는 객체 자체가 아님. 따라서 변수와 객체는 결코 일치하지 않음
let q = {a:1};
console.log(q==={a:1});	// false