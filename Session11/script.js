let studentList = [
  { id: 1, name: "Nguyen Van A", age: 18, gpa: 6.66, status: "active" },
  { id: 2, name: "Nguyen Van B", age: 19, gpa: 8.66, status: "active" },
  { id: 3, name: "Nguyen Van C", age: 18, gpa: 9.66, status: "active" },
];

const showMenu = () => {
  return +prompt(`Mời bạn nhập lựa chọn : 
1.Create Student
2.Read All Students
3.Filter Scholarship
4.Update Profile
5.Delete Record
6.Compliance Verify
7.Academic Stats
8.Data Normalization
0.Exit`);
};

// CASE 1 - CREATE
const createdStudent = () => {
  let name = prompt("Enter name:");
  if (!isNaN(name) || name.trim() === "") return alert("Error name!");

  let age = parseInt(prompt("Enter age:"));
  if (isNaN(age) || age < 0 || age > 100) return alert("Error age!");

  let gpa = parseFloat(prompt("Enter GPA (0.0 - 10.0):"));
  if (isNaN(gpa) || gpa < 0 || gpa > 10) return alert("Error GPA!");

  let status = prompt("Enter status (active/inactive):");
  if (status !== "active" && status !== "inactive")
    return alert("Error status!");

  let newStudent = {
    id: studentList.length ? studentList[studentList.length - 1].id + 1 : 1,
    name,
    age,
    gpa,
    status,
  };

  studentList.push(newStudent);

  alert(
    `Successfully added!\n${newStudent.id} | ${newStudent.name} | ${newStudent.age} | ${newStudent.gpa} | ${newStudent.status}`,
  );
};

// CASE 2 - READ
const readAllStudent = () => {
  if (studentList.length === 0) return alert("Empty list!");

  let info = studentList
    .map(
      (student) =>
        `${student.id} | ${student.name} | ${student.age} | ${student.gpa} | ${student.status}`,
    )
    .join("\n");

  alert(info);
};

// CASE 3
const filterScholarshipCandidates = () => {
  let filter = studentList.filter((student) => student.gpa > 8.0);

  if (filter.length === 0) return alert("No scholarship students!");

  let listStudent = filter
    .map(
      (student) =>
        `${student.id} | ${student.name} | ${student.age} | ${student.gpa} | ${student.status}`,
    )
    .join("\n");

  alert(listStudent);
};

// CASE 4
const updateProfile = () => {
  let input = parseInt(prompt("Enter ID to update:"));

  let findStudent = studentList.find((student) => student.id === input);

  if (!findStudent) return alert("Student not found!");

  findStudent.name = prompt("Enter new name:", findStudent.name);

  let newGpa = parseFloat(prompt(`Enter new GPA (old: ${findStudent.gpa})`));

  if (isNaN(newGpa) || newGpa < 0 || newGpa > 10) return alert("Error GPA!");

  findStudent.gpa = newGpa;

  alert("Update successfully!");
};

// CASE 5
const deleteRecord = () => {
  let deleteId = Number(prompt("Enter ID to delete:"));

  let index = studentList.findIndex((student) => student.id === deleteId);

  if (index !== -1) {
    studentList.splice(index, 1);
    alert("Delete successfully!");
  } else {
    alert("Student not found!");
  }
};

// CASE 6
const complianceVerification = () => {
  let under18 = studentList.some((std) => std.age < 18);
  console.log("Có sinh viên dưới 18 tuổi không?", under18);

  let firstStatus = studentList[0]?.status;

  let isUniformStatus = studentList.every((std) => std.status === firstStatus);

  console.log("Tất cả có cùng trạng thái không?", isUniformStatus);
};

// CASE 7
const academicStatistics = () => {
  if (studentList.length === 0) return console.log("Empty list!");

  let totalGpa = studentList.reduce((sum, std) => sum + std.gpa, 0);

  let average = totalGpa / studentList.length;

  console.log("Điểm Trung Bình:", average.toFixed(2));
};

// CASE 8
const dataNormalization = () => {
  let normalizedList = studentList.map((student) => ({
    ...student,
    name: student.name.toUpperCase(),
  }));

  console.log("Mảng gốc:", studentList);
  console.log("Mảng chuẩn hóa:", normalizedList);
};

const main = () => {
  let condition = true;

  while (condition) {
    switch (showMenu()) {
      case 1:
        createdStudent();
        break;
      case 2:
        readAllStudent();
        break;
      case 3:
        filterScholarshipCandidates();
        break;
      case 4:
        updateProfile();
        break;
      case 5:
        deleteRecord();
        break;
      case 6:
        complianceVerification();
        break;
      case 7:
        academicStatistics();
        break;
      case 8:
        dataNormalization();
        break;
      case 0:
        alert("See you later!");
        condition = false;
        break;
      default:
        alert("Lựa chọn không hợp lệ!");
    }
  }
};

main();
