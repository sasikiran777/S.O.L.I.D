// Objects of Super class can be replaceable with objects of
// Sub class without effecting the correctness of program

// In the below example if we call only Lion class run method then the expected output is achieved
// But if we call Animal class run method the output is changed which is not desired output

// So objects can not be interchanged which violets the liskov substitution principle

class Animal {
    run() {
        console.log("Animal Called")
    }
}

class Lion extends Animal{
    run() {
        super.run()
        console.log("Lion Called");
    }
}

const lion = new Lion();
lion.run()

const animal = new Animal();
animal.run()
