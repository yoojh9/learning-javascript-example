const jeonghyun = { name: 'Jeonghyun' }
const yong = { name: 'yong' }

function greet(){
  return `Nice to meet you, ${this.title}.${this.name} ${this.lastname}`;
}

function setInfo(lastname, gender){
  this.lastname = lastname;
  this.gender = gender;
  this.title = (gender ==='male')?'Mr':'Ms';
}

console.log(greet());				// Nice to meet you, undefined.undefined undefined
setInfo.call(jeonghyun, 'Yoo', 'female');	// this로 사용할 값 외의 매개변수가 더 있는 경우
console.log(greet.call(jeonghyun));  // Nice to meet you, Ms.Jeonghyun Yoo

setInfo.call(yong, 'Kwon', 'male');
console.log(greet.call(yong));		// Nice to meet you, Mr.Yong Kwon