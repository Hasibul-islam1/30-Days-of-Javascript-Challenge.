// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
    function findNumber(number) {
        if (number%2===0) {
            console.log(`${number} is even`);
        }
        else{
            console.log(`${number} is odd`);
        }
    }
    findNumber(20);
    findNumber(25);
// • Task 2: Write a function to calculate the square of a number and return the result.
    function square(number) {
        let a=number*number;
        return a;
    }
    let sqr=square(9);
    console.log(sqr);
// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
    function MaxNumber(num1=10,num2=20) {
      if (num1<num2) {
        console.log(`${num1} and ${num2} is number so ${num2} is maximum`);
      }  
      else if(num1===num2){
        console.log(`${num1} and ${num2} is number so Both are equle`);
      }
      else{
        console.log(`${num1} and ${num2} is number so ${num1} is maximum`);
      }
    }
    MaxNumber(10000,100);
// • Task 4: Write a function expression to concatenate two strings and return the result.
    function NameAdd(FirstName,LastName) {
        let addName=`${FirstName} ${LastName}`;
        return addName;
    }
    let myName=NameAdd("Hasibul","islam");
    console.log(myName);
// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
    let sum=(a,b)=>a+b;
    console.log(sum(10,100));
// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
    let check=(word)=>{
        let find=word.includes("a");
        return find

    }
    let findWord=check("Hellowa");
    console.log(findWord);
// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
    function TowNumbers(num1,num2=20) {
        return num1+num2;
    }
    let add=TowNumbers(10);
    console.log(add);
// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
    function greet(Name,age=18) {
        return `Hellow ${Name}! you are ${age} years old`;
    }
    let me=greet("Hasibul",23);
    console.log(me);
    console.log(greet("Alise"));
// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
// Achievement:
// By the end of these activities, students will:
// • Understand and define functions using function declarations, expressions, and arrow functions.
// • Use function parameters and default values effectively.
// • Create and utilize higher-order functions.
// • Apply functions to solve common problems and perform calculations.
// • Enhance code reusability and organization using functions.