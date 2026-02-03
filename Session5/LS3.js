let booksId = [];
let booksName = [];
let inventoryQuantity = [];
let lowStockCount = 0;
let outOfStockIds = [];

let ask;
do {
  ask = +prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?");
} while (!Number.isInteger(ask) || ask <= 0);

for (let i = 0; i < ask; i++) {
  let id, name, quantity;

  do {
    id = prompt(`Nhập mã sách ${i + 1}:`);
  } while (id === null || id.trim() === "");

  do {
    name = prompt(`Nhập tên sách ${i + 1}:`);
  } while (name === null || name.trim() === "");

  do {
    quantity = +prompt(`Nhập số lượng tồn kho hiện tại:`);
  } while (!Number.isInteger(quantity) || quantity < 0);

  booksId.push(id);
  booksName.push(name);
  inventoryQuantity.push(quantity);
}

console.log(`Tổng số loại sách đang kiểm tra: ${booksId.length}`);

for (let i = 0; i < booksId.length; i++) {
  if (inventoryQuantity[i] <= 5) {
    lowStockCount++;
  }

  if (inventoryQuantity[i] === 0) {
    outOfStockIds.push(booksId[i]);
  }
}

console.log(`Số lượng sách có tồn kho ≤ 5 bản: ${lowStockCount}`);

if (outOfStockIds.length > 0) {
  console.log("Các mã sách đã hết hàng (0 bản):");
  for (let i = 0; i < outOfStockIds.length; i++) {
    console.log(outOfStockIds[i]);
  }
} else {
  console.log("Không có sách nào đã hết hàng.");
}
