// ====== DỮ LIỆU BAN ĐẦU ======
let productNames = [
  "Laptop Pro",
  "Chuột Gaming",
  "Bàn phím Cơ",
  "Tai nghe",
  "Màn hình 4K",
];

let productPrices = [1200, 350, 800, 150, 2000];
let productStocks = [5, 0, 10, 3, 2];

function filterHighEndProducts() {
  const result = [];
  for (let i = 0; i < productNames.length; i++) {
    if (productPrices[i] > 500) {
      result.push(`${productNames[i]} - ${productPrices[i]}`);
    }
  }
  return result.length > 0 ? result : ["Không có sản phẩm cao cấp nào"];
}

function checkInventoryStatus() {
  const hasOutOfStock = productStocks.some((stock) => stock === 0);

  const allAboveFloorPrice = productPrices.every((price) => price > 100);

  let message = "";
  message += hasOutOfStock
    ? "→ Có sản phẩm hết hàng trong kho\n"
    : "→ Không có sản phẩm nào hết hàng\n";

  message += allAboveFloorPrice
    ? "→ Tất cả sản phẩm đều trên giá sàn (100)"
    : "→ Có sản phẩm dưới giá sàn (100)";

  alert(message);
}

function calculateTotalValue() {
  let total = 0;
  for (let i = 0; i < productNames.length; i++) {
    total += productPrices[i] * productStocks[i];
  }

  alert(`Tổng giá trị vốn hóa kho: ${total.toLocaleString()} VND`);
}

function applyDiscount() {
  for (let i = 0; i < productPrices.length; i++) {
    productPrices[i] = Math.round(productPrices[i] * 0.9);
  }
  alert(
    "Đã áp dụng giảm giá 10% cho tất cả sản phẩm!\nGiá mới đã được cập nhật.",
  );
}

function searchProduct(keyword) {
  if (!keyword || keyword.trim() === "") {
    alert("Vui lòng nhập từ khóa tìm kiếm!");
    return;
  }

  const lowerKeyword = keyword.toLowerCase().trim();
  const results = [];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i].toLowerCase().includes(lowerKeyword)) {
      results.push(
        `${productNames[i]}\n` +
          `  Giá: ${productPrices[i].toLocaleString()} VND\n` +
          `  Tồn kho: ${productStocks[i]} cái`,
      );
    }
  }

  if (results.length > 0) {
    alert("KẾT QUẢ TÌM KIẾM:\n\n" + results.join("\n"));
  } else {
    alert(`Không tìm thấy sản phẩm nào chứa từ khóa "${keyword}"`);
  }
}

function generateStockReport() {
  let report = "BÁO CÁO TỒN KHO\n";

  for (let i = 0; i < productNames.length; i++) {
    const status = productStocks[i] > 0 ? "Còn hàng" : "Hết hàng";
    report += `${productNames[i]}\n`;
    report += `  Giá: ${productPrices[i].toLocaleString()} VND\n`;
    report += `  Tồn: ${productStocks[i]} - ${status}\n`;
  }

  alert(report);
}

let choice;
do {
  choice = +prompt(`===== QUẢN LÝ KHO HÀNG =====
1. Lọc sản phẩm cao cấp (> 500)
2. Kiểm định trạng thái dữ liệu (Hết hàng / Giá sàn)
3. Tính tổng giá trị kho
4. Áp dụng giảm giá 10% cho tất cả
5. Tìm kiếm sản phẩm theo từ khóa
6. Báo cáo tình trạng tồn kho
7. Thoát chương trình

Lựa chọn của bạn:`);

  switch (choice) {
    case 1:
      alert(filterHighEndProducts().join("\n"));
      break;

    case 2:
      checkInventoryStatus();
      break;

    case 3:
      calculateTotalValue();
      break;

    case 4:
      applyDiscount();
      break;

    case 5:
      let keyword = prompt("Nhập từ khóa tìm kiếm:");
      searchProduct(keyword);
      break;

    case 6:
      generateStockReport();
      break;

    case 7:
      alert("Cảm ơn bạn! Hẹn gặp lại.");
      break;

    default:
      alert("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 7.");
  }
} while (choice !== 7);
