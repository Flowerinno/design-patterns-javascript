// TYPES OF PROXY:
// remote proxy
// virtual proxy
// protection proxy
// smart reference proxy

interface ResourceI {
	getStatus(id: number): string;
	getOrders(): Order[];
}

const Dictionary = {
	1: "Ready",
	2: "Not Ready",
	3: "In Progress",
};

interface IOrder {
	id: number;
	name: string;
	chief: Chief;
	statusId: number;
	getStatus(): string;
}

class Chief {
	dictionary: Record<number, string> = Dictionary;

	getStatus(id: number) {
		console.log("Getting status");
		console.log("Order is", this.dictionary[id]);
		return this.dictionary[id];
	}

	getOrders() {
		const order = new Order(1, "Burger");
		const list = [order];

		return list;
	}
}

class Order {
	private id: number;
	private name: string;
	private chief: InstanceType<typeof Chief>;
	private statusId: number;

	constructor(id: number, name: string) {
		this.id = id;
		this.chief = new Chief();
		this.statusId = Math.random();
		this.name = name;
	}

	getStatus() {
		return this.chief.getStatus(this.statusId);
	}
}




const order = new Order(1, "Burger");

const chief = new Chief();

chief.getStatus(1);
