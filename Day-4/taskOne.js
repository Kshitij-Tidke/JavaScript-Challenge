// Day 4: Loops

// Activity 1: For Loop

// Task 1: 
for (let index = 1; index <= 10; index++) {
    // console.log(index);
}

// Task 2:
for (let index = 5; index <= 50; index += 5) {
    // console.log(index);
}

// Activity 2: While Loop
// Task 3:
let num = 0
let index = 1
while (index <= 10) {
    num = num + index
    index++
}
// console.log(num);

// Task 4:
let index1 = 10
while (index1 > 0) {
    // console.log(index1);
    index1--
}

// Activity 3: Do..While Loop
// Task 5:
let index2 = 1
do {
    // console.log(index2);
    index2++
} while (index2 <= 5);

// Task 6:
let index3 = 1
let num1 = 1
let fact = 4
do {
    num1 = index3 * num1 
    index3++
} while (index3 <= fact);
// console.log(num1);

// Activity 4: Nested Loops
// Task 7: 
for (let i = 1; i <= 5; i++) {
    let space = ""
    for (let j = 1; j <= i; j++) {
        space += "*";
    }
    // console.log(space);
}

// Activity 5: Loop Control Statements
// Task 8: 
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    // console.log(i)
}

// Task 9: 
for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
    
}