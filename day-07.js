// Day 7: Objects
// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
    let mybook={
        title:"amar book",
        author:"me",
        year:2024,
        getback:function(){
            return `this is full object title is ${this.title} and author is ${this.author} year is ${this.year}`
        },
        updateYear:function(newYear){
            this.year=newYear;
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
mybook.year=2300;
console.log(mybook);
mybook.updateYear(4500);
console.log(mybook);
// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
// • Task 6: Access and log the name of the library and the titles of all the books in the library.
// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
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