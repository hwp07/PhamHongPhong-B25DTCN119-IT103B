const TRUE_ACC = "admin";
const TRUE_PASS = "12345";
let attempts = 3;
let loggedIn = false;

let libraries = ["Toán", "Văn", "Anh"];

while (attempts > 0) {
  let acc = prompt("Nhập tài khoản:");
  let pass = prompt("Nhập mật khẩu:");

  if (acc === TRUE_ACC && pass === TRUE_PASS) {
    alert("Đăng nhập thành công!");
    loggedIn = true;
    break;
  }

  attempts--;

  if (acc !== TRUE_ACC && pass !== TRUE_PASS) {
    alert(`Sai tài khoản và mật khẩu! Còn ${attempts} lần`);
  } else if (acc !== TRUE_ACC) {
    alert(`Sai tài khoản! Còn ${attempts} lần`);
  } else {
    alert(`Sai mật khẩu! Còn ${attempts} lần`);
  }
}

if (!loggedIn) {
  alert("Tài khoản đã bị khóa");
} else {
  let choice;
  let input;
  let index;

  do {
    choice = +prompt(`            MENU
1. Nhập thêm lô sách mới.
2. Hiển thị danh sách sách.
3. Tìm kiếm sách.
4. Cập nhật tên sách.
5. Đảo ngược thứ tự kệ sách.
6. Nhập kho từ nguồn khác.
7. Thoát chương trình.
Chọn chức năng:`);

    switch (choice) {
      case 1:
        input = prompt("Nhập tên sách mới:");
        let newBook = input.split(",");
        for (let book of newBook) {
          book = book.trim();
          if (book != "") {
            libraries.push(book);
          }
        }
        alert("Đã thêm thành công!");
        break;

      case 2:
        let i = 0;
        for (let lib of libraries) {
          console.log(`${i + 1}. ${lib}`);
          i++;
        }
        alert("Đã hiển thị danh sách!");
        break;

      case 3:
        input = prompt("Nhập tên sách muốn tìm kiếm:");
        index = libraries.indexOf(input);

        if (index !== -1) {
          alert(`Sách ${input} được tìm thấy tại vị trí ${index}`);
        } else {
          alert(`Không tìm thấy sách ${input}`);
        }
        break;

      case 4:
        input = prompt("Nhập tên sách cần sửa:");
        index = libraries.indexOf(input);

        if (index !== -1) {
          libraries[index] = prompt("Nhập tên sách mới:");
          alert("Sửa thành cống!");
        } else {
          alert("Không tìm thấy sách!");
        }
        break;

      case 5:
        console.log("Hàm sau khi đảo ngược:");
        for (let i of libraries.reverse()) {
          console.log(libraries[i]);
        }
        alert("Đảo ngược hàm thành công!");
        break;

      case 6:
        input = prompt("Nhập tên sách mới:");
        let otherSource = input.split(",");
        for (let book of otherSource) {
          book = book.trim();
          if (book != "") {
            libraries = libraries.concat(otherSource);
          }
        }
        alert("Đã gộp kho thành công!");
        break;
      case 7:
        alert("See you later!");
        break;
    }
  } while (choice !== 7);
}
