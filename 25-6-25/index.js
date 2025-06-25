var taskToDo = document.getElementById("taskbar")
document.getElementById("btn").addEventListener("click",addTask)
function addTask(){
    var taskName =taskToDo.value
    if(taskName == ""){
        alert("Empty Input");
        return
    }
    var listItem= document.createElement("li");
    var spanTag= document.createElement("span");
    var delBtn=document.createElement("button");
    spanTag.textContent=taskName;
    delBtn.innerText="Delete";
    listItem.appendChild(spanTag)
    listItem.appendChild(delBtn)
    document.getElementById("tasklist").appendChild(listItem)
    delBtn.addEventListener('click' ,deleteTask)
}

function deleteTask(event){
    console.log(event.target.parentNode.remove())
}
document.getElementById("btn").addEventListener("keypress",function(e){
    if (e.key ==="Enter"){
        addTask()
    }
}
)


