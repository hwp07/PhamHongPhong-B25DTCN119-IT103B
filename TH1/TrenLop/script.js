// let todos = [
//   { id: 1, todoName: "Di hoc", deadline: "26/3", status: "To do" },
//   { id: 2, todoName: "Choi game", deadline: "26/3", status: "To do" },
//   { id: 3, todoName: "Lo cheo", deadline: "26/3", status: "Pending" },
// ];

// localStorage.setItem("todos", JSON.stringify(todos));

let todos = JSON.parse(localStorage.getItem("todos")) || [];
// let productIdCounter = todos.length
//   ? Math.max(...todos.map((p) => p.id)) + 1
//   : 1;

// DOM
let tableList = document.getElementById("table-list");
let inputName = document.getElementById("input-name");
let inputDate = document.getElementById("input-date");
let inputOpt = document.getElementById("input-opt");
let addBtn = document.getElementById("add-btn");
let search = document.getElementById("search-todo");
let filter = document.getElementById("filter-todo");

// render
function renderList(todos) {
  tableList.innerHTML = ``;

  todos.forEach((e) => {
    let formattedDate = new Date(e.deadline).toLocaleDateString("vi-VN");
    tableList.innerHTML += `
        <tr>
            <td>${e.id}</td>
            <td>${e.todoName}</td>
            <td>${formattedDate}</td>
            <td>${e.status}</td>
            <td>
                <button onclick="delTodo(${e.id})">Delete</button>
                <button onclick="updateTodo(${e.id})">Update</button>
            </td>
        </tr>`;
  });
}
renderList(todos);

// add & update task

function addTodo(e) {
  e.preventDefault();

  let newName = inputName.value;
  let newDate = inputDate.value;
  let newOpt = inputOpt.value;

  if (edit) {
    //update
    let index = todos.findIndex((e) => e.id === edit);

    todos[index] = {
      ...todos[index],
      todoName: newName,
      deadline: newDate,
      status: newOpt,
    };

    edit = null;
  } else {
    //add
    let newTask = {
      id: todos.length ? Math.max(...todos.map((item) => item.id)) + 1 : 1,
      todoName: newName,
      deadline: newDate,
      status: newOpt,
    };

    todos.push(newTask);
  }

  localStorage.setItem("todos", JSON.stringify(todos));
  document.getElementById("form").reset();

  renderList(todos);
}

//del task
function delTodo(id) {
  todos = todos.filter((e) => e.id !== id);

  localStorage.setItem("todos", JSON.stringify(todos));

  renderList(todos);
}

// search
function searchTodo() {
  let input = search.value.trim().toLowerCase();

  let result = todos.filter((e) => e.todoName.toLowerCase().includes(input));

  renderList(result);
}

//filter
function filterTodoByStatus() {
  let filterStatus = filter.value;
  let filterTodos = todos.filter((e) => e.status === filterStatus);
  renderList(filterTodos);
}

//sort
function sortByName() {
  todos.sort((a, b) => a.todoName.localeCompare(b.todoName));
  renderList(todos);
}

//update
let edit = null;
function updateTodo(id) {
  let todo = todos.find((e) => e.id === id);

  inputName.value = todo.todoName;
  inputDate.value = todo.deadline;
  inputOpt.value = todo.status;

  edit = id;
}
