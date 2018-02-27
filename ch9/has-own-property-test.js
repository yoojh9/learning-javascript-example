class Parent {
	constructor(){
		this.name = 'super';
		this.isSuper = true;
	}
}

Parent.prototype.sneaky = 'not recommended!';

class Child extends Parent {
	constructor(){
		super();
		this.name = 'Child';
		this.isSuper = false;
	}
}

const obj = new Child();

for(let p in obj){
	console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p)? '' : '(inherited)'));
}

/* result
name: Child
isSuper: false
sneaky: not recommended!(inherited)
*/