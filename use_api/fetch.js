// // 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser

// start

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PATCH",
//     body: JSON.stringify({
//         itle: 'fooMMMMM',
//         userId: 10000000,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
// })
//     .then((res) => {
//         if (!res.ok) {
//             const message = `Error:${res.status}`;
//             throw new Error(message);
//         }
//         return res.json()
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// try to make it using a async await

const makeRequest=async(url,config)=>{
    const res= await fetch(url,config);
    const data=await res.json();
    return data;
}
// get data 
const getdata=()=>{
    makeRequest(`https://jsonplaceholder.typicode.com/posts/`)
    .then((res)=>console.log(res))
}
// getdata();
const getSingleData=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/", {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((res)=>console.log(res))
}
// getSingleData();
// updata data 

const updataData=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foomamamamam',
          body: 'bargogogogogo',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((res)=>console.log(res))
}
// updataData();

// delete
const deleteData=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1",{
        method:"DELETE",
    }
    )
      .then((res)=>console.log(res))
}
deleteData();