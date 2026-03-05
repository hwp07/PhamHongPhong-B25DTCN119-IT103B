let booksId = [];
let booksName = [];
let bookStatus = [];
let ask;

do {
  ask = +prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?");

  if (isNaN(ask) || ask <= 0) {
    alert("Vui lòng nhập số nguyên dương!");
  }
} while (isNaN(ask) || ask <= 0);

for (let i = 0; i < ask; i++) {
  while (
    !(booksId[i] = prompt(`Nhập mã sách ${i + 1}:`)) ||
    booksId[i].trim() === ""
  ) {
    alert("Mã sách không được để trống!");
  }

  while (
    !(booksName[i] = prompt(`Nhập tên sách ${i + 1}:`)) ||
    booksName[i].trim() === ""
  ) {
    alert("Tên sách không được để trống!");
  }

  let statusChoice;
  do {
    statusChoice = +prompt(`Nhập tình trạng ban đầu:
    1. Hỏng nhẹ
    2. Hỏng nặng
    3. Cần sửa gấp`);
  } while (statusChoice < 1 || statusChoice > 3);

  if (statusChoice === 1) {
    bookStatus[i] = "Hỏng nhẹ";
  } else if (statusChoice === 2) {
    bookStatus[i] = "Hỏng nặng";
  } else if (statusChoice === 3) {
    bookStatus[i] = "Cần sửa gấp";
  }
}

console.log("DANH SÁCH BAN ĐẦU:");
for (let i = 0; i < booksId.length; i++) {
  console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`);
}

while (true) {
  let choice = +prompt(
    "Bạn muốn làm gì?\n" +
      "1. Sửa tình trạng sách\n" +
      "2. Loại bỏ (xóa) sách\n" +
      "0. Kết thúc và in báo cáo",
  );

  if (choice === 0) {
    break;
  }

  if (choice === 1) {
    let findId = prompt("Nhập mã sách cần sửa:");

    let index = booksId.indexOf(findId);

    if (index === -1) {
      alert("Không tìm thấy sách!");
    } else {
      let newStatusChoice;
      do {
        newStatusChoice = +prompt(
          "Chọn tình trạng mới:\n" +
            "1. Hỏng nhẹ\n" +
            "2. Hỏng nặng\n" +
            "3. Cần sửa gấp\n" +
            "4. Đã sửa xong\n" +
            "5. Loại bỏ",
        );
      } while (newStatusChoice < 1 || newStatusChoice > 5);

      if (newStatusChoice === 1) {
        bookStatus[index] = "Hỏng nhẹ";
      } else if (newStatusChoice === 2) {
        bookStatus[index] = "Hỏng nặng";
      } else if (newStatusChoice === 3) {
        bookStatus[index] = "Cần sửa gấp";
      } else if (newStatusChoice === 4) {
        bookStatus[index] = "Đã sửa xong";
      } else if (newStatusChoice === 5) {
        bookStatus[index] = "Loại bỏ";
      }

      alert("Cập nhật tình trạng thành công!");
    }
  } else if (choice === 2) {
    let deleteId = prompt("Nhập mã sách cần xóa:");
    let index = booksId.indexOf(deleteId);

    if (index === -1) {
      alert("Không tìm thấy sách!");
    } else {
      booksId.splice(index, 1);
      booksName.splice(index, 1);
      bookStatus.splice(index, 1);
      alert("Đã xóa sách khỏi danh sách!");
    }
  }

  console.log("DANH SÁCH HIỆN TẠI:");
  if (booksId.length === 0) {
    console.log("Danh sách trống");
  } else {
    for (let i = 0; i < booksId.length; i++) {
      console.log(
        `${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`,
      );
    }
  }
}
