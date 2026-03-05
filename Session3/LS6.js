let totalFeedback = 0;
let seriousComplaint = 0;
let mediumComplaint = 0;
let lightComplaint = 0;
let improvementSuggestion = 0;
let positiveFeedback = 0;

let hasFeedback;

do {
  hasFeedback = prompt(
    "Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)",
  );

  if (!hasFeedback) continue;

  if (hasFeedback === "có") {
    totalFeedback++;

    let readerName;
    do {
      readerName = prompt("Nhập tên bạn đọc (không được để trống):");
    } while (!readerName);

    let cardId = prompt("Nhập mã thẻ bạn đọc (có thể để trống):");

    let type = parseInt(
      prompt(
        "Nhập loại phản hồi:\n1 = Khiếu nại\n2 = Đề xuất cải thiện\n3 = Phản hồi tích cực",
      ),
    );

    let severity = 0;
    if (type === 1) {
      severity = parseInt(
        prompt(
          "Nhập mức độ nghiêm trọng:\n1 = Nhẹ\n2 = Trung bình\n3 = Nghiêm trọng",
        ),
      );
    }

    let content = prompt("Nhập nội dung ngắn gọn (tham khảo):");

    if (type === 1 && severity === 3) {
      seriousComplaint++;
      console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
    } else if (type === 1 && severity === 2) {
      mediumComplaint++;
      console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
    } else if (type === 1 && severity === 1) {
      lightComplaint++;
      console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
    } else if (type === 2) {
      improvementSuggestion++;
      console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
    } else if (type === 3) {
      positiveFeedback++;
      console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
    } else {
      console.log("→ Dữ liệu không hợp lệ, vui lòng kiểm tra lại");
    }
  }
} while (hasFeedback !== "không");

console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số phản hồi/khiếu nại đã xử lý:", totalFeedback);
console.log("Số khiếu nại nghiêm trọng (mức 3):", seriousComplaint);
console.log("Số khiếu nại trung bình (mức 2):", mediumComplaint);
console.log("Số khiếu nại nhẹ (mức 1):", lightComplaint);
console.log("Số đề xuất cải thiện:", improvementSuggestion);
console.log("Số phản hồi tích cực:", positiveFeedback);
