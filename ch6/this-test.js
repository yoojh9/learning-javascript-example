const o = {
  name: "Jeonghyun",
  speak() {return `My name is ${this.name}`}
}
console.log(o.speak());	// this는 o에 묶임. speak가 o의 프로퍼티여서가 아니라 o에서 speak를 호출했기 때문.

// 같은 함수를 변수에 할당하여 호출하면 자바스크립트는 이 함수가 어디에 속하는지 알 수 없으므로 this는 undefined에 묶임.
const speak = o.speak;
console.log(speak())