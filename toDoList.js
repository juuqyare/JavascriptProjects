
let form = document.querySelector("#form");
let tasks = document.querySelector("#tasks");

//add event listener
form.addEventListener("submit", addTask);
tasks.addEventListener("click", removeTask);

//add task function
function addTask(e) {
    e.preventDefault();

    let inputTask = document.querySelector("#inputTask").value;

    //create element
    let li = document.createElement("li");
    li.className = "task-group";
    //append input value into li
    li.append(document.createTextNode(inputTask));
    //append li into ul(tasks)
    tasks.append(li);

    //create deleteBtn
    let deleteBtn = document.createElement("button");

    //assign to a class
    deleteBtn.className = 'delete';
    //append text to deleteBtn
    deleteBtn.append(document.createTextNode("X"));
    //append deleteBtn to li
    li.append(deleteBtn);

    //create seperate line (hr)
    let sepLine = document.createElement('hr');
    //append hr into ul
    li.append(sepLine);
}

//remove task function
function removeTask(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')) {
            let task = e.target.parentElement;
            tasks.removeChild(task);
        }
    }
}


