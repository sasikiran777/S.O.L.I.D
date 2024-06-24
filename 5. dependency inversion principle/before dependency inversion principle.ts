// Dependency inversion is to depend on interfaces or abstract class
// rather than depending on concrete class or implementations

// In other words a high level module should not depend directly on low level module

// In the below example Room class is directly depends on Bulb class which is concrete class

// So while passing the constructor parameter to Room class
// we can only pass Bulb class as parameter and can not pass any other class as parameter

class Bulb {
    turnOn() {
        console.log("Bulb is on")
    }

    turnOff() {
        console.log("Bulb is off")
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

const bulb = new Bulb();

const room = new Room(bulb)

room.switchOnBulb()
room.switchOffBulb()
