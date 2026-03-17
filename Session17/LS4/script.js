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

// lấy dữ liệu
function loadTodos() {
  const data = localStorage.getItem("myTodos");

  if (data) {
    todos = JSON.parse(data);
  } else {
    todos = initialTodos;
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }
}

// lưu dữ liệu
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
        <button class="delete" id="${todo.id}">❎</button>
      </div>
    `;
  });
}

todoList.addEventListener("click", function (e) {
  // xóa ták
  if (e.target.classList.contains("delete")) {
    if (!confirm("Bạn có chắc chắn muốn xóa nhiệm vụ?")) return;

    const id = Number(e.target.id);

    todos = todos.filter((t) => t.id !== id);

    saveTodos();
    renderTodos();
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

// thêm task
addBtn.addEventListener("click", function () {
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
});

loadTodos();
renderTodos();
