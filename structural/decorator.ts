// Structural pattern: Decorator

// The Decorator pattern is used to extend or alter the functionality of objects at run- time by wrapping them in an object of a decorator class.

class User {
	constructor(public name: string) {
		this.name = name;
	}

	say() {
		console.log(`User: ${this.name}`);
	}
}

class DecoratedUser {
	constructor(public user: User, public street: string, public city: string) {
		this.user = user;
		this.street = street;
		this.city = city;
	}

	say() {
		console.log(
			`Decorated User: ${this.user.name}, ${this.street}, ${this.city}`
		);
	}
}

const decoratorMain = () => {
	const user = new User("Kelly");
	user.say(); // User: Kelly

	const decorated = new DecoratedUser(user, "Broadway", "New York");
	decorated.say(); // Decorated User: Kelly, Broadway, New York
};
decoratorMain();
