const list = document.getElementById("tasksList");
const noList = document.getElementById("noTask");
const taskForm = document.getElementById("taskForm");


function checkTheNoTaskDescription() {
    if(list.childElementCount == 0){
        noList.hidden = false;
    } else {
        noList.hidden = true;
    }
    
}

function addTask(event) {

    //prevents page from loading (its default behavior)
    event.preventDefault();

    //getting the task and checking it's not empty

    const taskTitle = document.getElementById("name");
    const taskContent = document.getElementById("content");

    
    if(taskTitle.value.trim() ==="" || taskContent.value.trim() ==="") return;
    const task = taskTitle.value.trim() + ": " + taskContent.value.trim();

    const li = document.createElement("li");
    li.textContent = task;

    //create a delete button for each individual task
    const deleteB = document.createElement("button");
    deleteB.classList.add('deleteB');
    deleteB.textContent = " ❌ ";
    deleteB.onclick = function() {
        list.removeChild(li);
        checkTheNoTaskDescription();
    }

    //removing the no task div
    noList.hidden = true;


    //adding the task
    //li has the button element, and list has the li element
    li.appendChild(deleteB);
    li.classList.add('taskAndButton');
    list.appendChild(li);

    //resetting the inputs
    taskTitle.value = "";
    taskContent.value = "";
}

taskForm.addEventListener("submit", addTask);
document.getElementById("clear").addEventListener("click", function() {
    list.innerHTML = "";
    checkTheNoTaskDescription();
})