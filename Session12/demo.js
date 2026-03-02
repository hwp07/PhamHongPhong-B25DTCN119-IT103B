let students = [
  {
    id: "S001",
    name: "Nguyen Van An",
    age: 20,
    gpa: 8.5,
    status: "active",
    createdAt: new Date("2024-01-10").getTime(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: "S002",
    name: "Tran Thi Binh",
    age: 22,
    gpa: 6.8,
    status: "active",
    createdAt: new Date("2024-02-15").getTime(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: "S003",
    name: "Le Hoang Chau",
    age: 19,
    gpa: 9.2,
    status: "active",
    createdAt: new Date("2024-03-01").getTime(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: "S004",
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
    updatedAt: null,
    deletedAt: null,
  },
];

// CASE 1
const createStudent = () => {
  let id = prompt("Enter student ID:");
  if (!id || id.trim() === "") return alert("ID cannot be empty!");
  id = id.trim();

  if (students.some((student) => student.id === id)) {
    return alert("ID already exists!");
  }

  let name = prompt("Enter student name:");
  if (!name || name.trim() === "") return alert("Name cannot be empty!");
  name = name.trim();

  let age = Number(prompt("Enter age (16-60):"));
  if (isNaN(age) || age < 16 || age > 60) {
    return alert("Invalid age! Must be between 16 and 60.");
  }

  let gpa = Number(prompt("Enter GPA (0-10):"));
  if (isNaN(gpa) || gpa < 0 || gpa > 10) {
    return alert("Invalid GPA! Must be between 0 and 10.");
  }

  let status = prompt("Enter status (active/inactive):");
  if (!status) return alert("Invalid status!");
  status = status.trim().toLowerCase();

  if (!["active", "inactive"].includes(status)) {
    return alert("Status must be 'active' or 'inactive'");
  }

  const newStudent = {
    id,
    name,
    age,
    gpa,
    status,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  };

  students.push(newStudent);
  alert(`Student created successfully!\n${name}`);
};

// MENU
let choice;
do {
  choice = Number(
    prompt(`--- Student Management System ---
1. Create Student
2. Update Student
3. Soft Delete Student
4. Restore Student
5. View Students (Pipeline Mode)
6. Analytics Dashboard
7. Exit

Enter your choice:
`),
  );

  switch (choice) {
    case 1:
      createStudent();
      break;
    case 2:
      updateStudent();
      break;
    case 3:
      softDeleteStudent();
      break;
    case 4:
      restoreStudent();
      break;
    case 5:
      viewStudents();
      break;
    case 6:
      analyticsDashboard();
      break;
    case 7:
      alert("Exiting program...");
      break;
    default:
      alert("Invalid choice!");
  }
} while (choice !== 7);
