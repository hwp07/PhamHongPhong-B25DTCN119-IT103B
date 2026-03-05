let bookName = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let favoriteLevel = +prompt("Nhập mức độ yêu thích (1 - 5):");

switch (favoriteLevel) {
  case 5:
  case 4:
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
    break;
  case 3:
    console.log("Sách này khá ổn, có thể mượn");
    break;
  case 2:
  case 1:
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
    break;
  default:
    console.log("Mức độ yêu thích không hợp lệ");
}
