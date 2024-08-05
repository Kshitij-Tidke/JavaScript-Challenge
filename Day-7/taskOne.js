// Day 7: Objects

// Activity 1: Objectt creation and access
// Task 1:
const book = {
  title: "Chai aur Code",
  author: "Hitesh Choudhary",
  year: 2024,
};
// console.log(book);
// Task 2:
// console.log(`The title of book is ${book.title} and author is ${book["author"]}`);

// Activity 2: Object Methods
// Task 3:
book.info = function () {
  console.log(
    `The title of book is ${this.title} and author is ${this["author"]}`
  );
};
// book.info()

// Task 4:
book.updateYear = function (year) {
  // console.log(`Updated year is ${year}`);
};
book.updateYear(2025);
// console.log(book);

// Activity 3: Nested Objects
// Task 5:
const library = {
  name: "City Central Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851,
    },
  ],
};
// console.log(library);

// Task 6:
// console.log(`name of library is ${library["name"]}`);
library.books.forEach((book) => {
  // console.log(`Title of book is ${book.title} and author is ${book.author}`);
});

// Activity 4: The This Keyword
// Task 7:
library.books.forEach((book) => {
  book.titleYear = function () {
    return `Name of book is ${this.title} and publish in ${this.year}`;
  };
});

library.books.forEach((book) => {
  // console.log(book.titleYear());
});

// Activity 5: Object Iteration
// Task 8:
const books = {
  book1: {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genre: "Fiction",
  },
  book2: {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
    genre: "Dystopian",
  },
  book3: {
    title: "Moby-Dick",
    author: "Herman Melville",
    yearPublished: 1851,
    genre: "Adventure",
  },
  book4: {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
    genre: "Romance",
  },
};
for (const book in books) {
  if (books.hasOwnProperty(book)) {
    for (const prop in books[book]) {
      if (books[book].hasOwnProperty(prop)) {
        console.log(`${prop}: ${books[book][prop]}`);
      }
    }
  }
}
