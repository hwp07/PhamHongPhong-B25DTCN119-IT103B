let totalBooks = 0;
let lostCount = 0;
let outOfStockCount = 0;
let manyStockCount = 0;
let normalStockCount = 0;

while (true) {
  let ask = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

  if (ask === "không") {
    break;
  }

  if (ask !== "có") {
    alert("Vui lòng nhập 'có' hoặc 'không'");
    continue;
  }

  let code;
  while (true) {
    code = prompt("Mã sách:");
    if (code !== "") {
      break;
    }
    alert("Mã sách không được để trống!");
  }

  let name = prompt("Tên sách:");
  let quantity;
  let status;

  while (true) {
    quantity = +prompt("Số lượng thực tế trong kho:");
    if (quantity >= 0) {
      break;
    }
    alert("Số lượng phải là số nguyên ≥ 0");
  }

  while (true) {
    status = +prompt("Tình trạng sách:\n1 - Bình thường\n2 - Mất");
    if (status === 1 || status === 2) {
      break;
    }
    alert("Chỉ được nhập 1 hoặc 2");
  }

  totalBooks++;

  if (status === 2) {
    console.log("Sách mất");
    lostCount++;
  } else if (status === 1 && quantity === 0) {
    console.log("Sách hết hàng");
    outOfStockCount++;
  } else if (status === 1 && quantity >= 10) {
    console.log("Sách tồn kho nhiều");
    manyStockCount++;
  } else {
    console.log("Sách tồn kho bình thường");
    normalStockCount++;
  }

  console.log({
    code,
    name,
    quantity,
    status,
  });
}

console.log("===== BÁO CÁO KIỂM KÊ =====");
console.log("Tổng số sách đã kiểm kê:", totalBooks);
console.log("Số sách mất:", lostCount);
console.log("Số sách hết hàng:", outOfStockCount);
