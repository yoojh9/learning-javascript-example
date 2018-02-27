const o = {
  name: "멍멍이",		// 원시값 프로퍼티
  bark: function(){	// 함수 프로퍼티 (메서드)
    return "멍멍";
  }
}

// ES6에서 간편하게 메서드를 추가할 수 있는 문법이 새로 생김
const o2 = {
  name: "멍멍이",
  bark() {return "멍멍"}
}

console.log(o);
console.log(o2);