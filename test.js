const numbers =20;
let num=[];
let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
for (let i = 0; i <= numbers; i++) {
    num.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log(num);

// let numbers=10;
// let num=[];
// let n1=0,n2=1,n3;
// let b=1;
// do {
//     num.push(n1);
//     n3=n1+n2;
//     n1=n2;
//     n2=n3;
//     b++;
// } while (b<=numbers);
// console.log(num);
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         console.log(i,j);
//     }

// }
// Write a program to print a pattern using nested for loops
for(let i=5;i>=1;i--){
    let pattern="";
    for(let j=i;j>=1;j--){
      pattern=pattern+"*"
    }
    console.log(pattern);
}
