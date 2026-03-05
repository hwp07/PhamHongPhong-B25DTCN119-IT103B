let book = [];

let ask = +prompt("Bạn muốn thêm bao nhiêu cuốn sách?");

for (let i = 0; i < ask; i++) {
  let nameBook = prompt(`Nhập tên sách ${i + 1}:`);
  book.push(nameBook);
}

console.log(`Tổng số sách được nhập: ${ask}`);

for (let i = 0; i < book.length; i++) {
  console.log(`Sách ${i + 1}: ${book[i]}`);
}
