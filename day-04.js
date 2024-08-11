// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop
// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (i = 1; i <= 10; i++) {
    console.log(i)
}
// • Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (i = 1; i <= 10; i++) {
    console.log(`5x${i}=${i * 5}`);
}
// Activity 2: While Loop
// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let y = 1;
let sum = 0;
while (y <= 10) {
    console.log(sum, y)
    sum = sum + y;
    y++;
}
console.log(sum);
// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let z = 10;
while (z >= 1) {
    console.log(z)
    z--;

}
// Activity 3: Do...While Loop
// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let a = 1
do {
    console.log(a)
    a++;
} while (a <= 5);
// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let numbers=10;
let num=[];
let n1=0,n2=1,n3;
let b=1;
do {
    num.push(n1);
    n3=n1+n2;
    n1=n2;
    n2=n3;
    b++;
} while (b<=numbers);
// Activity 4: Nested Loops
// • Task 7: Write a program to print a pattern using nested for loops:(ignore color)
    for(let i =0;i<=5;i++){
        let pattern="";
        for(let j=0;j<=i;j++){
          pattern=pattern+"*"
        }
        console.log(pattern);
    }
    
// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
    for(let i =1;i<=10;i++){
        if(i===5){
            console.log("Hi")
            continue;
        }
        console.log(i);
    }
// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(let z=1;z<=10;z++){
    if(z===7){
        console.log("This is stop");
        break;
    }
    console.log(z)
}
// Feature Request:
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
// Achievement:
// By the end of these activities, students will:
// • Understand and use for loops to iterate over a sequence of numbers.
// • Utilize while loops for iteration based on a condition.
// • Apply do...while loops to ensure the loop body is executed at least once.
// • Implement nested loops to solve more complex problems.
// • Use loop control statements (break and continue) to control the flow of loops.