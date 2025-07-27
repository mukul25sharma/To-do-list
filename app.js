let inp= document.querySelector("input");
let ul= document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {

let list =document.createElement("li");
list.innerText = inp.value;


let dltbtn = document.createElement("button");
dltbtn.innerText="delete";
dltbtn.classList.add("delete");



ul.appendChild(list);
list.appendChild(dltbtn);
inp.value="";

});
  
// ul.addEventListener("click", function (event) {
//     if (event.target.nodeName == "button"){
//     let listitem = event.target.parentElement;
//     listitem.remove();
//  console.log("deleted");
//     }
   
   ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") //nodeName return tag in uppercase thats why BUTTON
    {
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});


         
 // console.log(event.target.nodeName);// helps code to know which one is trigered the event here kisne click kiya h