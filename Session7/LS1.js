let playerIds = [];
let playerPositions = [];

let ask = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");

while (isNaN(ask) || ask <= 0) {
  alert("Vui lòng nhập số nguyên dương!");
  ask = +prompt("Có bao nhiêu cầu thủ cần nhập?");
}

for (let i = 0; i < ask; i++) {
  let id = prompt(`Nhập mã cầu thủ thứ ${i + 1}`);

  while (playerIds.includes(id)) {
    alert("Mã cầu thủ bị trùng. Vui lòng nhập lại!");
    id = prompt(`Nhập mã cầu thủ thứ ${i + 1}`);
  }

  let position;
  while (true) {
    let choice = +prompt(`Chọn vị trí (1-4):
      1. Thủ môn
      2. Hậu vệ
      3. Tiền vệ
      4.Tiền đạo`);

    switch (choice) {
      case 1:
        position = "Thủ môn";
        break;
      case 2:
        position = "Hậu vệ";
        break;
      case 3:
        position = "Tiền vệ";
        break;
      case 4:
        position = "Tiền đạo";
        break;
      default:
        alert("Lựa chọn không hợp lệ!");
        continue;
    }

    break;
  }

  let find;

  playerIds.push(id);
  playerPositions.push(position);
}

function printTeamRoster() {
  console.log(`Đội bóng hiện tại (${playerIds.length} cầu thủ):`);
  for (let i = 0; i < playerIds.length; i++) {
    console.log(`${i + 1}. ${playerIds[i]} - ${playerPositions[i]}`);
  }
}

function findPlayersByPosition(position) {
  let choice;

  while (true) {
    choice = +prompt(
      "Nhập vị trí cầu thủ muốn đếm số lượng:\n" +
        "1: Thủ môn\n" +
        "2: Hậu vệ\n" +
        "3: Tiền vệ\n" +
        "4: Tiền đạo",
    );

    if (choice === 1) {
      position = "Thủ môn";
      break;
    }
    if (choice === 2) {
      position = "Hậu vệ";
      break;
    }
    if (choice === 3) {
      position = "Tiền vệ";
      break;
    }
    if (choice === 4) {
      position = "Tiền đạo";
      break;
    }

    alert("Lựa chọn không hợp lệ!");
  }

  let count = 0;
  for (let pos of playerPositions) {
    if (pos === position) {
      count++;
    }
  }

  console.log(`Số lượng cầu thủ ở vị trí ${position}: ${count}`);

  let indexes = [];

  for (let i = 0; i < playerPositions.length; i++) {
    if (playerPositions[i] === position) {
      indexes.push(i);
    }
  }

  console.log(`Các chỉ số cầu thủ ở vị trí ${position}: ${indexes.join(", ")}`);
}

printTeamRoster();
findPlayersByPosition();
