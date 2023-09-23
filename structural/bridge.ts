// Structural pattern: Bridge

// Creates loose coupling between objects/classes
// Allows changes either in abstraction or implementor without affecting the other


// input/ abstraction
class Gestures {
    constructor(public output:AudioOutput) {
        this.output = output
    }

    tap  () { this.output.click(); }
    swipe (){ this.output.move(); }
    pan () { this.output.drag(); }
    pinch () { this.output.zoom(); }
}

class Mouse {

    constructor(public output: ScreenOutput) {
        this.output = output
    }

    click() {
        this.output.click()
    }
    move (){ this.output.move(); }
    down () { this.output.drag(); }
    wheel () { this.output.zoom(); }
}


// output / implementor

class AudioOutput {
   click () { console.log("Sound oink"); }
   move () { console.log("Sound waves"); }
   drag () { console.log("Sound screetch"); }
   zoom () { console.log("Sound volume up"); }
}

class ScreenOutput {
    click () { console.log("Screen select"); }
    move () { console.log("Screen move"); }
    drag () { console.log("Screen drag"); }
    zoom () { console.log("Screen zoom in"); }
}

const bridgeMain = () => {
    const screen = new ScreenOutput();
    const audio = new AudioOutput();

    const hand = new Gestures(screen)
    const mouse = new Mouse(audio)

    hand.pan()
    mouse.click();
}

bridgeMain();