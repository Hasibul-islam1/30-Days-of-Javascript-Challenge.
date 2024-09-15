// Day 7: Objects
// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let mybook = {
    title: "amar book",
    author: "me",
    year: 2024,
    getback: function () {
        return `this is full object title is ${this.title} and author is ${this.author} year is ${this.year}`
    },
    updateYear: function (newYear) {
        this.year = newYear;
    }
}
console.log(mybook);
// • Task 2: Access and log the title and author properties of the book object.
console.log(mybook.title);
console.log(mybook.author);
// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
console.log(mybook.getback())
console.log(JSON.stringify(mybook));
// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
mybook.year = 2300;
console.log(mybook);
mybook.updateYear(4500);
console.log(mybook);
// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name: "City Central Library",
    address: "Dhaka Bangladesh",
    book: [
        {
            BookName: "Bisher Bashi",
            author: "Kazi Nazrul Islam",
            publish: 1930
        },
        {
            BookName: "Himu",
            author: "Humayun Ahmed",
            publish: 1993
        },
        {
            BookName: "Nokhshi Khathar Mat",
            author: "Joshim Uddin",
            publish: 1929
        }
    ],
    closeLivary: function () {
        return `name is ${this.name} and address ${this.address} famuse author ${this.book[0].author}`;
    },
}
console.log(library);
console.log(library.closeLivary());
// • Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
let bookName = library.book;
console.log(bookName);
bookName.forEach(element => {
    console.log(element.author);
})
// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
library.nazrulBook = function () {
    return `BookName is ${this.book[0].BookName} and publish is ${this.book[0].publish}`
}
console.log(library.nazrulBook());
console.log(library);
// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const key in library) {
    if (library.hasOwnProperty(key)) {
        console.log(`${key}: ${library[key]} 100`);
    }
    // console.log(key);
    // console.log(library[key],100);
}
// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
let hellow = Object.keys(library);
console.log(hellow);
let gelo = Object.values(library);
console.log(gelo);
// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and object.keys / Object.values.
// Achievement:
// By the end of these activities, students will:
// • Create and manipulate objects with properties and methods.
// • Understand and use the this keyword in object methods.
// • Work with nested objects and arrays of objects.
// • Iterate over an object's properties using loops and built-in methods.