// Structural pattern: Adapter / Wrapper Pattern

// The Adapter pattern translates one interface (an object's properties and methods) to another.
// The Adapter pattern is useful when you want to use a class that doesn't have an interface that a client expects.
// Helps integrate new or updated functionality into an existing system without modifying the existing code.
// Testing: Adapters can be valuable in testing scenarios. You can create mock or fake adapters to simulate the behavior of real components, making it easier to test your code in isolation.

class Shipping {
	request(zipStart, zipEnd, weight) {
		// ...
		return "$49.75";
	}
}

class AdvancedShipping {
	login(credentials) {
		const token = { token: "30a8-6ee1" };
		if (credentials.token !== token.token) {
			throw new Error("Invalid token!");
		}
		return true;
	}
	setStart(start) {
		/* ... */
	}
	setDestination(destination) {
		/* ... */
	}
	calculate(weight) {
		return "$39.50";
	}
}

class ShippingAdapter {
	shipping: AdvancedShipping;

	constructor(credentials) {
		this.shipping = new AdvancedShipping();
		this.shipping.login(credentials);
	}

	request(zipStart, zipEnd, weight) {
		this.shipping.setStart(zipStart);
		this.shipping.setDestination(zipEnd);
		return this.shipping.calculate(weight);
	}
}

const adapterMain = () => {
	const shipping = new Shipping();
	const credentials = { token: "30a8-6ee1" };
	const adapter = new ShippingAdapter(credentials);

	let cost = shipping.request("78701", "10010", "2 lbs");
	console.log("Old cost: " + cost); // Old cost: $49.75

	cost = adapter.request("78701", "10010", "2 lbs");

	console.log("New cost: " + cost); // New cost: $39.50
};

adapterMain();
