// get data 
axios
.get("https://jsonplaceholder.typicode.com/posts/1")
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));
// // add data
axios
.post("https://jsonplaceholder.typicode.com/posts/",{
    method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
})
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err))

// change data 

axios
.put("https://jsonplaceholder.typicode.com/posts/1",{
    method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foomamama',
    body: 'bari',
    userId: 1,
})
})
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err))

// updata single data 
axios
.patch("https://jsonplaceholder.typicode.com/posts/1",{
    method: 'PATCH',
  body: JSON.stringify({
    id: 34
   
})
})
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err))

// delete data 
axios
.delete('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err))


const makeRequest=async(config)=>{
    return await axios(config)
}
const getdata=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1")
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
}
getdata();

const addData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/',{
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })})
  .then((res)=>console.log(res.data))
  .catch((err)=>console.log(err))
}
addData();

const updataSingleData=()=>{
  makeRequest("https://jsonplaceholder.typicode.com/posts/1",{
    method: 'PATCH',
  body: JSON.stringify({
    body:"...."
   
})
})
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err))
}
updataSingleData();

// delete data 
const deleteData =()=>{
  makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err))
}
deleteData();