let task = [];
let inputTask = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", createTask);

function createTask() {
  let valueInput = inputTask.value.trim();

  if (valueInput === "") {
    alert(`Vui lòng nhập công việc`);
    return;
  }

  let newTask = {
    id: Date.now(),
    name: valueInput,
    status: false,
  };
  task.push(newTask);

  inputTask.value === "";
  inputTask.focus();
}
createTask();
