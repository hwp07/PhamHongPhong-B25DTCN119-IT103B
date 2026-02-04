let student = "Quý, Nam, Lan, Hùng, Nam";
let students = student.split(", ");

students.reverse();

if (students.includes("Lan")) {
  console.log("Tên Lan tồn tại trong mảng");
} else {
  console.log("Tên Lan không tồn tại trong mảng");
}

let firstNam = students.indexOf("Nam");
console.log(firstNam);
