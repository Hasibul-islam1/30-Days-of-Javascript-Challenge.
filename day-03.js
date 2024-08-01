// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let a = 10;
if ((a == 0)) {
    console.log("ZERO");
}
else if ((a > 0)) {
    console.log("Positive");
}
else {
    console.log("Negative");
}
// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let person = 20;
if (person >= 18) {
    console.log("He is 18 years old and eligible to vote ")
} else {
    console.log("He is not 18")
}
// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let x = 100.009;
let y = 100.001;
let z = 100.001;
if ((x >= y) && (x >= z)) {
    console.log("x is largest number")
}
else if ((z <= y) && (x <= y)) {
    console.log("y is lergest number")
}
else {
    console.log("z is largest number")
}
// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = new Date().getDay();
switch (day) {
    case 0:
        console.log("to day saturday")
        break;
    case 1:
        console.log("to day sunday")
        break;
    case 2:
        console.log("to day monday")
        break;
    case 3:
        console.log("to day tuseday")
        break;
    case 4:
        console.log("to day wednesday")
        break;
    case 5:
        console.log("to day thursday")
        break;
    case 6:
        console.log("to day Friday")
        break;

    default:
        console.log("invalid day ")
        break;
}
// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let mark = 69;
let grade;
if (mark>=80 && mark<=100) {
    grade='A+';
    // console.log("A+")
}
else if(mark>=70 && mark<=79){
    grade='A';
//     console.log("A");
 }
else if(mark>=60 && mark<=69){
    grade='A-';
    // console.log("A-");
}
else if(mark>=50 && mark<=59){
    grade='B';
    // console.log("B");
}
else if(mark>=40 && mark<=49){
    grade='C';
    // console.log("C");
}
else if(mark>=33 && mark<=39){
    grade='D';
    // console.log("D");
}
 else {
    grade='F';
    // console.log("this student are fail")
}
// console.log(grade);
switch (grade) {
    case 'A+':
        console.log(`mark is ${mark} and grade A+`)
        break;
    case 'A':
        console.log(`mark is ${mark} and grade A`)
        break;
    case 'A-':
        console.log(`mark is ${mark} and grade A-`)
        break;
    case 'B':
        console.log(`mark is ${mark} and grade B`)
        break;
    case 'C':
        console.log(`mark is ${mark} and grade C`)
        break;
    case 'D':
        console.log(`mark is ${mark} and grade D`)
        break;
    case 'F':
        console.log(`mark is ${mark} and grade F`)
        break;

    default:
        console.log("Result is not found ");
        break;
}
// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let Num=247;
let findType=Num%2===0?"even":"odd";
console.log(findType);
// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2024;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("this leap year", year)
        } else {
            console.log("this not leap year")
        }
    } else {
        console.log("this is leap year", year)
    }
}
else {
    console.log("this not leap year")
}
// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
// Achievement:
// By the end of these activities, students will:
// • Implement and understand basic if-else control flow.
// • Use nested if-else statements to handle multiple conditions.
// • Utilize switch cases for control flow based on specific values.
// • Apply the ternary operator for concise condition checking.
