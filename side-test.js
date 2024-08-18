// sowipe a variable value 
let a=3;
let b=8;
let c;
c=a;
a=b;
b=c;
console.log(a,b,c);
[a,b]=[8,3];
console.log(a,b)
// slice a string 
let names="Hasibul Islam";
let count =names.slice(0,8);
console.log(count);
// chang the first chart 
let word="southeast";
let firstchr=word.slice(0,1);
let makeUpper=firstchr.toUpperCase();
let lastChr=word.slice(1,word.length)
let makeLower=lastChr.toLowerCase();
let makeChange=makeUpper+makeLower;
console.log(makeChange);
//  find a person day and month and weeks
function lifeInWeeks(age) {
    let weeks=52;
    let day=365;
    let month=12;
    console.log("Day is "+ age*day + " weeks is " + age*weeks + " month is " + month*age );
}
lifeInWeeks(10);

// BMI Calculater
function personData(weight,hight) {
    let hights=hight*hight;
    let BMI=weight/hights;
    return BMI;
}
let Hasibul=personData(65,1.8);
console.log(Hasibul);

let number=Math.random()*10;

console.log(Math.floor(number));

// pick a single person going the dinner 

let allperson=["hasibul","sami","noyon",'hasib',"shakil",'liton','ripon'];
function findOne(person) {
    let Findnumber=Math.random()*(person.length);
    let mainNumber=Math.floor(Findnumber)
    let findPerson = person[mainNumber];
    console.log(findPerson);
    console.log(mainNumber);
}
findOne(allperson);
// fibonacci chelange

// function fibonacci(n) {
//     for(let i=0;i<=n;i++){
       
//     }
// }
// fibonacci(10);
const numbers =10;
let num=[];
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
for (let i = 0; i <= numbers; i++) {
    num.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log(num);
// find month name using js built in function 
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const d = new Date();
//   document.write("The current month is " + monthNames[d.getMonth()]);
console.log(monthNames[d.getMonth()]);
console.log(d);

// if else using in switch case
let x = 100.009;
let y = 100.001;
let z = 100.001;
let largest;
if ((x >= y) && (x >= z)) {
    // console.log("x is largest number")
    largest='x';
}
else if ((z <= y) && (x <= y)) {
    // console.log("y is lergest number")
    largest='y';
}
else {
    // console.log("z is largest number")
    largest='z';
}
switch (largest) {
    case 'x':
        console.log("x is the largest number");
        break;
    case 'y':
        console.log("y is the largest number");
        break;
    case 'z':
        console.log("z is the largest number");
        break;
    default:
        console.log("Error: unable to determine the largest number");
}
// marking system 
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
// Create a new div element with some text content and append it to the body.
// Create a new div element
const newDiv = document.createElement('div');

// Add some text content to the div
newDiv.textContent = 'Hello, this is a new div element!';

// Optionally, style the div
newDiv.style.padding = '20px';
newDiv.style.backgroundColor = 'lightcoral';
newDiv.style.color = 'white';
newDiv.style.fontSize = '20px';
newDiv.style.textAlign = 'center';

// Append the new div to the body
document.body.appendChild(newDiv);
