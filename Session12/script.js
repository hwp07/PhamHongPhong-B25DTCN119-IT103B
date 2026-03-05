let studentList = [
  {
    id: "S001",
    name: "Nguyen Van A",
    age: 18,
    gpa: 8.5,
    status: "active",
    createdAt: Date.now(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: "S002",
    name: "Tran Thi B",
    age: 19,
    gpa: 7.5,
    status: "active",
    createdAt: Date.now(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: "S003",
    name: "Le Van C",
    age: 20,
    gpa: 9.2,
    status: "active",
    createdAt: Date.now(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: "S004",
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
    updatedAt: null,
    deletedAt: null,
  },
];

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
    id,
    name,
    age,
    gpa,
    status,
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
