// Day 8: ES6+ Features 

// Activity 1: Template Literals

// Task 1:
const person = {
    name: "kshitij tidke",
    age: 24
}
// console.log(`The name of person is ${person.name} and age is ${person.age}`);

// Task 2:
// console.log("string text line 1\n" + "string text line 2");

// Activity 2: Destructuring 
// Task 3:
const arrOne = [1,2,3,4,5]
// const [firstEle, secondEle, ...rest] = arrOne 
// console.log(`First element is ${firstEle} and second element is ${secondEle} other element ${rest}`);

// Task 4:
const objOne = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
}
const {title, author, ...other} = objOne
// console.log(`Title is ${title} and author is ${author} others are ${JSON.stringify(other)}`);

// Activity 4: Spread and Rest Operators 
// Task 5:
const arrTwo = [...arrOne, 6, 7, 8, 9, 10]
// console.log(`New array is ${arrTwo}`);

// Task 6: 
function accept(...numbers) {
    // return console.log(`Sum of give numbers ${numbers.reduce((acc, currVal) => acc + currVal, 0)}`);
}
accept(10,20,30,40,50)

// Activity 4: Default Parameters 
// Task 7:
function product(numOne, numTwo = 1) {
    return console.log(`Multiplication is ${numOne * numTwo}`);
}
// product(10)

// Activity 5: Enhanced Object Literals
// Task 8:
const name = "kshitij"
const id = 1
const salary = 20000
const employee = {
    name,
    id,
    salary,
    getInfo: () => {
        console.log(`Name of employee is ${this.name} and salary is ${this.salary}`);
    }
}
// console.log(employee);

// Task 9 :
const property1 = "title";
const property2 = "author";
const property3 = "year";

const book = {
  [property1]: "To Kill a Mockingbird",
  [property2]: "Harper Lee",
  [property3]: 1960
};
// console.log(book);
