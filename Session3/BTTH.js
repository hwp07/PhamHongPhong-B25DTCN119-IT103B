const correctPassword = "admin123";
let attempts = 0;
let password;

while (attempts < 3) {
  password = prompt("Nhập mật khẩu:");
  attempts++;

  if (password === correctPassword) {
    alert("Đăng nhập thành công!");
    break;
  } else {
    if (attempts === 3) {
      alert("Hệ thống bị khóa");
    } else {
      alert("Mật khẩu sai! Vui lòng nhập lại.");
    }
  }
}

if (password === correctPassword) {
  let choice;
  do {
    choice = +prompt(
      `===== MENU =====
    1. Nhập lô sách mới
    2. Vẽ kệ sách
    3. Thoát
    Nhập lựa chọn:`,
    );

    switch (choice) {
      case 1:
        let ask = +prompt("Bạn muốn nhập bao nhiêu cuốn sách?");
        let sum = 0;

        for (let i = 0; i < ask; i++) {
          let price = +prompt(`Nhập giá tiền của cuốn sách ${i + 1}:`);
          if (price <= 0 || isNaN(price)) {
            continue;
          }
          sum += price;
        }

        alert("Tổng tiền sách: " + sum);
        break;

      case 2:
        alert("Vẽ kệ sách thành công!");
        for (let x = 1; x <= 3; x++) {
          for (let y = 1; y <= 5; y++) {
            if (x === 2 && y === 3) {
              console.log(`Khu vực ${x} - Kệ ${y} (Đang sửa chữa)`);
              continue;
            }
            console.log(`Khu vực ${x} - Kệ ${y}`);
          }
        }
        break;

      case 3:
        alert("Hẹn gặp lại!");
        break;

      default:
        alert("Lựa chọn không hợp lệ!");
    }
  } while (choice != 3);
}
