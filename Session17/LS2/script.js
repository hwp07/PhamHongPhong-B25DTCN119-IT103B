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

// render danh sách
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    todoList.innerHTML += `
      <div class="todo-item ${todo.done ? "done" : ""}" data-id="${todo.id}">
        <div class="circle"></div>
        <div class="task">
          ${todo.task}
        </div>
      </div>
    `;
  });
}

// ấn nút
todoList.addEventListener("click", function (e) {
  const item = e.target.closest(".todo-item");

  if (!item) return;

  const id = Number(item.dataset.id);
  const todo = todos.find((t) => t.id === id);

  todo.done = !todo.done;

  localStorage.setItem("myTodos", JSON.stringify(todos));
  renderTodos();
});

loadTodos();
renderTodos();
