class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static genericGreet () {
        return `Generic greeting message`
    }

    updateAge() {
        return `Updated age is ${Math.floor(Math.random()*100)}`
    }
}

class Student extends Person {
    static count = 0
    constructor(name, age, stuId) {
        super(name, age)
        this.stuId = stuId
        Student.count++
    }

    static stdCount() {
        return `Count of student are ${Student.count}`
    }

    studInfo() {
        return `Student ID is ${this.stuId}`
    }
    greeting() {
        // overriding 
        return `${super.greeting()} Student ID is ${this.stuId}`;
    }
}

// const person = new Person("Kshitij" ,24);
const student = new Student("Kshitij", 24, 12)
// console.log(person.greeting());
// console.log(person.updateAge());
// console.log(student.greeting());

// task 5: 
// console.log(Person.genericGreet());

// task 6: 
// const student1 = new Student("Kshitij", 24, 12)
// console.log(Student.stdCount());

// task 7: 
class PersonOne {
    constructor(fName, lName) {
        this.lName = lName
        this.fName = fName
    }

    get fullName(){
        return `${this.fName} ${this.lName}`
    }

    set updateName(newName){
        this.fName = newName
    }
}

const kshitij = new PersonOne("Kshitij", "Tidke")
// Task 7:
console.log(kshitij.fullName);
// Task 8:
kshitij.updateName = "Akash"
console.log(kshitij.fullName);


