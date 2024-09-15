 // event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()
 
//  start 
 
 const makeRequest=(method,url,Alldata)=>{
    const xhr=new XMLHttpRequest();
    xhr.open(method,url)

    xhr.setRequestHeader('Content-type','application/json');

    xhr.onload=()=>{
        const data =xhr.response;
        const singleData=JSON.parse(data);
        console.log(singleData);
        // for (const element of singleData) { // single data find 
        //     console.log(element.title);
        // }
    }
    xhr.onerror=()=>{
        console.log("here is error ");
    }
    xhr.send(JSON.stringify(Alldata));
 }
//  get data 

const getdata =()=>{
    makeRequest("GET","https://jsonplaceholder.typicode.com/posts/")
}
// getdata();
// send data 
 const sendData=()=>{
    makeRequest("POST","https://jsonplaceholder.typicode.com/posts/",{
    title: 'foo',
    body: 'bar',
    userId: 1,
    })
 }
//  sendData()
// updateData
const updateData=()=>{
    makeRequest("PUT","https://jsonplaceholder.typicode.com/posts/1",{
        title: 'THE foo BOOO',
        body: 'bar GEIL',
        userId: 1000000000000000,
        })
}
// updateData();
// updateSingleData()

const updateSingleData=()=>{
    makeRequest("PUT","https://jsonplaceholder.typicode.com/posts/1",{
        title: 'THE is change',
        })
}
// updateSingleData();
// delete data 

const deleteData=()=>{
    makeRequest("DELETE","https://jsonplaceholder.typicode.com/posts/1")
}
// deleteData();