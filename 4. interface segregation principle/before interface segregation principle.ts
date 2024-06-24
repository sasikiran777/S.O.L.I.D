// Interface segregation principle states that
// we can not have only one interface that has all methods to implement

// In below example ThingsToDo has two methods writeCode, serveTable
// serveTable is needed only in Waiter class
// writeCode is needed only in SoftwareDeveloper class

interface ThingsToDo {
    writeCode()

    serveTable()
}

class SoftwareDeveloper implements ThingsToDo {
    serveTable() {
        console.log("Software Developer does not need to serve table")
    }

    writeCode() {
        console.log("Software Developer writes code")
    }

}

class Waiter implements ThingsToDo {
    serveTable() {
        console.log("Waiter serves tables")
    }

    writeCode() {
        console.log("Waiter does not need to write code")
    }

}

const softwareDeveloper = new SoftwareDeveloper()
softwareDeveloper.writeCode()
softwareDeveloper.serveTable()

const waiter = new Waiter()
waiter.writeCode()
waiter.serveTable()