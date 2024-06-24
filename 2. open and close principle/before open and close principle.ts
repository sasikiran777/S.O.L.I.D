// Classes, modules, interfaces, function, etc should be open for extension but closed for modification
// In this below example if we want to add new shape we have to modify AreaCalculator class and class shape have
// no real purpose

class Shape {
    shape

    constructor(shape) {
        this.shape = shape
    }
}

class AreaCalculator extends Shape {
    calculateArea(s: Shape) {
        if (s.shape == 'Circle') {
            return 3.14 * 3.14
        } else if (s.shape == 'Rectangle') {
            return 4 * 5
        }
        return 0
    }
}

const s = new Shape("Rectangle")

const areas = new AreaCalculator(s)
console.log(areas.calculateArea(s))

