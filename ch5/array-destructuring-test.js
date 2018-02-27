const arr = [1,2,3];

let [x1,y1] = arr
console.log(x1);
console.log(y1);

const arr2 = [1,2,3,4,5];

// 확산 연산자(...)를 사용하면 남은 요소를 새 배열에 할당할 수 있다.
let[x2,y2, ...rest] = arr2;
console.log(x2);		// 1
console.log(y2);		// 2
console.log(rest);		// [3,4,5]
