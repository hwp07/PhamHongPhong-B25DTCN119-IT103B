// ===== KHAI BÁO MẢNG NHÂN VIÊN =====
let employees = [];
let editId = null;

// ===== LẤY PHẦN TỬ DOM =====
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const dateOfBirth = document.getElementById("dateOfBirth");
const position = document.getElementById("position");

const addBtn = document.querySelector(".btn-primary");
const resetBtn = document.getElementById("cancelEdit");

const errorName = document.getElementById("fullNameError");
const errorEmail = document.getElementById("emailError");
const errorDate = document.getElementById("dateError");
const errorPos = document.getElementById("positionError");

const list = document.querySelector("tbody");

const countEmployee = document.getElementById("countEmployee");
const totalEmployee = document.getElementById("totalEmployee");

// Ẩn nút hủy khi load trang
resetBtn.style.display = "none";

// ===== VALIDATION =====
function valid(newName, newEmail, date, pos) {
  let isValid = true;

  if (!newName) {
    errorName.textContent = "Họ và tên không được để trống";
    isValid = false;
  } else {
    errorName.textContent = "";
  }

  if (!newEmail) {
    errorEmail.textContent = "Email không được để trống";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
    errorEmail.textContent = "Email không đúng định dạng";
    isValid = false;
  } else {
    errorEmail.textContent = "";
  }

  if (!date) {
    errorDate.textContent = "Ngày sinh không được để trống";
    isValid = false;
  } else {
    errorDate.textContent = "";
  }

  if (!pos) {
    errorPos.textContent = "Chức vụ không được để trống";
    isValid = false;
  } else {
    errorPos.textContent = "";
  }

  return isValid;
}

// ===== THÊM / CẬP NHẬT NHÂN VIÊN =====
addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const newName = fullName.value.trim();
  const newEmail = email.value.trim();
  const date = dateOfBirth.value.split("-").reverse().join("/");
  const pos = position.value;

  if (!valid(newName, newEmail, date, pos)) return;

  // chế độ sửa
  if (editId !== null) {
    const employee = employees.find((el) => el.id === editId);

    employee.name = newName;
    employee.email = newEmail;
    employee.date = date;
    employee.position = pos;

    editId = null;

    document.querySelector(".header h1").textContent = "Quản Lý Nhân Viên";
    addBtn.textContent = "Thêm Nhân Viên";
    resetBtn.style.display = "none";
  }
  // chế độ thêm
  else {
    const newEmployee = {
      id: Date.now(),
      name: newName,
      email: newEmail,
      date: date,
      position: pos,
    };

    employees.push(newEmployee);
  }

  showList();

  // reset form
  fullName.value = "";
  email.value = "";
  dateOfBirth.value = "";
  position.value = "";
});

// ===== HIỂN THỊ DANH SÁCH =====
function showList() {
  list.innerHTML = "";

  employees.forEach((el) => {
    list.innerHTML += `
      <tr>
        <td>${el.id}</td>
        <td>${el.name}</td>
        <td>${el.email}</td>
        <td>${el.date}</td>
        <td>${el.position}</td>
        <td>
          <div class="actions">
            <button class="btn btn-sm btn-edit" id="${el.id}">Sửa</button>
            <button class="btn btn-sm btn-delete" id="${el.id}">Xóa</button>
          </div>
        </td>
      </tr>
    `;
  });

  updateCount();
}

// ===== THỐNG KÊ NHÂN VIÊN =====
function updateCount() {
  const count = employees.length;

  countEmployee.textContent = `${count} nhân viên`;
  totalEmployee.textContent = `Tổng số nhân viên: ${count}`;
}

// ===== EVENT SỬA / XÓA =====
list.addEventListener("click", function (e) {
  // ===== SỬA =====
  if (e.target.classList.contains("btn-edit")) {
    const id = +e.target.id;

    const employee = employees.find((el) => el.id === id);

    fullName.value = employee.name;
    email.value = employee.email;
    dateOfBirth.value = employee.date.split("/").reverse().join("-");
    position.value = employee.position;

    editId = id;

    document.querySelector(".header h1").textContent = "Chỉnh Sửa Nhân Viên";
    addBtn.textContent = "Cập Nhật";

    resetBtn.style.display = "inline-block";
  }

  // ===== XÓA =====
  if (e.target.classList.contains("btn-delete")) {
    const id = +e.target.id;

    const employee = employees.find((el) => el.id === id);

    const confirmDelete = confirm(
      `Bạn có chắc muốn xóa nhân viên "${employee.name}" không?`,
    );

    if (!confirmDelete) return;

    employees = employees.filter((el) => el.id !== id);

    // nếu đang sửa nhân viên bị xóa
    if (editId === id) {
      editId = null;

      fullName.value = "";
      email.value = "";
      dateOfBirth.value = "";
      position.value = "";

      document.querySelector(".header h1").textContent = "Quản Lý Nhân Viên";
      addBtn.textContent = "Thêm Nhân Viên";
      resetBtn.style.display = "none";
    }

    showList();
  }
});

// ===== HỦY CHỈNH SỬA =====
resetBtn.addEventListener("click", function (e) {
  e.preventDefault();

  editId = null;

  fullName.value = "";
  email.value = "";
  dateOfBirth.value = "";
  position.value = "";

  document.querySelector(".header h1").textContent = "Quản Lý Nhân Viên";
  addBtn.textContent = "Thêm Nhân Viên";

  resetBtn.style.display = "none";
});
