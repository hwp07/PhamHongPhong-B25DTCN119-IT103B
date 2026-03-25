let list = ["Quét nhà", "Giặt quần áo"];

let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let button = document.querySelector("button");

const showList = () => {
  taskList.innerHTML = "";

  list.forEach((task) => {
    taskList.innerHTML += `
      <li>${task}</li>
    `;
  });
};

showList();
button.addEventListener("click", function () {
  let newTask = taskInput.value.trim();

  if (newTask === "") {
    alert("Vui lòng nhập tên công việc!");
    return;
  }

  list.push(newTask);

  showList();
  taskInput.value = "";
});
