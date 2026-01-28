let book = prompt("Nhập tên sách: ").trim().toUpperCase();
console.log("Tên sách: " + book);

let author = prompt("Nhập tên tác giả: ").toUpperCase();
console.log("Tên tác giả: " + author);

let year = +prompt("Nhập năm xuất bản: ");
console.log("Năm xuất bản: " + year);
console.log("Tuổi sách: " + (2026 - year));

let price = prompt("Nhập giá trị sách: ");
console.log(`Giá tiền của 1 cuốn: ${price} VNĐ`);

let bookId = `${author.slice(0, 3)}${year}-${Math.floor(Math.random() * 1000) + 1}`;
console.log("Mã sách: " + bookId);

console.log("Ngăn kệ gợi ý: " + (Math.floor(Math.random() * 10) + 1));

