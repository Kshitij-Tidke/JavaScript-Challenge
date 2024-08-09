// Day 11: Promises and Async/Await

// Activity 1: Understanding Promises

// Task 1:
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolve");
  }, 2000);
});

// promiseOne.then((message) => console.log(message))

// Task 2:
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise is reject");
  }, 2000);
});

// promiseTwo.catch((message) => console.log(message))

// Activity 2: Chaining Promises
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    let user = true;
    if (user) {
      resolve({ username: "Kshitij", password: "12345" });
    } else {
      reject("ERROR: Something went wroung");
    }
  }, 1000);
});
// promiseThree
// .then((user) => {
//     console.log(user)
//     return user
// })
// .then((user) => console.log(user.username))
// .catch((error) => console.log(error))
// .finally(() => console.log("Promise is either resolve or reject"))

// Activity 3: using Async/Await
// Task 4:
async function logResolvedValue(promise) {
  const resolvedValue = await promise;
  console.log(resolvedValue);
}

const promiseFour = new Promise((resolve) => {
  setTimeout(() => resolve("resolve"), 1000);
});

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => reject("reject"), 1000);
});
// logResolvedValue(promiseFour)
// logResolvedValue(promiseFive).catch((message) => console.log(message))

// Activity 4: Fetching Data an API 
// Task 6:
// async function getdata(){
//     try {
//      let response = await fetch('https://dog.ceo/api/breeds/image/random')
//      let data = await response.json()
//      console.log("data",data.message)
//     } catch (error) {
//      console.log(error)
//     }
//  }
 
//  getdata()

// Task 7:
 async function getdata(){
  try {
   let response = await fetch('https://dog.ceo/api/breeds/image/random/add')
   let data = await response.json()
   console.log("data",data.message)
  } catch (error) {
   console.log(error)
  }
}

// getdata()

// Activity 5: Concurrent Promises
let promiseSix = Promise.resolve("Chai Aur Code")
let promiseSeven = 34
let promiseEight = new Promise((resolve,reject)=>{
    resolve("Hello Chai Aur Code")
})

// Promise.all([promiseSix,promiseSeven,promiseEight])
// .then((val)=>{
//     console.log("data",val)
// })
// .catch((err)=>{
//     console.log(err)
// })

promise1 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("First")
  }, 1000);
})

promise2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("Second")
  }, 1000);
})

Promise.race([promise1,promise2])
.then((msg)=>{
  console.log("Winner",msg)
})
.catch((err)=>{
  console.log(err)
})