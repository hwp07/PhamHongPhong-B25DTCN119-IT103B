let nameBook = prompt("Nhập tên sách:");
let typeBook = prompt("Thể loại:");
let statusBook = prompt("Trạng thái:");

switch (typeBook) {
  case "Khoa học":
  case "Lịch sử":
    console.log("Sách này có sẵn trong thư viện");
    break;

  case "Văn học":
  case "Truyện":
    console.log("Sách này có thể đọc giải trí");
    break;

  default:
    console.log("Sách đã được mượn");
}
