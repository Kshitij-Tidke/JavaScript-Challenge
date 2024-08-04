// Day 5: Functions

// Activity 1: Function Declaration 

// Task 1:
function evenNodd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`)
    }else{
        console.log(`${num} is odd`)
    }
}
// evenNodd(4)

// Task 2:
function square(num) {
    return console.log(`${num} square root is ${Math.sqrt(num)}`);
}
// square(25)

// Activity 2: Function Expression
// Task 3:
function maximum(numOne, numTwo) {
    if (numOne > numTwo) {
        return console.log(`numOne is maximum`);
    } else if (numOne === numTwo) {
        return console.log(`numOne numTwo are equal`);
    } else {
        return console.log(`numTwo are maximum`);
    }
}
// maximum(30,20)

// Task 4:
function concatenate(strOne, strTwo) {
    return console.log(`The concatenation of string is ${strOne+strTwo}`);
    
}
// concatenate("Hello"," World!")

// Activity 3: Arrow Functions
// Task 5:
const sum = (numOne, numTwo) => {
    return console.log(`Sum is ${numOne+numTwo}`);
}
// sum(10,20)

// Task 6:
const specificChar = (search) => {
    string = "Hello World!"
    for (const str of string) {
        if (str === search) {
            console.log(true);
            break;
        }else{
            console.log(false);
            break;
        }
    }
}
// specificChar("H")

// Activity 4: Function parameters and Default Values 
// Task 7:
function product(numOne, numTwo = 10) {
    return console.log(`Multiplication is ${numOne*numTwo}`);
}
// product(0)

// Task 8:
function greeting(name, age = 22) {
    return console.log(`Welcome ${name} and age is ${age}`);
}
// greeting("Kshitij", 24)

// Activity 5: Higher-Order Function
function repeatFunction(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}

function hello() {
    console.log("Hello, world!");
}

// repeatFunction(hello, 5);

// Task 10:
function applyFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
}

function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

const value = 5;
const result = applyFunctions(double, square, value);
// console.log(result); 
