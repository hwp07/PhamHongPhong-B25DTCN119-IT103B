let studentList = [
  { id: 1, name: "Nguyen Van A", age: 18, gpa: 6.66, status: "active" },
  { id: 2, name: "Nguyen Van b", age: 19, gpa: 8.66, status: "active" },
  { id: 3, name: "Nguyen Van c", age: 18, gpa: 9.66, status: "active" },
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

// case 1
const createdStudent = () => {
  let name = prompt("Enter name:");
  if (!isNaN(name) || name.trim() === "") return alert("Error name!");

  let age = parseInt(prompt("Enter age:"));
  if (age < 0 || age > 100) return alert("Error age!");

  let gpa = parseFloat(prompt("Enter GPA (0.0 - 10.0):"));
  if (gpa < 0 || gpa > 10) return alert("Error GPA!");

  let status = prompt("Enter status (active/inactive):");
  if (status !== "active" && status !== "inactive")
    return alert("Error status!");

  let newStudent = {
    id: studentList.length > 0 ? studentList[studentList.length - 1].id + 1 : 1,
    name: name,
    age: age,
    gpa: gpa,
    status: status,
  };

  studentList.push(newStudent);

  alert(
    `Successfully added student!\n${newStudent.id} | ${newStudent.name} | ${newStudent.age} | ${newStudent.gpa} | ${newStudent.status}`,
  );
};

// case 2
const readAllStudent = () => {
  let info = studentList
    .map(
      (student) =>
        `${student.id} | ${student.name} | ${student.age} | ${student.gpa} | ${student.status}`,
    )
    .join("\n");

  alert(info);
};

// case 3
const filterScholarshipCandidates = () => {
  let filter = studentList.filter((student) => student.gpa > 8.0);

  if (filter.length === 0) {
    alert("Error list!");
    return;
  }

  let listStudent = filter
    .map(
      (student) =>
        `${student.id} | ${student.name} | ${student.age} | ${student.gpa} | ${student.status}`,
    )
    .join("\n");

  alert(listStudent);
};

// case 4
const updateProfile = () => {
  let input = parseInt(prompt("Enter the ID want to update:"));

  let findStudent = studentList.find((student) => student.id === input);

  if (!findStudent) {
    alert("Student not found!");
    return;
  }

  findStudent.name = prompt("Enter the new name:", findStudent.name);

  let newGpa = parseFloat(
    prompt(`Enter the new GPA (the old GPA: ${findStudent.gpa})`),
  );

  if (newGpa < 0 || newGpa > 10) return alert("Error GPA!");

  findStudent.gpa = newGpa;

  alert("Update successfully!");
};
const main = () => {
  let condition = true;
  while (condition) {
    switch (showMenu()) {
      case 1: {
        createdStudent();
        break;
      }

      case 2: {
        readAllStudent();
        break;
      }

      case 3: {
        filterScholarshipCandidates();
        break;
      }

      case 1: {
        break;
      }

      case 1: {
        break;
      }

      case 1: {
        break;
      }

      case 1: {
        break;
      }

      case 1: {
        break;
      }

      case 0: {
        alert(`See you later!`);
        condition = false;
        break;
      }

      default: {
        alert(`Lua chon khong hop le!!!`);
        break;
      }
    }
  }
};

main();
