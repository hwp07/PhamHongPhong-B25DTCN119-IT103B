let lateBook = [];
let count = 0;
let ask = +prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn? ");

for (let i = 0; i < ask; i++) {
  let nameBook = prompt(`Tên sách ${i + 1}`);
  lateBook.push(nameBook);
}
console.log("Tổng số sách bị trả muộn: " + ask);
for (let i = 0; i < lateBook.length; i++) {
  console.log(`${i + 1} - ${lateBook[i]}`);
}

for (let i = 0; i < lateBook.length; i++) {
  if (lateBook[i].length > 20) {
    count++;
  }
}
console.log("Số lượng sách có tên dài hơn 20 ký tự:" + count);
