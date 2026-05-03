
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function AddTask() {
    if (taskInput.value === '') {
        alert("Please enter a task."); }
    else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
       "taskList".appendChild(li);
    }
}

