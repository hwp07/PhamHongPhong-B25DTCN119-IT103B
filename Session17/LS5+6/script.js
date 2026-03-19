const initialTodos = [
  { id: 1, task: "Mua bánh chưng", done: true },
  { id: 2, task: "Dọn nhà đón Tết", done: true },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
  { id: 5, task: "Mua phong bao lì xì", done: false },
  { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false },
];

let todos = [];

const todoList = document.getElementById("todoList");
const searchInput = document.getElementById("search-Input");
const addBtn = document.getElementById("addBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

function loadTodos() {
  const data = localStorage.getItem("myTodos");
  todos = data ? JSON.parse(data) : initialTodos;
  localStorage.setItem("myTodos", JSON.stringify(todos));
}

function saveTodos() {
  localStorage.setItem("myTodos", JSON.stringify(todos));
}

// render task
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    todoList.innerHTML += `
      <div class="todo-item ${todo.done ? "done" : ""}" id="${todo.id}">
        <div class="circle"></div>
        <div class="task">${todo.task}</div>
        <div class="actions">
          <button class="edit" id="${todo.id}">✏️</button>
          <button class="delete" id="${todo.id}">🗑️</button>
        </div>
      </div>
    `;
  });
  updateStats();
}

todoList.addEventListener("click", function (e) {
  // delete
  if (e.target.classList.contains("delete")) {
    if (!confirm("Bạn có chắc chắn muốn xóa nhiệm vụ?")) return;

    const id = Number(e.target.id);
    todos = todos.filter((t) => t.id !== id);

    saveTodos();
    renderTodos();
    return;
  }

  // edit
  if (e.target.classList.contains("edit")) {
    const item = e.target.closest(".todo-item");
    const id = Number(item.id);

    const taskDiv = item.querySelector(".task");
    const oldValue = taskDiv.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = oldValue;

    taskDiv.innerHTML = "";
    taskDiv.appendChild(input);

    input.focus();
    input.select();

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        const newValue = input.value.trim();

        if (!newValue) {
          alert("Không được để trống!");
          renderTodos();
          return;
        }

        const todo = todos.find((t) => t.id === id);
        todo.task = newValue;

        saveTodos();
        renderTodos();
      }

      if (event.key === "Escape") {
        renderTodos();
      }
    });

    return;
  }

  // tick done
  const item = e.target.closest(".todo-item");
  if (!item) return;

  const id = Number(item.id);
  const todo = todos.find((t) => t.id === id);

  todo.done = !todo.done;

  saveTodos();
  renderTodos();
});

// add task
function addTask() {
  const task = searchInput.value.trim();

  if (!task) {
    alert("Empty task!");
    return;
  }

  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    task: task,
    done: false,
  };

  todos.push(newTodo);

  saveTodos();
  renderTodos();

  searchInput.value = "";
}

// click button
addBtn.addEventListener("click", addTask);

// enter input
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

loadTodos();
renderTodos();

function updateStats() {
  const total = todos.length;
  const done = todos.filter((t) => t.done).length;

  const percent = total === 0 ? 0 : ((done / total) * 100).toFixed(1);

  document.getElementById("stats").textContent =
    `Tổng công việc: ${total} | Đã hoàn thành: ${done} (${percent}%)`;
}

clearAllBtn.addEventListener("click", function () {
  const isConfirm = confirm(
    "Bạn có chắc chắn muốn xóa TOÀN BỘ công việc không?\nHành động này không thể hoàn tác.",
  );

  if (!isConfirm) return;

  todos = [];

  localStorage.setItem("myTodos", JSON.stringify(todos));

  renderTodos();
});
