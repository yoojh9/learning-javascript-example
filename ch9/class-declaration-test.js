// let puppy = new Dog("mung"); //호이스팅 발생 안함. Dog is not defined

// 1. class 선언
// constructor(생성자): 객체를 생성하고 초기화 하기 위한 메소드
class Dog {
	constructor(name){
		this.name = name
	}
  // 프로토타입
	speak(){
		console.log(this.name + " is bark")
	}
}

const puppy = new Dog("mung"); 
console.log(puppy.name);
puppy.speak();
