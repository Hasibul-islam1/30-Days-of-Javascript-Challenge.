// tow storage system in our bosuare 
// local storage ,section stor 
console.log(localStorage);
// loalStorage.setitme("key","value");
localStorage.setItem("userName","Hasibul Islam");
localStorage.setItem("password","01833092059");
const userName=localStorage.getItem("userName");
console.log(userName);
const passward=localStorage.getItem("password");
console.log(passward);
localStorage.removeItem("password");
// localStorage.clear();
const firstName=["Hasibul","Islam","mirza","imam"]
localStorage.setItem("list",JSON.stringify(firstName));
const data =JSON.parse(localStorage.getItem("list"));
console.log(data);
