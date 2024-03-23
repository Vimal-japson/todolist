const cont = document.getElementById("cont");
const input = document.getElementById("textbox");
const container = document.getElementById("list_container");
const mybutton = document.getElementById("sumbit");
const cl = document.getElementsByName("span");

mybutton.addEventListener("click",e=>{

    if(input.value===""){
        alert("Add some tasks....")
    }
    else{
    var element = document.createElement("li");
    element.innerText = input.value;
    container.appendChild(element);
    input.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    element.appendChild(span);
   


    element.addEventListener("click", e => {
        element.classList.add("checked"); 
    }) 
   

    span.addEventListener("click", e =>{
        element.remove();
         
    })
   
}
})









