const TRUE_ACC = "admin";
const TRUE_PASS = "12345";
let attempts = 3;
let loggedIn = false;

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

  do {
    choice = prompt(
      "===== MENU =====\n" +
        "1. Phân loại mã số sách\n" +
        "2. Thiết kế sơ đồ kho\n" +
        "3. Dự toán phí bảo trì\n" +
        "4. Tìm mã số sách may mắn\n" +
        "5. Thoát\n" +
        "Chọn chức năng (1-5):",
    );

    switch (choice) {
      case "1":
        let total = 0;
        let khoaHoc = 0;
        let ngheThuat = 0;
        let code;

        do {
          code = parseInt(prompt("Nhập mã số sách (0 để kết thúc):"));
          if (code !== 0) {
            total++;
            if (code % 2 === 0) khoaHoc++;
            else ngheThuat++;
          }
        } while (code !== 0);

        console.log("Tổng mã sách:", total);
        console.log("Sách khoa học:", khoaHoc);
        console.log("Sách nghệ thuật:", ngheThuat);
        break;

      case "2":
        let rows = parseInt(prompt("Nhập số hàng:"));
        let cols = parseInt(prompt("Nhập số cột:"));

        for (let i = 1; i <= rows; i++) {
          let line = "";
          for (let j = 1; j <= cols; j++) {
            if (i === j) {
              line += `[${i}-${j}](Kệ ưu tiên) `;
            } else {
              line += `[${i}-${j}] `;
            }
          }
          console.log(line);
        }
        break;

      case "3":
        let quantity = parseInt(prompt("Nhập số lượng sách:"));
        let baseCost = parseFloat(prompt("Phí bảo trì gốc / cuốn:"));
        let years = parseInt(prompt("Số năm dự toán:"));

        let cost = baseCost;

        for (let year = 1; year <= years; year++) {
          let totalCost = quantity * cost;
          console.log(`Năm ${year}: Tổng phí = ${totalCost.toFixed(2)}`);
          cost *= 1.1;
        }
        break;

      case "4":
        let N = parseInt(prompt("Nhập số giới hạn N:"));
        let countLucky = 0;
        let result = "";

        for (let i = 1; i <= N; i++) {
          if (i % 3 === 0 && i % 5 !== 0) {
            result += i + " ";
            countLucky++;
          }
        }

        console.log("Các mã số may mắn:", result);
        console.log("Tổng số mã may mắn:", countLucky);
        break;

      case "5":
        alert("Hệ thống đang đăng xuất...");
        break;

      default:
        alert("Lựa chọn không hợp lệ!");
    }
  } while (choice !== "5");
}
