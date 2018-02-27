class Dog {
	constructor(name){
		this.name = name
	}
  // 프로토타입
	speak(){
		console.log(this.name + " is bark")
	}
}

// 먼저 인스턴스를 체크하고 거기에 없으면 프로토타입을 체크한다. 
const dog1 = new Dog();
const dog2 = new Dog();

console.log(dog1.speak === Dog.prototype.speak);  // true
console.log(dog1.speak == dog2.speak);  // true

dog1.speak = function(){ console.log()}

console.log(dog1.speak === Dog.prototype.speak);  // false
console.log(dog1.speak == dog2.speak);  // false