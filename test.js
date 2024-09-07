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

// call back function 
// make a calcuter use a call back function 
// ekta function ar maje ono ekta function ke peramitar hishbe line oi ta ke call back function bole 
 function show(result) {
    console.log(result);
 }
function calculation(nam1,num2,callback) {
  console.log(nam1,num2);
  setTimeout(() => {
    let sum=nam1+num2;
    callback(sum);
  },3000);

}
calculation(20,20,show);

// anunimas data 
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
      console.log("Data fetched!");
      callback("Fetched data");
  }, 5000);
}

function processData(data) {
  console.log("Processing " + data);
}

// Fetch data and process it after fetching
fetchData(processData);


// setInterval and setTimeout both are asynchronous javascript 
console.log("hellow1");
setTimeout(()=>{
  console.log("hellow2");
},2000);
console.log("hellow3");

// couse enrollment proces in js call back 

function courseEnrollment(money, callback) {
  if (money === 3500) {
      console.log("Course Enrolled");
      callback(); // Call the next step in the process
  } else {
      console.log("Insufficient funds. Cannot enroll in the course.");
  }
}

function assessmentMark(num, callback) {
  if (num >= 80) {
      console.log("Ready to get certified");
      callback(); // Call the next step in the process
  } else {
      console.log("Insufficient marks. Cannot get certified.");
  }
}

function complete() {
  console.log("Take a certificate");
}

// Starting the enrollment process
courseEnrollment(3500, () => {
  assessmentMark(85, complete);
});
// promise 
let status=false;
console.log("Task 01");
// promise difination 
const myPromise=new Promise((resolve,reject)=>{
  setTimeout(() => {
    if(status){
     resolve("Task 02");
    }
    else{
     reject("Failed");
    }
     
   }, 3000);
})
// promise call 
myPromise
.then((value)=>{
  console.log(value);
})
.catch((value)=>{
  console.log(value);
})

console.log("task 03");

// try anather call back funcation 
 const taskOne=(callback)=>{
  console.log("hellow1");
  callback();
 }
 const taskTow=(callback)=>{
  setTimeout(()=>{
  console.log("hellow2")
  callback();
  },6000)
 }
 const taskThree=()=>{
  console.log("Hellow3");
 }
taskOne(()=>{
  taskTow(()=>{
    taskThree();
  })
})

// try promicse 

const OneTask=()=>{
  return new Promise((resolve,reject)=>{
    resolve("taskOne done")
  })
}
const TowTask=()=>{
  return new Promise((resolve,reject)=>{
    resolve("taskTow done")
  })
}
const ThreeTask=()=>{
  return new Promise((resolve,reject)=>{
    resolve("taskThree done")
  })
}
const FourTask=()=>{
  return new Promise((resolve,reject)=>{
    resolve("taskFour done")
  })
}
OneTask()
.then((res)=>{
  console.log(res);
  return TowTask();
})
.then((res)=>{
  console.log(res);
  return ThreeTask();
})
.then((res)=>{
  console.log(res);
  return FourTask();
})
.then((res)=>{
 console.log(res);
 console.log("all task complete");
})