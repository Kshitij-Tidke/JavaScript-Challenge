// Day 12: Error Handling

// Activity 1: Basic Error Handling with try-catch

// Task 1: write a function that intentionally throws an error and use a try-catch block t handle the error
function errorOne() {
  throw new Error("Error one");
}

function handleErrorOne() {
  try {
    errorOne();
  } catch (error) {
    console.error("ERROR:", error.message);
  } finally {
    console.log("Execution completed, error handled.");
  }
}
// handleErrorOne()

// Task 2: create a function that divides two numbers and throws an error if the denominator is zero use a try-catch blocks to handle this error
function divideNum(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed!");
  }
  return numerator / denominator;
}

function safeDivide(numerator, denominator) {
  try {
    const result = divideNum(numerator, denominator);
    console.log("Result: ", result);
  } catch (error) {
    console.error("Error", error.message);
  }
}

// safeDivide(0,0)

// Activity 2: Finally Block
// Task 3: write a script that includes a try-catch bloack and finally log. message in the try,catch and finally block to observe the execution flow.

function executeScript() {
  try {
    console.log("Inside the try block.");
    // Intentionally throwing an error to observe the flow
    throw new Error("Something went wrong!");
    // This line won't be executed because of the above error
    console.log("This line will not be executed.");
  } catch (error) {
    console.log("Inside the catch block.");
    console.log("Error caught: ", error.message);
  } finally {
    console.log("Inside the finally block. Execution completed.");
  }
}
// executeScript();

// Activity 3: Custom Error Objects
// Task 4: create a custom error class that extends the builds in error class. Throw an instance of this custom error in function and handle it using try-catch.

class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "customError";
  }
}

function errorMsg() {
  throw new customError("This is a custom error!");
}

function handleError() {
  try {
    errorMsg();
  } catch (error) {
    if (error instanceof customError) {
      console.error("Custom error: ", error.message);
    } else {
      console.error("Unexpected error: ", error);
    }
  } finally {
    console.log("Error handling completed.");
  }
}

// handleError()

// Task 5: write a function that validates user input (E.g checking if a string is not empty) and throws a ciustom error if the validation fails. Handle the custom error using try-catch

class validationError extends Error {
  constructor(message) {
    super(message);
    this.name = "validationError";
  }
}

function validateInput(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new validationError("Input cannot be empty or just whitespace.");
  }
  console.log("Input is valid:", input);
}

function handleUserInput(input) {
  try {
    validateInput(input);
  } catch (error) {
    if (error instanceof validationError) {
      console.error("Validation error caught: ", error.message);
    } else {
      console.error("An unexpected error occurred: ", error);
    }
  } finally {
    console.log("Validation process completed.");
  }
}

// handleUserInput("Hello!");

// Activity 4: Error Handling in Promises
// Task 6: create a promise that randomly resolves or rejects. Use .catch to handle the rejection and log an appropriate message to the console
const promiseOne = new Promise((resolve, reject) => {
  let num = Math.random() * 10;
  setTimeout(() => {
    if (num < 5) {
      resolve("The operation was successful!");
    } else {
      reject(new Error("The operation failed!"));
    }
  }, 1000);
});

// promiseOne
// .then((message) => console.log("Resolved:",message))
// .catch((message) => console.log("Rejected:",message))

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects
function randomPromise() {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;
    setTimeout(() => {
      if (isSuccess) {
        resolve("The operation was successful!");
      } else {
        reject(new Error("The operation failed!"));
      }
    }, 1000);
  });
}

async function handleRandomPromise() {
  try {
    const result = await randomPromise();
    console.log("Resolved:", result);
  } catch (error) {
    console.error("Caught an error:", error.message);
  } finally {
    console.log("Async operation completed.");
  }
}

// handleRandomPromise();

// Activity 5: Graceful Error Handling in fetch
// Task 8: use the fetch api to request data from an invalid url and handle error using catch
fetch("https://invalid-url.example.com")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return res.json();
  })
  .then((data) => console.log("Data received:", data))
  .catch((error) => console.error("Caught an error:", error.message));

// Task 9: use the fetch api to request data from an invalid url within an async funtion and handle the error using try catch 
async function handleApi() {
  try {
    const res = await fetch("https://invalid-url.example.com");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}
// handleApi()