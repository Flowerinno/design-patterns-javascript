//Creational Factory Pattern

// Pros:
// 1. Dynamic object creation at run-time
// 2. Easy Maintainance , changes required only on main factory class (Car in this case)
// 3. Consistency with predefined configurations

//Cons:
// 1. Complex code
// 2. Limited flexibility
// 3. Difficult to maintain

type Name = "BMW" | "Mercedes" | "Audi";

class Car {
	name: Name;

	constructor(name: Name) {
		this.name = name;
	}

	showInfo() {
		console.log(`This is ${this.name}`);
	}
}

class BMW extends Car {
	constructor() {
		super("BMW");
	}
}

class Mercedes extends Car {
	constructor() {
		super("Mercedes");
	}
}

class Audi extends Car {
	constructor() {
		super("Audi");
	}
}

const audi = new Audi();

console.log(audi);
