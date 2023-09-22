//Creational Builder Pattern

// Pros:
// 	1. When you need to create an object with a lot of properties
// 	2. When you need to create an object with a lot of optional properties
//  3. Code readability and maintainability


class Person {
	name: string | undefined = undefined;
	age: number | undefined = undefined;
	phone: string | undefined = undefined;

	setName(name: string) {
		this.name = name;
		return this;
	}

	setAge(age: number) {
		this.age = age;
		return this;
	}

	setPhone(phone: string) {
		this.phone = phone;
		return this;
	}
}

const person = new Person().setName("Sasa").setAge(25).setPhone("123456789");

console.log(person);
