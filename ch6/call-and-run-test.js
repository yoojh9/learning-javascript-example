function getGreeting(){
  return "hello world";
}

console.log(getGreeting());	// "hello world"
console.log(getGreeting);	// function getGreeting()

const f = getGreeting;
console.log(f())			// "hello world"

// 객체 할당
const o = {};
o.f = getGreeting;
console.log(o.f());			// "hello world"

// 배옇 할당
const arr = [1,2,3];
arr[1] = getGreeting;
console.log(arr[1]());		// "hello world"
