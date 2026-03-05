const tasklist = [];
let taskIdCounter = 1;
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const completedCount = document.getElementById("completedCount");
const totalCount = document.getElementById("totalCount");
const completionStatus = document.getElementById("completionStatus");

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
  taskInput.value = ""; // sau khi thêm thì ô nhập liệu phải trống
  taskInput.focus(); // cái này để focus vào input
  console.log(tasklist);
  renderTask(); // Mỗi lần thêm nó sẽ hiển thị ra nên phải thêm vào đây
}
function renderTask() {
  taskList.innerHTML = "";
  let showList = document.createElement("div");
  if (tasklist.length === 0) {
    taskList.innerHTML = `
    <div>
        <div>📋</div>
        <div>Chưa có công việc nào. Hãy thêm công việc mới!</div>
    </div>
        `;
  }
  tasklist.forEach((task) => {
    showList.innerHTML = `
    <div>
        <input type="checkbox">
        <p>${task.name}</p>
        <div>
            <button>✏️ Sửa</button>
            <button onclick ="deleteTask(${task.id})">🗑️ Xóa</button>
        </div>
    </div>
        `;
  });
  taskList.appendChild(showList);
}
document.addEventListener();

//delete task
function deleteTask(id) {}
