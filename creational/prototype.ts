// Creational Prototype Pattern

// Pros:
// 1. Object cloning is less expensive and faster than creating new objects
// 2. Flexible object creation

// Cons:
// 1. For simple objects, it is not worth it
// 2. Can create shallow copy (reference to nested objects) or deep copy (creates new instances of nested objects)
// 3. Not for complex or very simple object creations

class CustomerPrototype {
	proto: Customer;

	constructor(proto: Customer) {
		this.proto = proto;
	}

	clone() {
		const customer = new Customer();

		customer.name = this.proto.name;
		customer.age = this.proto.age;

		return customer;
	}
}

class Customer {
	name: string;
	age: number;

	constructor(name?: string, age?: number) {
		this.name = name;
		this.age = age;
	}

	say() {
		console.log(`Hello from ${this.name}`);
	}
}

function prototypeMain() {
	const proto = new Customer("Sasa", 25);

	const prototype = new CustomerPrototype(proto);

	const customer = prototype.clone();
	customer.say();
}

prototypeMain();
