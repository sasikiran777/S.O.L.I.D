// In below example multiple interfaces are created
// so which class needs what is only implemented

interface WaiterInterface {
    serveTable()
}

interface SoftwareDeveloperInterface {
    writeCode()
}

class SoftwareDeveloper implements SoftwareDeveloperInterface {
    writeCode() {
        console.log("Software Developer writes code")
    }

}

class Waiter implements WaiterInterface {
    serveTable() {
        console.log("Waiter serves tables")
    }
}

const softwareDeveloper = new SoftwareDeveloper()
softwareDeveloper.writeCode()

const waiter = new Waiter()
waiter.serveTable()