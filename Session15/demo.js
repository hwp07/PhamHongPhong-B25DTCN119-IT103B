// Mảng lưu task
const tasklist = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const completedCount = document.getElementById("completedCount");
const totalCount = document.getElementById("totalCount");
const completionStatus = document.getElementById("completionStatus");

// Event
addBtn.addEventListener("click", createTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

// Thêm task
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

// Render task
function renderTask() {
  taskList.innerHTML = "";

  if (tasklist.length === 0) {
    taskList.innerHTML = `
            <div class="empty-state">
                <div>📋</div>
                <div>Chưa có công việc nào. Hãy thêm công việc mới!</div>
            </div>
        `;
    updateFooter();
    return;
  }

  tasklist.forEach((task) => {
    const taskItem = document.createElement("div");

    taskItem.innerHTML = `
            <input type="checkbox" 
            ${task.status ? "checked" : ""} 
            onchange="toggleTask(${task.id})">

            <p id="task-${task.id}" 
            style="${task.status ? "text-decoration:line-through" : ""}">
            ${task.name}</p>

            <div>
                <button onclick="updateTask(${task.id})">✏️ Sửa</button>
                <button onclick="deleteTask(${task.id})">🗑️ Xóa</button>
            </div>
        `;

    taskList.appendChild(taskItem);
  });

  updateFooter();
}

// Update task
function updateTask(id) {
  const updateId = tasklist.find((task) => task.id === id);

  const textElement = document.getElementById(`task-${id}`);

  const input = document.createElement("input");
  input.value = updateId.name;

  textElement.replaceWith(input);

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "💾 Lưu";

  saveBtn.addEventListener("click", function () {
    const newValue = input.value.trim();

    if (newValue === "") {
      alert("Không được để trống");
      return;
    }

    updateId.name = newValue;

    renderTask();
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      saveBtn.click();
    }
    if (e.key === "Escape") {
      renderTask();
    }
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "❌ Hủy";

  cancelBtn.addEventListener("click", function () {
    renderTask();
  });

  input.after(saveBtn);
  saveBtn.after(cancelBtn);

  input.focus();
}

// Khi trang load
document.addEventListener("DOMContentLoaded", renderTask);

// Xóa task
function deleteTask(id) {
  const confirmDel = confirm(`Bạn có chắc muốn xóa task này?`);
  if (!confirmDel) {
    return;
  }

  const index = tasklist.findIndex((task) => task.id === id);

  if (index !== -1) {
    tasklist.splice(index, 1);
  }

  renderTask();
}

function toggleTask(id) {
  const task = tasklist.find((t) => t.id === id);

  if (task) {
    task.status = !task.status;
  }

  renderTask();
}

function updateFooter() {
  const total = tasklist.length;

  const completed = tasklist.filter((task) => task.status).length;

  totalCount.textContent = total;

  completedCount.textContent = completed;

  if (total > 0 && completed === total) {
    completionStatus.style.display = "inline";
  } else {
    completionStatus.style.display = "none";
  }
}
