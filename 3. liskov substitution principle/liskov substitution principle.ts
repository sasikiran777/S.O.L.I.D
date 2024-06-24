// Here Animal interface has all contracts that all child classes should implement
// based on this all object for Animal can be interchanged with subclasses

interface Animal {
    makeSound()
}

class Lion implements Animal {
    makeSound() {
        console.log("Lion make sound")
    }
}

function callAnimal(animal: Animal) {
    animal.makeSound()
}


const animal: Animal = new Lion()
callAnimal(animal)

const animal2: Lion = new Lion()
callAnimal(animal2)