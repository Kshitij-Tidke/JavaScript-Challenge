// Day 3: Control structures

// Activity 1: If-Else Statements

//Task 1:
let variableOne = 0;
if (variableOne > 0) {
  console.log("Number is Positive", variableOne);
} else if (variableOne < 0) {
  console.log("Number is Negative", variableOne);
} else {
  console.log("Number is Zero", variableOne);
}

// Task 2:
let age = 18;
if (age >= 18) {
  console.log("Are you eligible for vote");
} else {
  console.log("Are you not eligible for vote");
}

// Activity 2: Nested If-Else Statements
// Task 3:
let numOne = 50;
let numTwo = 40;
let numThree = 30;

if (numOne > numTwo && numOne > numThree) {
  console.log("numOne is greater");
} else if (numTwo > numOne && numTwo > numThree) {
  console.log("numTwo is greater");
} else {
  console.log("numThree is greater");
}

// Activity 3: Switch Case
// Task 4:
const readlineSync = require('readline-sync');

// Ask the user for a number
const number = parseInt(readlineSync.question('Enter number between 1 to 7: '))

switch (number) {
    case 1:
        console.log("Today is Sunday");
        break;
    case 2:
        console.log("Today is Monday");
        break;   
    case 3:
        console.log("Today is Tuesday");
        break;
    case 4:
        console.log("Today is Wednesday");
        break;  
    case 5:
        console.log("Today is Thursday");
        break;
    case 6:
        console.log("Today is Friday");
        break;  
    case 7:
        console.log("Today is Saturday");
        break; 
    default:
        console.log("Wroung input number");
        break;
}

// Task 5: 
const score = parseInt(readlineSync.question('Enter your score: '));

switch (true) {
    case (score >= 90):
        console.log("Grade A");
        break;
    case (score >= 80):
        console.log("Grade B");
        break;
    case (score >= 70):
        console.log("Grade C");
        break;
    case (score >= 60):
        console.log("Grade D");
        break;
    case (score >= 50):
        console.log("Grade E");
        break;
    default:
        console.log("Grade F");
        break;
}

// Activity 4: Conditional (Ternary) Operator
// Task 6:
const num = 3;
(num % 2 === 0) ? console.log("Even") : console.log("Odd")

// Activity 5: Combining Conditions
const year = 1900;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}