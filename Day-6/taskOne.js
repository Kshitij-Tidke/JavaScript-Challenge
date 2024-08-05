// Day 6: Arrays 

// Activity 1: Array Creation and Access 

// Task 1:
// const arrOne = [1,2,3,4,5]
// console.log(arrOne);
// Task 2:
// console.log(arrOne[0]);
// console.log(arrOne[arrOne.length - 1]);

// Activity 2: Array Methods (Basic)
// Task 3:
// arrOne.push(6)
// console.log(arrOne); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(`${arrOne}`); // 1,2,3,4,5,6
// Task 4:
// arrOne.pop()
// console.log(arrOne);
// Task 5:
// arrOne.shift()
// console.log(arrOne);
// Task 6:
// arrOne.unshift(10)
// console.log(arrOne);

// Activity 2: Array Methods (Intermediate)
// Task 7:
const arrTwo = [1,2,3,4,5,6,7,8,9,10]
const arrThree = arrTwo.map((element) => {
    return element * 2;
})
// console.log(arrThree);
// Task 8:
const arrFour = arrTwo.filter((element) => {
    return element % 2 === 0;
})
// console.log(arrFour);
// Task 9:
const arrFive = arrTwo.reduce((acc, currentVal) => {
    return acc + currentVal
})
// console.log(arrFive);

// Activity 4: Array Iteration 
// Task 10:
const arrSix = ["Mango", "Banana", "Kiwi", "Apple"]
for (let index = 0; index < arrSix.length; index++) {
    const element = arrSix[index];
    // console.log(element);
}
// Task 11:
arrSix.forEach((fruit) => {
    // console.log(fruit);
})

// Activity 5: Multi-dimensional Arrays
// Task 12:
const arrSeven = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arrSeven);
// Task 13:
console.log(arrSeven[1][0]);



