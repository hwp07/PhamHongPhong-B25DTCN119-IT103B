let totalRequests = 0;
let successCount = 0;
let rejectedCount = 0;
let pendingCount = 0;

let hasRequest;

do {
  hasRequest = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

  if (!hasRequest) {
    continue;
  }

  if (hasRequest === "có") {
    totalRequests++;

    let readerName = prompt("Nhập tên bạn đọc:");
    let bookCode = prompt("Nhập mã sách muốn đặt trước:");
    let bookName = prompt("Nhập tên sách (chỉ tham khảo):");
    let waitingDays = parseInt(prompt("Nhập số ngày dự kiến chờ (≥ 1):"));
    let priority = parseInt(
      prompt(
        "Nhập mức ưu tiên:\n1 = Sinh viên\n2 = Giảng viên/Nghiên cứu sinh\n3 = Nhân viên thư viện / Đặc cách",
      ),
    );

    if (waitingDays > 45) {
      rejectedCount++;
      console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
    } else if (priority === 3) {
      successCount++;
      console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
    } else if (priority === 2 && waitingDays <= 30) {
      successCount++;
      console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
    } else if (priority === 1 && waitingDays <= 21) {
      successCount++;
      console.log("Đặt trước thành công");
    } else {
      pendingCount++;
      console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
    }
  }
} while (hasRequest !== "không");

console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số yêu cầu đã xử lý:", totalRequests);
console.log("Số yêu cầu đặt trước thành công:", successCount);
console.log("Số yêu cầu bị từ chối:", rejectedCount);
console.log("Số yêu cầu chờ xét duyệt:", pendingCount);
