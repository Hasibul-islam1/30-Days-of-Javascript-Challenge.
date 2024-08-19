// Day 9: DOM Manipulation
// Tasks/Activities:
// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("line").innerText="Hey i am Hasibul Islam";
// • Task 2: Select an HTML element by its class and change its background color.
let chang=document.getElementsByClassName("list");
console.log(chang);
for(const element of chang) {
    let randomcolor=Math.floor(Math.random()*16777215).toString(16);
     element.style.backgroundColor ="#"+randomcolor;
    console.log(element);
}
// Activity 2: Creating and Appending Elements
// • Task 3: Create a new div element with some text content and append it to the body.
    let getBody=document.getElementsByTagName("body");
    // console.log(getBody);
    let makediv=document.createElement("div");
    getBody[0].appendChild(makediv);
    makediv.style.background="red";
    makediv.style.height="100px";
    let makeP=document.createElement("h2");
    makeP.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae tempora recusandae facilis ea nihil impedit pariatur iusto nam incidunt ducimus"
    makediv.appendChild(makeP);
// • Task 4: Create a new li element and add it to an existing ul list.
    let getUl=document.getElementById("unoder-list");
    for(let i=1;i<5;i++){
        let makelist=document.createElement("li");
        makelist.innerText=`now number is ${i}`;
        getUl.appendChild(makelist);
    }
// Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.
    let deletes =document.getElementById("delete");
    deletes.remove()
// • Task 6: Remove the last child of a specific HTML element.
getUl.lastChild.remove();
// Activity 4: Modifying Attributes and Classes
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
    let img=document.getElementById("myimg");
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPuiJmJPHb-4ES2ESNMTU61N2Y1-vANe2w&s";
// • Task 8: Add and remove a CSS class to/from an HTML element.
let a=document.getElementById("unoder-list");
a.classList.add("singleLine");
a.classList.remove("singleLine");
// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.
function hitme() {
    document.getElementById("hare").textContent="hit me few minute ago";
}
// • Task 10: Add a mouseover event listener to an element that changes its border color.
    document.getElementById("round").addEventListener("mouseover",()=>{
        let randomcolor=Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("round").style.backgroundColor ="#"+randomcolor;
    })
    document.getElementById("round").addEventListener("mouseout",()=>{
        document.getElementById("round").style.background="Black";
    })
// Feature Request:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions. 
// Achievement:
// By the end of these activities, students will:
// • Select and manipulate DOM elements using JavaScript.
// • Create and append new elements to the DOM.
// • Remove elements from the DOM.
// • Modify attributes and classes of HTML elements.
// • Add and handle events to make web pages interactive.