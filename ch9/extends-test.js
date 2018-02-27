class Vehicle {
	constructor(){
		this.passengers = [];
		console.log("Vehicle created");
	}
	addPassenger(p){
		this.passengers.push(p);
	}
}

class Car extends Vehicle {
	constructor(){
		super();
		console.log('Car created');
	}
	deployAirbags(){
		console.log("펑!");
	}
}

const v = new Vehicle();
v.addPassenger("Jeonghyun");
v.addPassenger("Yong");
console.log(v.passengers);	// ["Jeonghyun","Yong"]

const c = new Car();
c.addPassenger("Bogum");
c.addPassenger("Joongki");
console.log(c.passengers); // ["Bogum, Joongki"]

// v.deployAirbags();	// error
c.deployAirbags();	// "펑!"