let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];
let countName = 0;
let input;
let maxDay = 0;
let ask;

do {
  ask = +prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?");
  if (isNaN(ask) || ask <= 0) {
    alert("Vui lòng nhập số nguyên dương!");
  }
} while (isNaN(ask) || ask <= 0);

for (let i = 0; i < ask; i++) {
  // Mã thẻ
  do {
    input = prompt("Nhập mã thẻ bạn đọc:");
    if (readerCardIds.includes(input) || input === "") {
      alert("Mã thẻ không hợp lệ hoặc bị trùng!");
    }
  } while (readerCardIds.includes(input) || input === "");
  readerCardIds[i] = input;

  do {
    readerNames[i] = prompt("Nhập tên bạn đọc:");
    if (readerNames[i] === "") {
      alert("Tên không được để trống!");
    }
  } while (readerNames[i] === "");

  borrowedBookCodes[i] = prompt(
    "Nhập các mã sách đang đọc (ngăn cách bằng dấu phẩy):",
  );

  do {
    input = +prompt("Nhập số ngày quá hạn:");
    if (isNaN(input) || input <= 0) {
      alert("Vui lòng nhập số nguyên dương!");
    }
  } while (isNaN(input) || input <= 0);
  overdueDays[i] = input;
}

for (let i = 0; i < overdueDays.length; i++) {
  if (overdueDays[i] >= 10) {
    countName++;
  }
}
console.log("Số bạn đọc quá hạn từ 10 ngày trở lên:", countName);

console.log("Danh sách bạn đọc quá hạn:");
for (let i = 0; i < overdueDays.length; i++) {
  console.log(
    `${i + 1}. Mã thẻ: ${readerCardIds[i]} | Tên: ${readerNames[i]} | Sách: ${borrowedBookCodes[i]} | Quá hạn: ${overdueDays[i]} ngày`,
  );
}

console.log("Bạn đọc mượn cả JS và PYT:");
for (let i = 0; i < borrowedBookCodes.length; i++) {
  let codes = borrowedBookCodes[i].toLowerCase();
  if (codes.includes("js") && codes.includes("pyt")) {
    console.log(readerCardIds[i]);
  }
}

for (let i = 1; i < overdueDays.length; i++) {
  if (overdueDays[i] > overdueDays[maxDay]) {
    maxDay = i;
  }
}
console.log(
  `Bạn đọc quá hạn nhiều nhất: ${readerNames[maxDay]} (${overdueDays[maxDay]} ngày)`,
);
