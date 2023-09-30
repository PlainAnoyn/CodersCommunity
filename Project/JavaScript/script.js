//for comment add and remove
const inputBox=document.getElementById("input-box")
const listContainer =document.getElementById("list-container")
function addcmt( ){
if (inputBox.value ===''){
    alert("please Add your text first!");
}else{
    let li =document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span)
}
inputBox.value =""
saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()

//text auto writere

const text =document.querySelector(".sec-text");
const textLoad=()=>{
    setTimeout(()=>{
        text.textContent="Hello!"
    },0);
    setTimeout(()=>{
        text.textContent="Welcome "
    },4000);
    setTimeout(()=>{
        text.textContent="To NBA"
    },8000);
}
textLoad();
setInterval(textLoad,12000);
