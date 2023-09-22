// STRATEGY PATTERN (BEHAVIORAL)
// allows a client class (HUMAN in this case) to choose an algorithm from a family of algorithms at runtime.
// The client class (HUMAN) is not aware of the actual algorithm that is chosen to perform the desired operation.

interface Weapon {
	use(): void;
}

class Axe {
	use() {
		console.log("Attacked with an Axe");
	}
}

class Sword {
	use() {
		console.log("Attacked with a Sword");
	}
}

class Human {
	private name: string;
	private weapon: Weapon;

	constructor(name: string) {
		this.name = name;
	}

	setWeapon(weapon: Weapon) {
		this.weapon = weapon;
	}

	attack() {
		if (!this.weapon) {
			console.log("No weapon equipped");
			return;
		}

		this.weapon.use();
	}
}

const human = new Human("John");
human.setWeapon(new Axe());

human.attack();
