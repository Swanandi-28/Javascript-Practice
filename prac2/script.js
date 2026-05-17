const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  if (taskInput.value === "") {
    alert("Enter a task!");
    return;
  }

  createTask(taskInput.value, false);
  saveTasks();
  taskInput.value = "";
}

function createTask(text, completed) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.className = "delete-btn";

  deleteBtn.onclick = function () {
    li.remove();
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}



  
