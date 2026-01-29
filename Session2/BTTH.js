let userName = prompt("Nhập tên người dùng:");
let role = prompt("Nhập vai trò (admin / student / guest):")?.toLowerCase();
let balance = +prompt("Nhập số dư tài khoản thẻ:");
let cardStatusInput = prompt("Nhập trạng thái thẻ (true nếu hoạt động):");
let overdueDays = +prompt("Nhập số ngày quá hạn trả sách:");
let cardStatus = cardStatusInput === "true";

let roleMsg = "";
switch (role) {
  case "admin":
    roleMsg = "Chào Admin, bạn có toàn quyền hệ thống";
    break;

  case "student":
    roleMsg = "Chào sinh viên, bạn có thể mượn sách";
    break;

  case "guest":
    roleMsg = "Chào khách, bạn chỉ có thể đọc tại chỗ";
    break;

  default:
    roleMsg = "Lỗi: Vai trò không hợp lệ!";
    break;
}

let borrowResult = "";
let borrowReason = "";

if (!userName) {
  borrowResult = "YÊU CẦU BỊ TỪ CHỐI";
  borrowReason = "Tên người dùng không hợp lệ";
} else if (role !== "student" && role !== "admin") {
  borrowResult = "YÊU CẦU BỊ TỪ CHỐI";
  borrowReason = "Vai trò không được phép mượn sách";
} else if (balance <= 0) {
  borrowResult = "YÊU CẦU BỊ TỪ CHỐI";
  borrowReason = "Tài khoản không đủ số dư";
} else if (!cardStatus) {
  borrowResult = "YÊU CẦU BỊ TỪ CHỐI";
  borrowReason = "Thẻ thư viện đang bị khóa";
} else {
  borrowResult = "ĐƯỢC PHÉP MƯỢN SÁCH";
}

let fine = 0;
let returnStatus = "";

if (overdueDays <= 0) {
  returnStatus = "Cảm ơn bạn đã trả đúng hạn";
} else if (overdueDays <= 5) {
  fine = overdueDays * 5000;
  returnStatus = `Quá hạn ${overdueDays} ngày`;
} else if (overdueDays <= 10) {
  fine = overdueDays * 10000;
  returnStatus = `Quá hạn ${overdueDays} ngày`;
} else {
  fine = 200000;
  returnStatus = `Quá hạn ${overdueDays} ngày - TÀI KHOẢN BỊ KHÓA`;
}

console.log(`--- HỆ THỐNG MƯỢN TRẢ ---

Người dùng: ${userName?.toUpperCase() || "KHÔNG XÁC ĐỊNH"}

Quyền hạn: ${roleMsg}

Kết quả mượn: ${borrowResult}${borrowReason ? " (" + borrowReason + ")" : ""}

Tình trạng trả sách: ${returnStatus}

Tiền phạt: ${fine} VNĐ`);
