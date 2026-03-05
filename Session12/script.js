<<<<<<< HEAD
﻿let studentList = [
  {
    id: "S001",
    name: "Nguyen Van A",
    age: 18,
    gpa: 8.5,
    status: "active",
    createdAt: Date.now(),
=======

let students = [
  {
    id: "S001",
    name: "Nguyen Van An",
    age: 20,
    gpa: 8.5,
    status: "active",
    createdAt: new Date("2024-01-10").getTime(),
>>>>>>> ea34099f53489974fb8c1e6af8060b8244db0e51
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: "S002",
<<<<<<< HEAD
    name: "Tran Thi B",
    age: 19,
    gpa: 7.5,
    status: "active",
    createdAt: Date.now(),
=======
    name: "Tran Thi Binh",
    age: 22,
    gpa: 6.8,
    status: "active",
    createdAt: new Date("2024-02-15").getTime(),
>>>>>>> ea34099f53489974fb8c1e6af8060b8244db0e51
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: "S003",
<<<<<<< HEAD
    name: "Le Van C",
    age: 20,
    gpa: 9.2,
    status: "active",
    createdAt: Date.now(),
=======
    name: "Le Hoang Chau",
    age: 19,
    gpa: 9.2,
    status: "active",
    createdAt: new Date("2024-03-01").getTime(),
>>>>>>> ea34099f53489974fb8c1e6af8060b8244db0e51
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: "S004",
<<<<<<< HEAD
    name: "Pham Thi D",
    age: 17,
    gpa: 6.8,
    status: "inactive",
    createdAt: Date.now(),
    updatedAt: null,
    deletedAt: Date.now(),
  },
  {
    id: "S005",
    name: "Hoang Van E",
    age: 21,
    gpa: 8.0,
    status: "active",
    createdAt: Date.now(),
=======
    name: "Pham Minh Duc",
    age: 21,
    gpa: 2.5,
    status: "active",
    createdAt: new Date("2024-03-05").getTime(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: "S005",
    name: "Vo Thi Em",
    age: 18,
    gpa: 0,
    status: "inactive",
    createdAt: new Date("2024-01-20").getTime(),
    updatedAt: new Date("2024-02-01").getTime(),
    deletedAt: new Date("2024-02-01").getTime(),
  },
  {
    id: "S006",
    name: "Dang Gia Huy",
    age: 23,
    gpa: 7.4,
    status: "active",
    createdAt: new Date("2024-04-01").getTime(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: "S007",
    name: "Bui Thanh Long",
    age: 24,
    gpa: 3.2,
    status: "inactive",
    createdAt: new Date("2024-02-10").getTime(),
    updatedAt: new Date("2024-05-01").getTime(),
    deletedAt: new Date("2024-05-01").getTime(),
  },
  {
    id: "S008",
    name: "Nguyen Thi Mai",
    age: 20,
    gpa: 8.9,
    status: "active",
    createdAt: new Date("2024-06-01").getTime(),
>>>>>>> ea34099f53489974fb8c1e6af8060b8244db0e51
    updatedAt: null,
    deletedAt: null,
  },
];

<<<<<<< HEAD
function createStudent() {
  let id;
  while (true) {
    id = prompt("Nhập ID (unique):");

    if (!id || id.trim() === "") {
      alert("Không được để trống!");
      continue;
    }

    id = id.trim().toLowerCase();

    let existed = studentList.some((s) => s.id.toLowerCase() === id);

    if (existed) {
      alert("ID đã tồn tại!");
      continue;
    }

    break;
  }

  let name;
  while (true) {
    name = prompt("Nhập tên:");
    if (!name || name.trim() === "") {
      alert("Không được để trống!");
      continue;
    }
    name = name.trim();
    break;
  }

  let age;
  while (true) {
    let ageInput = prompt("Nhập tuổi (16-60):");

    if (!ageInput || ageInput.trim() === "") {
      alert("Không được để trống!");
      continue;
    }

    age = Number(ageInput);

    if (!Number.isInteger(age) || age < 16 || age > 60) {
      alert("Tuổi phải là số nguyên từ 16-60!");
      continue;
    }

    break;
  }

  let gpa;
  while (true) {
    let gpaInput = prompt("Nhập GPA (0-10):");

    if (!gpaInput || gpaInput.trim() === "") {
      alert("Không được để trống!");
      continue;
    }

    gpa = Number(gpaInput);

    if (isNaN(gpa) || gpa < 0 || gpa > 10) {
      alert("GPA phải từ 0-10!");
      continue;
    }

    break;
  }

  let status;
  while (true) {
    status = prompt("Nhập status (active/inactive):");

    if (!status || status.trim() === "") {
      alert("Không được để trống!");
      continue;
    }

    status = status.trim().toLowerCase();

    if (status !== "active" && status !== "inactive") {
      alert("Chỉ được nhập active hoặc inactive!");
      continue;
    }

    break;
  }

  studentList.push({
=======
const generateTimestamp = () => new Date().getTime();

const normalizeString = (str) => str.trim();

const validateStudentData = (data, isUpdate = false) => {
  if (!isUpdate) {
    if (!data.id || students.some((s) => s.id === data.id)) {
      return "ID không hợp lệ hoặc đã tồn tại!";
    }
  }

  if (data.age !== undefined && (data.age < 16 || data.age > 60)) {
    return "Tuổi phải từ 16 - 60!";
  }

  if (data.gpa !== undefined && (data.gpa < 0 || data.gpa > 10)) {
    return "GPA phải từ 0 - 10!";
  }

  if (data.status && !["active", "inactive"].includes(data.status)) {
    return "Status chỉ được active hoặc inactive!";
  }

  return null;
};

// ===============================
// DATA GOVERNANCE MODULE
// ===============================

function createStudent() {
  const id = prompt("Nhập ID:");
  const name = normalizeString(prompt("Nhập tên:"));
  const age = Number(prompt("Nhập tuổi:"));
  const gpa = Number(prompt("Nhập GPA:"));
  const status = normalizeString(
    prompt("Nhập status (active/inactive):"),
  ).toLowerCase();

  const newStudent = {
>>>>>>> ea34099f53489974fb8c1e6af8060b8244db0e51
    id,
    name,
    age,
    gpa,
    status,
<<<<<<< HEAD
    createdAt: Date.now(),
    updatedAt: null,
    deletedAt: null,
  });

  alert("Tạo sinh viên thành công!");
}

function updateStudent() {
  let id = prompt("Nhập ID cần update:");
  if (!id || id.trim() === "") {
    return alert("ID không hợp lệ!");
  }

  id = id.trim().toLowerCase();

  let student = studentList.find((s) => s.id.toLowerCase() === id);

  if (!student) {
    return alert("Không tìm thấy sinh viên!");
  }

  let newName = prompt("Tên mới:");
  if (newName && newName.trim() !== "") {
    student.name = newName.trim();
  }

  let newAge = prompt("Tuổi mới:");
  if (newAge && Number.isInteger(+newAge) && +newAge >= 16 && +newAge <= 60) {
    student.age = +newAge;
  }

  let newGpa = prompt("GPA mới:");
  if (newGpa && +newGpa >= 0 && +newGpa <= 10) {
    student.gpa = +newGpa;
  }

  let newStatus = prompt("Status mới:");
  if (newStatus) {
    newStatus = newStatus.trim().toLowerCase();
    if (newStatus === "active" || newStatus === "inactive") {
      student.status = newStatus;
    }
  }

  student.updatedAt = Date.now();

  alert("Update thành công!");
}

function deleteStudent() {
  const id = inputRequired("Nhập ID cần xoá:");
  const student = findById(id);

  if (!student) return alert("Không tìm thấy!");

  if (student.status === "inactive") return alert("Sinh viên đã inactive.");

  if (confirm("Xác nhận xoá?")) {
    student.status = "inactive";
    student.deletedAt = Date.now();
    alert("Đã xoá mềm!");
  }
}

function restoreStudent() {
  const id = inputRequired("Nhập ID cần restore:");
  const student = findById(id);

  if (!student) return alert("Không tìm thấy!");

  if (student.status === "active") return alert("Sinh viên đã active.");

  if (confirm("Xác nhận restore?")) {
    student.status = "active";
    student.deletedAt = null;
    student.updatedAt = Date.now();
    alert("Restore thành công!");
  }
}

function viewStudent() {
  const keyword = input("Search name:")?.toLowerCase() || "";
  const status = input("Status (all/active/inactive):") || "all";
  const sort = input("Sort GPA (asc/desc):") || "desc";
  const pageSize = Number(input("Page size:")) || 5;

  let result = studentList
    .filter((s) => s.name.toLowerCase().includes(keyword))
    .filter((s) => (status === "all" ? true : s.status === status))
    .sort((a, b) => (sort === "asc" ? a.gpa - b.gpa : b.gpa - a.gpa));

  let totalPage = Math.ceil(result.length / pageSize) || 1;
  let page = 1;

  while (true) {
    console.clear();

    let start = (page - 1) * pageSize;
    console.table(result.slice(start, start + pageSize));

    console.log(`Page ${page}/${totalPage}`);

    let nav = input("first/last/next/prev/number (Enter để thoát)");
    if (!nav) break;

    if (nav === "first") page = 1;
    else if (nav === "last") page = totalPage;
    else if (nav === "next" && page < totalPage) page++;
    else if (nav === "prev" && page > 1) page--;
    else if (!isNaN(nav) && nav >= 1 && nav <= totalPage) page = +nav;
  }
}

function analyticsDashboard() {
  const total = studentList.length;

  const active = studentList.filter((s) => s.status === "active");
  const inactive = studentList.filter((s) => s.status === "inactive");

  const avg = (arr) =>
    arr.length
      ? (arr.reduce((sum, s) => sum + s.gpa, 0) / arr.length).toFixed(2)
      : 0;

  console.clear();

  console.log("===== OVERVIEW =====");
  console.log("Total:", total);
  console.log("Active:", active.length);
  console.log("Inactive:", inactive.length);

  console.log("\n===== GPA =====");
  console.log("Avg GPA:", avg(studentList));
  console.log("Active Avg:", avg(active));
  console.log("Inactive Avg:", avg(inactive));

  console.log("\n===== TOP 5 GPA =====");
  console.table([...studentList].sort((a, b) => b.gpa - a.gpa).slice(0, 5));

  console.log("\n===== YOUNGEST =====");
  console.table([...studentList].sort((a, b) => a.age - b.age).slice(0, 5));

  console.log("\n===== GPA < 3 =====");
  console.table(studentList.filter((s) => s.gpa < 3));
}

function showMenu() {
  return Number(
    prompt(`
===== STUDENT MANAGEMENT =====
1. Create
2. Update
3. Delete
4. Restore
5. View
6. Dashboard
0. Exit
`),
  );
}

let choice;
do {
  choice = showMenu();

  switch (choice) {
    case 1:
      createStudent();
      break;
    case 2:
      updateStudent();
      break;
    case 3:
      deleteStudent();
      break;
    case 4:
      restoreStudent();
      break;
    case 5:
      viewStudent();
      break;
    case 6:
      analyticsDashboard();
      break;
    case 0:
      alert("Bye!");
      break;
    default:
      alert("Invalid!");
  }
} while (choice !== 0);
=======
    createdAt: generateTimestamp(),
    updatedAt: null,
    deletedAt: null,
  };

  const error = validateStudentData(newStudent);
  if (error) return alert(error);

  students.push(newStudent);
  alert("Thêm sinh viên thành công!");
}

function updateStudent() {
  const id = prompt("Nhập ID cần cập nhật:");
  const student = students.find((s) => s.id === id);
  if (!student) return alert("Không tìm thấy sinh viên!");

  const name = prompt("Tên mới (Enter bỏ qua):");
  const age = prompt("Tuổi mới (Enter bỏ qua):");
  const gpa = prompt("GPA mới (Enter bỏ qua):");
  const status = prompt("Status mới (Enter bỏ qua):");

  const updatedData = {
    ...student,
    name: name ? normalizeString(name) : student.name,
    age: age ? Number(age) : student.age,
    gpa: gpa ? Number(gpa) : student.gpa,
    status: status ? normalizeString(status).toLowerCase() : student.status,
    updatedAt: generateTimestamp(),
  };

  const error = validateStudentData(updatedData, true);
  if (error) return alert(error);

  Object.assign(student, updatedData);
  alert("Cập nhật thành công!");
}

function softDeleteStudent() {
  const id = prompt("Nhập ID cần xóa:");
  const student = students.find((s) => s.id === id);
  if (!student) return alert("Không tìm thấy!");

  if (!confirm("Bạn chắc chắn muốn xóa?")) return;

  student.status = "inactive";
  student.deletedAt = generateTimestamp();
  student.updatedAt = generateTimestamp();

  alert("Soft delete thành công!");
}

function restoreStudent() {
  const id = prompt("Nhập ID cần phục hồi:");
  const student = students.find((s) => s.id === id);
  if (!student) return alert("Không tìm thấy!");

  if (student.status === "inactive" && student.deletedAt !== null) {
    student.status = "active";
    student.deletedAt = null;
    student.updatedAt = generateTimestamp();
    alert("Phục hồi thành công!");
  } else {
    alert("Không thể phục hồi!");
  }
}

// ===============================
// DATA PIPELINE MODULE
// ===============================

function viewStudentsPipeline() {
  const searchTerm = prompt("Search theo tên (Enter bỏ qua):");
  const filterStatus = prompt("Filter status (active/inactive, Enter bỏ qua):");
  const sortOrder = prompt("Sort GPA (asc/desc, Enter bỏ qua):");
  const pageSize = Number(prompt("Số bản ghi mỗi trang:")) || 5;
  const pageNumber = Number(prompt("Trang số:")) || 1;

  let result = [...students]; // clone

  // SEARCH
  if (searchTerm) {
    result = result.filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  // FILTER
  if (filterStatus) {
    result = result.filter((s) => s.status === filterStatus.toLowerCase());
  }

  // SORT
  if (sortOrder) {
    result = result
      .slice()
      .sort((a, b) => (sortOrder === "asc" ? a.gpa - b.gpa : b.gpa - a.gpa));
  }

  // PAGINATION
  const total = result.length;
  const totalPages = Math.ceil(total / pageSize);

  const paginated = result.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize,
  );

  console.table(paginated);
  console.log(`Trang ${pageNumber}/${totalPages}`);
  console.log(`Tổng bản ghi: ${total}`);
}

// ===============================
// ANALYTICS MODULE (REDUCE ONLY)
// ===============================

function analyticsDashboard() {
  // 1. Overview
  const overview = students.reduce(
    (acc, s) => {
      acc.total++;
      acc[s.status]++;
      return acc;
    },
    { total: 0, active: 0, inactive: 0 },
  );

  console.log("=== OVERVIEW ===");
  console.log(overview);

  // 2. GPA Average
  const gpaStats = students.reduce(
    (acc, s) => {
      acc.totalGPA += s.gpa;
      acc[s.status].count++;
      acc[s.status].sum += s.gpa;
      return acc;
    },
    {
      totalGPA: 0,
      active: { count: 0, sum: 0 },
      inactive: { count: 0, sum: 0 },
    },
  );

  console.log(
    "GPA TB toàn hệ:",
    (gpaStats.totalGPA / students.length || 0).toFixed(2),
  );

  console.log(
    "GPA TB Active:",
    (gpaStats.active.sum / gpaStats.active.count || 0).toFixed(2),
  );

  console.log(
    "GPA TB Inactive:",
    (gpaStats.inactive.sum / gpaStats.inactive.count || 0).toFixed(2),
  );

  // 3. Leaderboard
  console.log("Top 5 GPA cao nhất:");
  console.table([...students].sort((a, b) => b.gpa - a.gpa).slice(0, 5));

  console.log("Top 5 nhỏ tuổi nhất:");
  console.table([...students].sort((a, b) => a.age - b.age).slice(0, 5));

  // 4. Risk Report
  const risk = students.reduce(
    (acc, s) => {
      if (s.gpa === 0) acc.zero.push(s);
      if (s.gpa < 3) acc.low.push(s);
      return acc;
    },
    { zero: [], low: [] },
  );

  console.log("GPA = 0:", risk.zero);
  console.log("GPA < 3:", risk.low);
  console.log("Tổng nguy cơ:", risk.low.length);
}

// ===============================
// MENU SYSTEM
// ===============================

function showMenu() {
  return prompt(`
====== STUDENT MANAGEMENT ======
1. Create Student
2. Update Student
3. Soft Delete Student
4. Restore Student
5. View Students (Pipeline)
6. Analytics Dashboard
0. Exit
Chọn chức năng:
`);
}

function main() {
  let choice;
  do {
    choice = showMenu();

    switch (choice) {
      case "1":
        createStudent();
        break;
      case "2":
        updateStudent();
        break;
      case "3":
        softDeleteStudent();
        break;
      case "4":
        restoreStudent();
        break;
      case "5":
        viewStudentsPipeline();
        break;
      case "6":
        analyticsDashboard();
        break;
      case "0":
        alert("Thoát chương trình!");
        break;
      default:
        alert("Lựa chọn không hợp lệ!");
    }
  } while (choice !== "0");
}

main();
>>>>>>> ea34099f53489974fb8c1e6af8060b8244db0e51
