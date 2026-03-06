const cvList = ["Làm bài", "Chơi game"];
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const add = document.querySelector("button");
function add() {
  const newList = input.value.trim();
  if (newList === "") {
    alert("Vui lòng nhập tên công việc!");
    return;
  }
  cvList.push(newList);
  renderCv();

  input.value = "";
}
function renderCv() {
  list.innerHTML = "";
  cvList.forEach((cv) => {
    const newList = document.createElement("li");
    newList.textContent = cv;
    list.appendChild(newList);
  });
}

add.addEventListener("click", add);

renderCv();
