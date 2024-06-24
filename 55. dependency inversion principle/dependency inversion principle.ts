// In the below example Room class is depending on Bulb interface
// So while passing the constructor parameter to Room class
// We can pass any class that implements Bulb interface

interface Bulb {
    turnOn()

    turnOff()
}

class LedLight implements Bulb {
    turnOn() {
        console.log("LedLight is on")
    }

    turnOff() {
        console.log("LedLight is off")
    }
}

class TorchLight implements Bulb {
    turnOn() {
        console.log("TorchLight is on")
    }

    turnOff() {
        console.log("TorchLight is off")
    }
}

class Room {
    bulb: Bulb

    constructor(bulb: Bulb) {
        this.bulb = bulb;
    }

    switchOnBulb() {
        this.bulb.turnOn()
    }

    switchOffBulb() {
        this.bulb.turnOff()
    }
}

const ledLight = new LedLight();
const torchLight = new TorchLight();

const room = new Room(ledLight)
const room1 = new Room(torchLight)

room.switchOnBulb()
room.switchOffBulb()

room1.switchOnBulb()
room1.switchOffBulb()
