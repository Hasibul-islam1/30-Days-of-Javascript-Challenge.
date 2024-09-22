// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const status=false;
    const myPromise=new Promise((resolve,reject)=>{
        setTimeout(() => {
        if(status){
            resolve("Hi");
        }
        else{
            reject("hellow");
        } 
        },2000);
    })
    myPromise 
    .then((value)=>{
        console.log(value);
    })
// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
    .catch((value)=>{
        console.log(value)
    })
// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
       function fetchData(step,time) {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(`Data from step ${step} fetched`)
            },time)
        })
       }
       fetchData(1,1000)
       .then((message)=>{
        console.log(message);
        return fetchData(2,2000);
       })
       .then((message)=>{
        console.log(message);
        return fetchData(3,4500);
       })
       .then((message)=>{
        console.log(message);
        return fetchData(4,3000);
       })
       .then((message)=>{
        console.log(message);
        console.log("all message done ");
       })
       .catch((err)=>{
        console.log(err);
       })
    //    another way to solve 
    
    // Function to simulate fetching data from a server
function fetchData(message, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, delay);
    });
  }
  
  // Chain promises to log messages in a specific order
  fetchData('Fetching user data...', 1000)
    .then(() => fetchData('User data received.', 500))
    .then(() => fetchData('Processing user data...', 1500))
    .then(() => fetchData('User data processed.', 1000))
    .then(() => fetchData('Fetching additional data...', 2000))
    .then(() => fetchData('Additional data received.', 500))
    .then(() => fetchData('All tasks completed!', 500))
    .catch((error) => console.error('An error occurred:', error));
  
// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
    function makeMessage(message) {
        return new Promise((resolve,reject)=>{
            resolve(message);
        })
    }
    async function callmessage() {
        const firstMessage= await makeMessage("Hi i am hear");
        console.log(firstMessage);
    }
    callmessage();
// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const HasibulTask=()=>{
    return new Promise((resolve,reject)=>{
      resolve("Hasibul Task done");
    })
  }
  const SamiTask=()=>{
    return new Promise((resolve,reject)=>{
      resolve("Sami Task done");
    })
  }
  const PasntoTask=()=>{
    return new Promise((resolve,reject)=>{
      reject("Pranto Task done");
    })
  }
  const PoragTask=()=>{
    return new Promise((resolve,reject)=>{
      resolve("Porag Task done");
    })
  }
  async function callAll(){
  try{
    const t1=await HasibulTask();
    console.log(t1);
    const t2=await SamiTask();
    console.log(t2);
    const t3=await PasntoTask();
    console.log(t3);
    const t4=await PoragTask();
    console.log(t4);
  }
  catch(err){
    console.log("ERROR:",err);
  }
  }
  callAll();
// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
   const makeRequest=async(url)=>{
    const res= await fetch(url)
    const data= await res.json();
    return data;
   }
   const getdata=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/")
    .then((res)=>console.log(res))
   }
   getdata();
// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise. race to handle multiple promises concurrently and logs the results.
// Achievement:
// By the end of these activities, students will:
// • Understand and create promises, including handling resolved and rejected states.
// • Chain multiple promises to perform sequential asynchronous operations.