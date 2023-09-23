// Structural: Flyweight pattern

// The Flyweight pattern conserves memory by sharing large numbers of fine-grained objects efficiently.
// Shared flyweight objects are immutable, that is, they cannot be changed as
// they represent the characteristics that are shared with other objects.

// Saves commonly used objects in memory for fast access, decreases memory usage, immutable

class Flyweight {
    model: string;
    make: string;
    processor: string;

    constructor(make: string, model:string, processor:string) {
        this.make = make;
        this.model = model;
        this.processor = processor;
    }
}

class FlyWeightFactory {
    flyweights: Record<string, Flyweight> = {}
   
    get(make:string, model:string, processor:string) {
        if(!this.flyweights[make + model]) {
            this.flyweights[make + model] = new Flyweight(make, model, processor);
        } 
        return this.flyweights[make + model];
    }

    getCount() {
        let count = 0;

        for (const f in Object.keys(this.flyweights)) {
            count++;
        }
        return count;
    }

}

class ComputerCollection {
    computers: Record<string, Computer> = {}
    count: number
    flyweightFactory: FlyWeightFactory

    constructor(flyweightFactory: FlyWeightFactory) {
        this.computers = {};
        this.count = 0;
        this.flyweightFactory = flyweightFactory
    }

    add(make:string, model:string, processor:string, memory:string, tag:string) {
        this.computers[tag] = new Computer(make, model, processor, memory, tag, this.flyweightFactory);
        this.count++;
    }

    get(tag:string) {
        return this.computers[tag];
    }

    getCount() {
        return this.count;
    }
}

class Computer {
    flyweight: Flyweight
    memory: string
    tag: string
    flyweightFactory: FlyWeightFactory

    constructor(make:string, model:string, processor:string, memory:string,
         tag:string, flyweightFactory: FlyWeightFactory) {
        this.flyweight = flyweightFactory.get(make, model, processor);
        this.memory = memory;
        this.tag = tag;
    }

    getMake() {
        return this.flyweight.make;
    }
}

function run() {
  
    const flyWeightFactory = new FlyWeightFactory();
    const computers = new ComputerCollection(flyWeightFactory);

    computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computers.add("Dell", "Studio XPS", "Intel", "5G", "X997T");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
    computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

    console.log("Computers: " + computers.getCount());
    console.log("Flyweights: " + flyWeightFactory.getCount());
}

run();
