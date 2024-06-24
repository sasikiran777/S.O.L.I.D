// In this below example if we want to add new shape we create new class and implement AreaCalculator that's it
// According to open/close principle AreaCalculator is open for extension
// but all classes are closed for modifications

interface AreaCalculator {
    calculateArea(): number
}

class CircleCalculator implements AreaCalculator {

    constructor(public radius: number) {
    }

    calculateArea(): number {
        return 3.14 * this.radius * this.radius;
    }

}

class RectangleCalculator implements AreaCalculator {
    constructor(public length: number, public breath: number) {
    }

    calculateArea(): number {
        return this.length * this.breath;
    }
}

const rect = new RectangleCalculator(5, 4)
console.log("Rectangle Area ", rect.calculateArea())

const cir = new CircleCalculator(5)
console.log("Circle Area", cir.calculateArea())