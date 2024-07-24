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
const numbers =100;
let num=[];
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
for (let i = 0; i <= number; i++) {
    num.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log(num);