// Day 2: Operators 

// Activity 1: Arithmetic Operations 

let variableOne = 22
let variableTwo = 33

// Task 1:
console.log(`Sum of ${variableOne} and ${variableTwo} are ${variableOne+variableTwo}`);

// Task 2:
console.log(`Subtract of ${variableOne} and ${variableTwo} are ${variableOne-variableTwo}`);

// Task 3:
console.log(`Multiply of ${variableOne} and ${variableTwo} are ${variableOne*variableTwo}`);

// Task 4:
console.log(`Divide of ${variableOne} and ${variableTwo} are ${variableOne/variableTwo}`);

// Task 5:
console.log(`Remainder of ${variableOne} and ${variableTwo} are ${variableOne%variableTwo}`);

// Activity 2: Assignment Operators 

// Task 6:
console.log(`+= operator of ${variableOne} and ${variableTwo} are ${variableOne+=variableTwo}`);
// manipulate the value of variableOne 

// Task 7:
console.log(`-= operator of ${variableOne} and ${variableTwo} are ${variableOne-=variableTwo}`);
// manipulate the value of variableOne 

// Activity 3: Comparison Operators 
// Task 8:
console.log(`< operator of ${variableOne} and ${variableTwo} are ${variableOne<variableTwo}`);
console.log(`> operator of ${variableOne} and ${variableTwo} are ${variableOne>variableTwo}`);

// Task 9:
console.log(`<= operator of ${variableOne} and ${variableTwo} are ${variableOne<=variableTwo}`);
console.log(`>= operator of ${variableOne} and ${variableTwo} are ${variableOne>=variableTwo}`);

// Task 10:
console.log(`== operator of ${variableOne} and ${variableTwo} are ${variableOne==variableTwo}`);
console.log(`=== operator of ${variableOne} and ${variableTwo} are ${variableOne===variableTwo}`);

// Activity 4: Logical Operators
// Task 11:
if (variableOne && variableTwo) {
    console.log(`variableOne variable Two both are present`);
}

// Task 12:
if (variableOne || variableTwo || variableThree) {
    console.log(`variableOne variableTwo variableThree anyone are present`);
}

// Task 13:
if (!variableOne) {
    console.log(`${variableOne} are not present`);
}

// Activity 5: Ternary Operators
// Task 14:
let message = (variableOne) ? "variableOne is present" : "variableOne is not present";
console.log(message);

