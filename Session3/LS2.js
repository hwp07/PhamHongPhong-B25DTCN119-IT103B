let ask = +prompt("Hôm nay có bao nhiêu lượt trả sách?");
let name, book, day;
let lateCount = 0;

for (let i = 0; i < ask; i++) {
  name = prompt(`Tên người mượn thứ ${i + 1}:`);
  book = prompt("Tên sách:");

  while (true) {
    day = +prompt("Số ngày mượn thực tế:");
    if (day > 1) break;
    alert("Số ngày mượn không hợp lệ! Nhập lại.");
  }

  if (day <= 14) {
    console.log("Trả đúng hạn");
  } else if (day <= 21) {
    console.log("Trả muộn nhẹ, phạt nhắc nhở!");
    lateCount++;
  } else {
    console.log("Quá hạn nghiêm trọng, cần ghi biên bản!");
    lateCount++;
  }
}

console.log("Tổng số lượt trả sách:", ask);
console.log("Số lượt trả muộn:", lateCount);
