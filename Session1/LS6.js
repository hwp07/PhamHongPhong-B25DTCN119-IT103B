let nameBook = prompt("Tên sách: ");
console.log("Tên sách gốc: " + nameBook);

let num = +prompt("Số thứ tự của sách trong thư viện: ");

let newName = nameBook.trim().toUpperCase();

let bookId = `LIB - ${newName} - ${num}`;
console.log(`Mã sách sau chuẩn hóa: ${bookId}`);
