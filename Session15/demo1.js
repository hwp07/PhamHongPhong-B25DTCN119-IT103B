const tasklist = [];
let taskIdCounter = 1;

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const completedCount = document.getElementById("completedCount");
const totalCount = document.getElementById("totalCount");

addBtn.addEventListener("click", createTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

function createTask() {
  const valueInput = taskInput.value.trim();

  if (valueInput === "") {
    alert("Please enter a task");
    return;
  }

  let newTask = {
    id: Date.now(),
    name: valueInput,
    status: false,
  };

  tasklist.push(newTask);

  taskInput.value = "";
  taskInput.focus();

  renderTask();
}

function renderTask() {
  taskList.innerHTML = "";

  if (tasklist.length === 0) {
    taskList.innerHTML = `
      <div class="empty-state">
        <div>📋</div>
        <div>Chưa có công việc nào. Hãy thêm công việc mới!</div>
      </div>
    `;
    totalCount.textContent = 0;
    completedCount.textContent = 0;
    return;
  }

  tasklist.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    taskItem.innerHTML = `
      <input type="checkbox" ${task.status ? "checked" : ""}>
      <span>${task.name}</span>
      <div>
        <button class="btn-delete">🗑️ Xóa</button>
      </div>
    `;

    // Checkbox event
    const checkbox = taskItem.querySelector("input");
    checkbox.addEventListener("change", () => {
      task.status = checkbox.checked;
      updateCounter();
    });

    // Delete event
    const deleteBtn = taskItem.querySelector(".btn-delete");
    deleteBtn.addEventListener("click", () => {
      const index = tasklist.findIndex((t) => t.id === task.id);
      tasklist.splice(index, 1);
      renderTask();
    });

    taskList.appendChild(taskItem);
  });

  updateCounter();
}

function updateCounter() {
  const total = tasklist.length;
  const completed = tasklist.filter((task) => task.status).length;

  totalCount.textContent = total;
  completedCount.textContent = completed;
}
