// Day 01 variables and Data type
// Task 01:Declare a variable using Var , assing it a number , and log the value to the console .
var a =100;
console.log(a);
var b = 200;
console.log(b);
// Task 02: Declare a variable using let , assing it a string and log the value to the console .
 let name ="Hasibul Islam";
 console.log(name);
 let nickName ="Shakil";
 console.log(nickName);
// Task 03:Declare a variable using const , assing it a boolean value , and log the value to the console .
const meBoy=true;
console.log(meBoy);
const check =10<20;
console.log(Boolean(check));
const find = 12>90;
console.log(find)
const negative =-123;
console.log(Boolean(negative));
// Task 04:Create variables of different data type (number,array, strig ,boolean , ovject)and log each variable's type using the Typeof operator.
let roll=202310010134;
console.log(typeof roll);
let list =[23,56,23,78,90];
console.log(Array.isArray(list)); //only true and false
let address="Dhaka";
console.log(typeof address);
let y = false;
console.log(y);
let me={
    name:"Hasibul",
    roll:45
}
console.log(typeof me);
// task 05:Declare a varivles using let , assing it an initial value , reassing a new value , and log both values to the console .
let z= 10;
console.log(z);
z=20;
console.log(z);
//  task 06:try reassinging a variable declares with const and observe the error.
const r=2000;
r=300;
console.log(r);


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:Hasibul-islam1/30-Days-of-Javascript-Challenge..git
// git push -u origin main