// ====== DỮ LIỆU BAN ĐẦU ======
let products = [
  { name: "Laptop Pro", price: 1200, stock: 5 },
  { name: "Chuột Gaming", price: 350, stock: 0 },
  { name: "Bàn phím Cơ", price: 800, stock: 10 },
  { name: "Tai nghe", price: 150, stock: 3 },
  { name: "Màn hình 4K", price: 2000, stock: 2 },
];

// ====== CHỨC NĂNG 1: LỌC SẢN PHẨM CAO CẤP (>500) ======
function filterHighEndProducts() {
  const result = products.filter((p) => p.price > 500).map((p) => p.name);

  console.log("Sản phẩm cao cấp:", result);
}

// ====== CHỨC NĂNG 2: KIỂM ĐỊNH TRẠNG THÁI DỮ LIỆU ======
function checkInventoryStatus() {
  const hasOutOfStock = products.some((p) => p.stock === 0);
  const allAbove100 = products.every((p) => p.price >= 100);

  console.log("Có sản phẩm hết hàng không?", hasOutOfStock);
  console.log("Tất cả sản phẩm giá ≥ 100?", allAbove100);
}

// ====== CHỨC NĂNG 3: TÍNH TỔNG GIÁ TRỊ KHO (REDUCE) ======
function calculateTotalValue() {
  const total = products.reduce((sum, p) => sum + p.price * p.stock, 0);

  console.log("Tổng giá trị kho:", total);
}

// ====== CHỨC NĂNG 4: GIẢM GIÁ 10% (CẬP NHẬT TRỰC TIẾP) ======
function applyDiscount() {
  products.forEach((p) => {
    p.price *= 0.9;
  });

  console.log("Đã áp dụng giảm giá 10%");
}

// ====== CHỨC NĂNG 5: TÌM KIẾM THEO TỪ KHÓA ======
function searchProduct(keyword) {
  const result = products.filter((p) =>
    p.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  console.log(`Kết quả tìm kiếm "${keyword}":`);
  result.forEach((p) => {
    console.log(`- ${p.name} | Giá: ${p.price} | SL: ${p.stock}`);
  });
}

// ====== CHỨC NĂNG 6: BÁO CÁO TÌNH TRẠNG TỒN KHO ======
function generateStockReport() {
  const report = products.map((p) => ({
    name: p.name,
    status: p.stock > 0 ? "Còn hàng" : "Hết hàng",
  }));

  console.log("Báo cáo tồn kho:", report);
}

// ====== CHỨC NĂNG 7: THOÁT CHƯƠNG TRÌNH ======
function exitProgram() {
  console.log("Đã thoát chương trình.");
  running = false;
}

// ====== MENU ĐIỀU KHIỂN ======
let running = true;

while (running) {
  console.log(`
===== MENU =====
1. Lọc sản phẩm cao cấp
2. Kiểm định trạng thái kho
3. Tính tổng giá trị kho
4. Áp dụng giảm giá 10%
5. Tìm kiếm sản phẩm
6. Báo cáo tồn kho
7. Thoát
`);

  let choice = prompt("Chọn chức năng (1-7):");

  switch (choice) {
    case "1":
      filterHighEndProducts();
      break;
    case "2":
      checkInventoryStatus();
      break;
    case "3":
      calculateTotalValue();
      break;
    case "4":
      applyDiscount();
      break;
    case "5":
      let keyword = prompt("Nhập từ khóa tìm kiếm:");
      searchProduct(keyword);
      break;
    case "6":
      generateStockReport();
      break;
    case "7":
      exitProgram();
      break;
    default:
      console.log("Lựa chọn không hợp lệ");
  }
}
