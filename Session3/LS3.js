let successCount = 0;
let failCount = 0;

while (true) {
  let ask = prompt("Có yêu cầu gia hạn mới không? (có/không)");

  if (ask === "không") {
    alert("See you later!");
    break;
  }

  if (ask !== "có") {
    alert("Vui lòng nhập 'có' hoặc 'không'");
    continue;
  }

  let reader = prompt("Tên bạn đọc:");
  let book = prompt("Tên sách:");
  let borrowedDays;
  let extendDays;

  while (true) {
    borrowedDays = +prompt("Số ngày đã mượn hiện tại:");
    if (borrowedDays >= 1) break;
    alert("Số ngày đã mượn phải ≥ 1");
  }

  while (true) {
    extendDays = +prompt("Số ngày muốn gia hạn thêm:");
    if (extendDays >= 1) break;
    alert("Số ngày gia hạn phải ≥ 1");
  }

  let totalDays = borrowedDays + extendDays;

  if (totalDays > 60) {
    alert("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
    failCount++;
  } else if (borrowedDays > 45) {
    alert("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
    failCount++;
  } else if (totalDays <= 30) {
    alert("Gia hạn thành công");
    successCount++;
  } else {
    alert("Gia hạn thành công");
    successCount++;
  }

  console.log({
    reader,
    book,
    borrowedDays,
    extendDays,
    totalDays,
  });
}

console.log("===== THỐNG KÊ CA LÀM VIỆC =====");
console.log("Số lần gia hạn thành công:", successCount);
console.log("Số lần gia hạn không thành công:", failCount);
