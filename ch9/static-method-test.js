class StaticMethodTest{
	static staticMethod(){
		return "Static Method has been called";
	}

	static anotherStaticMethod(){
		return this.staticMethod() + ' from another static method';
	}
}

StaticMethodTest.staticMethod();  // "Static Method has been called"
StaticMethodTest.anotherStaticMethod(); // 'Static method has been called from another static method'