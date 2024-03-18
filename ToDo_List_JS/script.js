const input = document.querySelector('#input-box');
const List_Container = document.querySelector('#list_container');


function addTask(){
    if(input.value === ''){
        alert("You Must Write Something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        List_Container.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    input.value="";
    saveData();
}

List_Container.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", List_Container.innerHTML);
}

function showData(){
   List_Container.innerHTML= localStorage.getItem("data")
}

showData(); 