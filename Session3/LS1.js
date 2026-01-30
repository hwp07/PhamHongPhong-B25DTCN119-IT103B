let ask = +prompt("Hôm nay có bao nhiêu lượt mượn sách?");
let nameUser;
let nameBook;
let time;

if (ask < 0 || isNaN(ask)) {
  alert("Số lượt mượn không hợp lệ!");
} else {
  for (let i = 0; i < ask; i++) {
    alert(`Lượt mượn thứ ${i + 1}`);
    nameUser = prompt("Tên người mượn:");
    nameBook = prompt("Tên sách:");

    while (true) {
      time = +prompt("Thời gian mượn:");
      if (time > 0 && time <= 14) {
        alert("Mượn thành công!");
        break;
      } else {
        alert("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
      }
    }
  }
}

console.log("Tổng số lượt mượn: " + ask);
