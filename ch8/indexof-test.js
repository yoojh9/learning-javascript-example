const o = { name : "Jeonghyun"};
const arr = [1,5,"j",o,true,5,[1,2],"9"]

console.log(arr);
console.log(arr.indexOf(5));            // 1
console.log(arr.lastIndexOf(5));        // 5
console.log(arr.indexOf("j"));          // 2
console.log(arr.indexOf({name:"Jeonghyun"}));   // -1 똑같은 객체 인스턴스 값이 들어있지 않음. not eqaul
console.log(arr.indexOf(o));            // 3    객체를 찾고 싶으면 객체 인스턴스에 대한 참조값으로
console.log(arr.indexOf([1,2]));        // -1   똑같은 인스턴스 값이 들어있지 않음.
console.log(arr.indexOf(5,5));          // 5
console.log(arr.lastIndexOf(5,4));      // 1
console.log(arr.lastIndexOf(true,3));   // -1