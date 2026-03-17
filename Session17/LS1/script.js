const todos = [
  { id: 1, task: "Mua bánh chưng", done: false },
  { id: 2, task: "Dọn nhà đón Tết", done: false },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa", done: false },
];

function renderTodoList() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  todos.forEach((todo) => {
    list.innerHTML += `
      <div class="todo-item">
        <span class="icon">🌸</span>
        <span class="task">${todo.task}</span>
        <span class="status">
          ${todo.done ? "Đã làm" : "Chưa làm"}
        </span>
      </div>
    `;
  });
}

function saveFirstTime() {
  if (!localStorage.getItem("myTodos")) {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }
}

renderTodoList();
saveFirstTime();
