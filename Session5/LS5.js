let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];
let countCategory = 0;
let minIndex = 0;
let ask;

do {
  ask = +prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?");
  if (isNaN(ask) || ask <= 0) {
    alert("Vui lòng nhập số nguyên dương!");
  }
} while (isNaN(ask) || ask <= 0);

for (let i = 0; i < ask; i++) {
  while (true) {
    let input = prompt(`Nhập mã sách ${i + 1}:`);
    if (!input || input.trim() === "") {
      alert("Mã sách không được để trống");
      continue;
    }
    input = input.trim().toUpperCase();
    if (booksId.includes(input)) {
      alert("Mã sách đã tồn tại");
      continue;
    }
    booksId[i] = input;
    break;
  }

  while (true) {
    let input = prompt(`Nhập tên sách ${i + 1}:`);
    if (!input || input.trim() === "") {
      alert("Tên sách không được để trống!");
      continue;
    }
    booksName[i] = input.trim();
    break;
  }

  while (true) {
    let input = prompt(
      `Nhập thể loại (Các thể loại được ngăn cách bằng dấu phẩy):`,
    );
    if (!input || input.trim() === "") {
      alert("Thể loại không được để trống!");
      continue;
    }
    booksCategory[i] = input.trim();
    break;
  }

  while (true) {
    let input = +prompt("Nhập số lượng tồn kho:");
    if (isNaN(input) || input < 0) {
      alert("Số lượng phải là số >= 0");
      continue;
    }
    inventoryQuantity[i] = input;
    break;
  }
}

for (let i = 0; i < ask; i++) {
  if (booksCategory[i].toLowerCase().includes("lập trình")) {
    countCategory++;
  }
}

console.log("Tổng số sách thuộc thể loại 'Lập trình':", countCategory);

console.log("Sách thuộc JavaScript và Web:");
for (let i = 0; i < ask; i++) {
  let category = booksCategory[i].toLowerCase();
  if (category.includes("javascript") && category.includes("web")) {
    console.log(booksId[i]);
  }
}

for (let i = 1; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
    minIndex = i;
  }
}

console.log("Sách tồn kho thấp nhất:");
console.log("Mã sách:", booksId[minIndex]);
console.log("Tên sách:", booksName[minIndex]);
console.log("Tồn kho:", inventoryQuantity[minIndex]);
