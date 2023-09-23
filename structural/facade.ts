// Structural: Facade pattern

// High-level interface which communicates with subsystems and hides complexities

class Bank {
    verify(name:string, amount:number) {
        return true
    }
}

class Credit {
    get(name:string) {
        return true
    }
}

class Background {
    check(name:string) {
        return false
    }
}

export class Mortgage {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    async applyFor (amount: number) {
        const bank = new Bank();
        const credit = new Credit();
        const background = new Background();

        let result = "approved";
        const promise = [bank.verify(this.name, amount), credit.get(this.name), background.check(this.name)]
        const res = await Promise.all(promise)
        
        if(res.some(v => !v)) {
            result = 'denied'
        }
       
        return this.name + " has been " + result +
            " for a " + amount + " mortgage";
    }
}

const main = () => {
    const mortgage = new Mortgage('Aleksandr')
    mortgage.applyFor(24).then(res => console.log(res))
}

main();