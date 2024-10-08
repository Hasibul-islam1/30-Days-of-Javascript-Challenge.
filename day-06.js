// Day 6: Arrays
// Activity 1: Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let number = [1, 2, 3, 4, 5];
console.log(number);
// • Task 2: Access the first and last elements of the array and log them to the console.
console.log(number[0]);
console.log(number[number.length - 1]);
console.log(number.length);
// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
number.push(6, 7);
console.log(number);
// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
number.pop();
console.log(number);
// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
number.shift();
console.log(number);
// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
number.unshift(1);
console.log(number);
// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let dubble = number.map((x) => x * 2);
console.log(dubble);
// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evens = number.filter(num => num % 2 === 0);
console.log(evens);
console.log(number);
// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum=number.reduce((total,num)=>total+num,0)
console.log(sum);
// Activity 4: Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i =0;i<number.length;i++){
    console.log(number[i])
}
// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
number.forEach(element => {
    console.log(element);
});
// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix[2][2]);
console.log(matrix[1][1])
// • Task 13: Access and log a specific element from the two-dimensional array.
let cabe=[
    [
    [1,2,3],
    [4,5,6],
    [7,8,9]
],
[
    [10,11,12],
    [13,14,15],
    [16,17,18]
]
]
console.log(cabe[1][1][2]);
console.log(cabe[0][0][2])
// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.
// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
// Achievement:
// By the end of these activities, students will:
// • Create and manipulate arrays using various methods.
// • Transform and aggregate array data using map, filter, and reduce.
// • Iterate over arrays using loops and iteration methods.
// • Understand and work with multi-dimensional arrays.