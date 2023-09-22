//Creational Abstract Factory Pattern

// Pros:
// 1. Abstraction
// 2. Encapsulation
// 3. Consistency between objects

// Cons:
// 1. Complex code
// 2. Limited customization
// 3. Increased codebase

class Employee {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

class EmployeeFactory {
	create(name: string) {
		return new Employee(name);
	}
}

class Vendor {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

class VendorFactory {
	create(name: string) {
		return new Vendor(name);
	}
}

type Type = Employee | Vendor[];

function abstractMain() {
	let people: Type[] = [];
	const employee = new EmployeeFactory().create("Sasa");
	const vendor = new VendorFactory().create("Aleks");

	people.push(employee);
	people.push(vendor);

	console.log(people);
}

abstractMain();
