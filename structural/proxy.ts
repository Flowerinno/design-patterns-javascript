// TYPES OF PROXY:
// remote proxy
// virtual proxy
// protection proxy
// smart reference proxy

// PROTECTION PROXY EXAMPLE 

class OriginDoor {
	open() {
		console.log("Opening door");
	}

	close() {
		console.log("Closing door");
	}
}

class ProxyDoor {
	constructor(private door: OriginDoor) {
		this.door = door;
	}

	open(password: string) {
		if (this.authenticate(password)) {
			this.door.open();
		} else {
			console.log("Access denied");
		}
	}

	authenticate(password: string) {
		return password === "secret";
	}

	close() {
		this.door.close();
	}
}

const door = new ProxyDoor(new OriginDoor());

door.open("invalid"); // Access denied
door.open("secret"); // Opening door
door.close(); // Closing door
