let studentList = [
  { id: 1, name: "Nguyen Van A", age: 18, gpa: 6.66, status: "active" },
  { id: 2, name: "Nguyen Van b", age: 19, gpa: 8.66, status: "active" },
  { id: 3, name: "Nguyen Van c", age: 18, gpa: 9.66, status: "active" },
];
let choice;
while (choice !== 0) {
  choice = Number(
    prompt(`
            Mời bạn nhập lựa chọn : 
            1.Create Student
            2.Read All Students
            3.Filter Scholarship
            4.Update Profile
            5.Delete Record
            6.Compliance Verify
            7.Academic Stats
            8.Data Normalization
         `),
  );
  switch (choice) {
    case 1:
      let name = prompt("thêm tên sinh viên");
      let age = Number(prompt("nhập tuổi sinh viên"));
      let gpa = Number(prompt("GPA trung bình :"));

      let id = studentList.length + 1;

      let newStd = {
        id: id,
        name: name,
        age: age,
        gpa: gpa,
      };
      studentList.push(newStd);
      console("thêm mới thành công !");
      break;
    case 2:
      studentList.forEach((std) => {
        console.log(
          `id :${std.id} | name : ${std.name} | age :${std.age} | gpa:${studentList.gpa}`,
        );
      });
      break;
    case 3:
      let checkgpa = studentList.filter((std) => {
        return std.gpa > 8.0;
      });
      console.table(checkgpa);
      break;
    case 4:
      let update = Number(prompt("nhập Id cần cập nhật"));
      let stdUpdate = studentList.find((std) => std.name === update);
      if (stdUpdate) {
        stdUpdate.name = prompt("Nhập tên mới:");
        stdUpdate.gpa = Number(prompt("Nhập gpa mới"));
        console.log("Cập nhật thành công!");
      } else {
        console.log("không tìm thấy sv với ID này!");
      }
      break;
    case 5:
      let Delete = Number(prompt("mời bạn nhập Id để xóa "));
      let index = studentList.findIndex((studen) => studen.id === Delete);
      if (index !== -1) {
        studentList.splice(index, 1);
        console.log("xóa sinh viên thành công !");
      } else {
        console("không tìm thấy sinh viên với Id " + Delete);
      }
      break;
    case 6:
      let under18 = studentList.some((std) => std.age < 18);
      console.log("Có sinh viên dưới 18 tuổi không ?", under18);

      let firstStatus = studentList[0].active;

      let isUniformActive = studentList.every(
        (std) => std.active === firstStatus,
      );

      console.log("Tất cả có cùng trạng thái active không?", isUniformActive);

      break;
    case 7:
      let totalGpa = studentList.reduce((sum, ptd) => {
        return sum + std.gpa;
      }, 0);
      let trungbinh = totalGpa / studentList.length;
      console.log("Điểm Trung Bình: ", trungbinh);
      break;
    case 8:
      let listName = studentList.map((name) => name.toUpperCase());
      console.log("Mảng gốc: ", studentList);
      console.log("Mảng chuẩn hóa: ", listName);
      break;
  }
}
