// Day 13: Modules

// Activity 1: Creating and Exporting Modules

// Task 1:
function addNums(numOne, numTwo) {
    return console.log(`Addition of ${numOne} and ${numTwo} is ${numOne + numTwo}`);
}

// Task 2:
const person = {
    id: 1,
    name: "Kshitij",
    salary: 20000,
    greeting: () => {
        console.log("Hello");
    }
}

// Task 5:
module.exports = { addNums, person }

